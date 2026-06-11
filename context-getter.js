module.exports = function(RED) {
    "use strict";

    function ContextGetter(n) {
        RED.nodes.createNode(this, n);
        const node = this;
        node.name             = n.name;
        node.context          = n.context;
        node.workstationid    = n.workstationid;
        node.workstationidType = n.workstationidType || "num";

        node.on('input', function(msg) {
            try {
                let wsid;
                if (node.workstationidType === "msg") {
                    wsid = RED.util.getMessageProperty(msg, node.workstationid);
                } else {
                    wsid = Number(node.workstationid);
                }		

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
                        "message"      : node.context,
						"valuelabel"   : wsid,
						"name"         : node.name,
						"operationtype": "ContextGetterProcess"
                    };                
                msg.payload.push(newmsg);
        
                node.send(msg);					
					
            } catch (err) {
                node.error("error: " + err.message, msg);
            }
        });
    }

    RED.nodes.registerType("Context Getter", ContextGetter);
};
