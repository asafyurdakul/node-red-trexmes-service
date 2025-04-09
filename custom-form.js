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
        
        var operationtype = "CustomDialog";
        var continueevent = "Continue";   
        
        if(n.formainform == true){ 
            operationtype = "MainForm";
            continueevent = "Break";
        }

        node.on('input', function (msg) {
            const newmsg = 
                {
                    "receiveddata" : msg.payload,
                    "name": node.name,
                    "operationtype": operationtype,
                    "continueevent": continueevent,   
                    "customformxml":node.customformxml,
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


/*
RED.httpAdmin.post("/custom-form/run-exe", function (req, res) {
    const exePath = RED.settings.functionGlobalContext.customFormDesignerPath;
    if (!exePath) {
        res.status(500).send("Designer exe path not defined!");
        return;
    }

    const xmlContent = req.body.xml;
    const filename = req.body.filename;
    const arg = `${filename}|${xmlContent}`;

    // "start" komutu ile yeni shell'de çalıştır, GUI'yi gösterebilmek için
    const command = `start "" "${exePath}" "${arg}"`;

    const process = spawn("cmd", ["/c", command], {
        detached: true,
        stdio: "ignore", // process'e bağlı kalmamak için
        windowsHide: false
    });

    // Süreci kapat ve cevap dön
    process.unref(); // ana işlemden ayır

    // XML çıktısını hemen değil, biraz gecikmeli olarak kontrol et
    setTimeout(() => {
        const outputPath = `c:/temp/${filename}_form_design.xml`;
        if (!fs.existsSync(outputPath)) {
            return res.status(404).json({ success: false, error: "File not found" });
        }

        fs.readFile(outputPath, "utf8", (err, data) => {
            if (err) {
                return res.status(500).json({ success: false, error: err.message });
            }
            res.json({ success: true, output: data });
        });
    }, 3000); // 3 saniye sonra dosya var mı kontrol et
});
*/
    RED.nodes.registerType("Custom Form",CustomForm);

}