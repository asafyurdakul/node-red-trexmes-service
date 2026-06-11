module.exports = function(RED) {
    "use strict";

    function ContextSetter(n) {
        RED.nodes.createNode(this, n);
        const node = this;
        node.name              = n.name;
        node.context           = n.context;
        node.workstationid     = n.workstationid;
        node.workstationidType = n.workstationidType || "num";
        node.items             = n.items || [];

        node.on('input', function(msg) {
            try {
                let wsid;
                if (node.workstationidType === "msg") {
                    wsid = RED.util.getMessageProperty(msg, node.workstationid);
                } else {
                    wsid = Number(node.workstationid);
                }

                // Snapshot msg before payload is overwritten so 'msg' type items resolve correctly
                const msgSnapshot = RED.util.cloneMessage(msg);

                let payload = msg.payload;
                let receiveddata = null;
                if (Array.isArray(payload)) {
                    if (payload.length > 0 && payload[0].receiveddata !== undefined && payload[0].receiveddata !== null) {
                        receiveddata = msg.payload[0].receiveddata;
                    }
                } else {
                    receiveddata = msg.payload;
                    msg.payload = [];
                }

                let tasks = node.items.map(function(item) {
                    return new Promise(function(resolve, reject) {
                        let computedValue;
                        switch (item.vt) {
                            case 'msg':
                                computedValue = RED.util.getMessageProperty(msgSnapshot, item.v);
                                break;
                            case 'flow':
                                computedValue = node.context().flow.get(item.v);
                                break;
                            case 'global':
                                computedValue = node.context().global.get(item.v);
                                break;
                            case 'num':
                                computedValue = Number(item.v);
                                break;
                            case 'json':
                                try { computedValue = JSON.parse(item.v); } catch (e) { computedValue = null; }
                                break;
                            case 'bool':
                                computedValue = item.v === 'true';
                                break;
                            case 'jsonata': {
                                let expr = RED.util.prepareJSONataExpression(item.v, node);
                                RED.util.evaluateJSONataExpression(expr, msgSnapshot, function(err, result) {
                                    if (err) { reject(err); }
                                    else { resolve({ itemname: item.n, value: result }); }
                                });
                                return;
                            }
                            default:
                                computedValue = item.v;
                        }
                        resolve({ itemname: item.n, value: computedValue });
                    });
                });

                Promise.all(tasks).then(function(resolvedItems) {
                    const newmsg = {
                        "message"      : node.context,
                        "valuelabel"   : wsid,
                        "name"         : node.name,
                        "operationtype": "ContextSetterProcess",
                        "bindcontrols" : resolvedItems
                    };
                    msg.payload.push(newmsg);
                    node.send(msg);
                }).catch(function(err) {
                    node.error("error: " + err.message, msg);
                });

            } catch (err) {
                node.error("error: " + err.message, msg);
            }
        });
    }

    RED.nodes.registerType("Context Setter", ContextSetter);
};
