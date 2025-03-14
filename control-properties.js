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

                const bindcontrols = node.props.map(item => ({
                    ControlName: item.p,
                    PropertyName: item.v,
                    Value: item.d
                }));
                
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
            } catch (err) {
                node.error("error: " + err.message, msg);
            }
        });
       

    }

    RED.nodes.registerType("Control Properties",ControlProperties);

}