module.exports = function(RED) {
    "use strict";

    function ExecuteScript(n) {
        RED.nodes.createNode(this,n);
        const node = this;
        node.name = n.name;        
        node.script = n.script;
        node.formname = n.formname;

        var formname = node.formname;

        node.on('input', function (msg) {
            try 
            {
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
                                "operationtype": "ExecuteScript",
                                "name": formname,
                                "message": node.script
                            };                
                        msg.payload.push(newmsg);
        
                        node.send(msg);
                    
                    
                
                
            } catch (err) {
                node.error("error: " + err.message, msg);
            }
        });
       

    }

    RED.nodes.registerType("Execute Script",ExecuteScript);

}