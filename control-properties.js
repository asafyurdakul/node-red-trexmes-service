module.exports = function(RED) {
    "use strict";

    function ControlProperties(n) {
        RED.nodes.createNode(this,n);
        const node = this;
        node.name = n.name;        
        node.formainform = n.formainform;
        node.props = n.props;
        node.formname = n.formname;

        var formname = node.formname;
        
        if(n.formainform == true){ 
            formname = "AppForm";
        }

        node.on('input', function (msg) {
            try 
            {
                let tasks = node.props.map((item) => {
                    return new Promise((resolve, reject) => {
                        let computedValue;
        
                        switch (item.dt) {
                            case 'msg':
                                computedValue = RED.util.getMessageProperty(msg, item.d);
                                break;
                            case 'flow':
                                computedValue = node.context().flow.get(item.d);
                                break;
                            case 'global':
                                computedValue = node.context().global.get(item.d);
                                break;
                            case 'num':
                                computedValue = Number(item.d);
                                break;
                            case 'json':
                                try { computedValue = JSON.parse(item.d); } catch (e) { computedValue = null; }
                                break;
                            case 'bool':
                                computedValue = item.d === 'true';
                                break;
                            case 'jsonata':
                                let expr = RED.util.prepareJSONataExpression(item.d, node);
                                RED.util.evaluateJSONataExpression(expr, msg, (err, result) => {
                                    if (err) {
                                        reject(err);
                                    } else {
                                        computedValue = result;
                                        resolve({
                                            ControlName: item.p,
                                            PropertyName: item.v,
                                            Value: computedValue
                                        });
                                    }
                                });
                                return; // Callback async olduğu için fonksiyondan çıkıyoruz
                            default:
                                computedValue = item.d;
                        }
        
                        resolve({
                            ControlName: item.p,
                            PropertyName: item.v,
                            Value: computedValue
                        });
                    });
                });

                Promise.all(tasks)
                    .then((bindcontrols) => {
                        let payload = msg.payload;
                        let receiveddata = null; 
                        if (Array.isArray(payload)) {
                            if(payload.length>0 && payload[0].receiveddata !== undefined && payload[0].receiveddata !== null){
                                receiveddata = msg.payload[0].receiveddata;
                            }
                        }                    
                        else {
                            receiveddata = msg.payload;
                            msg.payload = [];
                        }
        
                        const newmsg = 
                            {
                                "receiveddata" : receiveddata,
                                "name": formname,
                                "operationtype": "ControlProperties",
                                "value": bindcontrols
                            };                
                        msg.payload.push(newmsg);
        
                        node.send(msg);
                    })
                    .catch((err) => {
                        console.error("Error:", err);                        
                    });
                
                
            } catch (err) {
                node.error("error: " + err.message, msg);
            }
        });
       

    }

    RED.nodes.registerType("Control Properties",ControlProperties);

}