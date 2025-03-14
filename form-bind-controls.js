module.exports = function(RED) {
    "use strict";

    function BindControls(n) {
        RED.nodes.createNode(this,n);
        const node = this;
        node.name = n.name;        
        node.formainform = n.formainform;
        node.props = n.props;
        node.data = n.data;
        node.dataType = n.dataType;
        node.formname = n.formname;

        var formname = node.formname;
        
        if(n.formainform == true){ 
            formname = "AppForm";
        }

        node.on('input', function (msg) {
            try 
            {
                let inputValueData = null;
                if(node.data !== null && node.data !== undefined && node.data !== ""){
                    if (node.dataType === "msg") {
                        inputValueData = RED.util.getMessageProperty(msg, node.data);
                    } else if (node.dataType === "flow") {
                        inputValueData = node.context().flow.get(node.data);
                    } else if (node.dataType === "global") {
                        inputValueData = node.context().global.get(node.data);
                    }
                }

                const bindcontrols = node.props.map(item => ({
                    Name: item.p,
                    FieldName: item.v
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
                        "operationtype": "BindControl",
                        "bindcontrols":bindcontrols,
                        "value": inputValueData
                    };
                msg.payload.push(newmsg);

                node.send(msg);
            } catch (err) {
                node.error("eRROR: " + err.message, msg);
            }
        });
       

    }

    RED.nodes.registerType("Form Bind Controls",BindControls);

}