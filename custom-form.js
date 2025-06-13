module.exports = function(RED) {
    "use strict";
    const { spawn } = require("child_process");
    const fs = require("fs");
    const path = require("path");

    function CustomForm(n) {
        RED.nodes.createNode(this,n);
        const node = this;
        node.name = n.name;
        node.customformxml = n.customformxml;
        node.isstyled = n.isstyled;
        node.formainform = n.formainform;
        node.designformname = n.designformname;
        
        var operationtype = "CustomDialog";
        var continueevent = "Continue";   
        
        if(n.formainform == true){ 
            operationtype = "MainForm";
            continueevent = "Break";
        }        

        node.on('input', function (msg) {
            let selectedXml;

            // designformname varsa, Form Design nodunu ara
            if (node.designformname) {
                RED.nodes.eachNode(function (n) {
                    if (n.type === "Form Design" && n.name === node.designformname) {
                        if (n.formdesignxml) {
                            selectedXml = n.formdesignxml;
                        }
                    }
                });
            }

            if(node.customformxml !== "") {
                selectedXml = node.customformxml;
            }     

            const newmsg = 
                {
                    "receiveddata" : msg.payload,
                    "name": node.name,
                    "operationtype": operationtype,
                    "continueevent": continueevent,   
                    "customformxml":selectedXml,
                    "isstyled": node.isstyled
                };
            msg.payload = [];
            msg.payload.push(newmsg);

            node.send(msg);
        });
    }

    RED.httpAdmin.post("/custom-form/run-exe", function (req, res) {
        const exePath = RED.settings.functionGlobalContext.customFormDesignerPath;
        if (!exePath) {
            res.status(500).send("Designer exe path not defined!");
            return;
        }

        // Gönderilecek XML içeriği
        const xmlContent = req.body.xml;
        const filename = req.body.filename;
        // XML içeriğini parametre olarak gönder
        const process = spawn(exePath, [filename + "|"+ xmlContent]);  

        let output = "";
        let errorOutput = "";

        process.stdout.on("data", (data) => {
            output += data.toString();
        });

        process.stderr.on("data", (data) => {
            errorOutput += data.toString();
        });

        process.on("close", (code) => {
            if (code === 0) {    
                const outputPath = "c:\\temp\\"+filename+"_form_design.xml";  
                if (!fs.existsSync(outputPath)) {
                    return res.status(404).json({ success: false, error: "File not found" });
                }                        
                
                fs.readFile(outputPath, "utf8", (err, data) => {
                    if (err) {
                        return res.status(500).json({ success: false, error: err.message });
                    }
                    res.json({ success: true, output: data });
                });
            } else {
                res.status(500).json({ success: false, error: "Exe failed to execute" });
            }
        });

        process.on("error", (err) => {
            console.error("Error spawning process:", err);
            res.status(500).send("Exe could not be started: " + err.message);
        });
    });

    RED.nodes.registerType("Custom Form",CustomForm);

    function FormDesign(n) {
        RED.nodes.createNode(this,n);
        const node = this;
        node.name = n.name;
        node.formdesignxml = n.formdesignxml;
    }

    RED.nodes.registerType("Form Design",FormDesign);

}