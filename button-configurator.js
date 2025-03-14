module.exports = function(RED) {
    "use strict";
    var path = require("path");
    const express = require("express");

    function ButtonConfigurator(n) {
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

                const controls = node.props.map(item => ({
                    ButtonIndexType: Number(item.p)-1 ,
                    DefaultCaption: item.v,
                    IsVisible: item.d,
                    IsToOverrideDefaultHandler: item.e,
                    ComponentName: item.f,
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
                        "operationtype": "UIButtonConfig",
                        "value": controls
                    };                
                msg.payload.push(newmsg);

                node.send(msg);
            } catch (err) {
                node.error("error: " + err.message, msg);
            }
        });
       

    }

    RED.nodes.registerType("Button Configurator",ButtonConfigurator);

    const assetsPath = path.join(__dirname, "assets");  
    RED.httpAdmin.use("/node-red-trexmes-service/assets", express.static(assetsPath));
}