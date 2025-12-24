module.exports = function(RED) {
    "use strict";

    function ExecuteProcess(n) {
        RED.nodes.createNode(this,n);
        const node = this;
        node.name = n.name;        
        node.isHandled = n.isHandled;
        // isHandledType'i node konfigürasyonundan al
        node.isHandledType = n.isHandledType || "bool"; // default değer

        node.on('input', function (msg) {

            //node.warn("isHandled: " + node.isHandled + " (" + node.isHandledType + ")");

            try {
                let isHandled;
                
                switch (node.isHandledType) {
                    case "bool":
                        isHandled = node.isHandled;
                        break;

                    case "msg":
                        isHandled = RED.util.getMessageProperty(msg, node.isHandled);
                        break;

                    case "flow":
                        isHandled = node.context().flow.get(node.isHandled);
                        break;
                    default:
                        // Eğer isHandledType undefined ise bool olarak kabul et
                        isHandled = node.isHandled;
                        node.isHandledType = "bool";                        
                }

                isHandled = (isHandled === true);

                if (!Array.isArray(msg.payload)) {
                    node.status({ fill: "red", shape: "ring", text: "payload should be a json array" });
                    return;
                }

                msg.payload.push({
                    operationtype: "TrexEventHandler",
                    continueevent: !isHandled
                });

                node.send(msg);

            } catch (err) {
                node.error(err.message, msg);
            }
        });


    }

    RED.nodes.registerType("Handle Setter",ExecuteProcess);

}