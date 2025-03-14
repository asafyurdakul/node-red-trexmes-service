module.exports = function(RED) {
    "use strict";

    function MainFormAction(n) {
        RED.nodes.createNode(this,n);
        const node = this;
        node.name = n.name;                
        node.buttonindex = n.buttonindex;

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
                        "name": node.buttonindex,
                        "operationtype": "TriggerMain",
                    };
                msg.payload.push(newmsg);

                node.send(msg);
            } catch (err) {
                node.error("error: " + err.message, msg);
            }
        });
       

    }

    RED.nodes.registerType("Main Form Action",MainFormAction);

}