
module.exports = function(RED) {
    "use strict";
    var bodyParser = require("body-parser");
    var multer = require("multer");
    var cookieParser = require("cookie-parser");
    var getBody = require('raw-body');
    var cors = require('cors');
    var onHeaders = require('on-headers');
    var typer = require('content-type');
    var mediaTyper = require('media-typer');
    var isUtf8 = require('is-utf8');
    var hashSum = require("hash-sum");

    function rawBodyParser(req, res, next) {
        if (req.skipRawBodyParser) { next(); } // don't parse this if told to skip
        if (req._body) { return next(); }
        req.body = "";
        req._body = true;

        var isText = true;
        var checkUTF = false;

        if (req.headers['content-type']) {
            var contentType = typer.parse(req.headers['content-type'])
            if (contentType.type) {
                var parsedType = mediaTyper.parse(contentType.type);
                if (parsedType.type === "text") {
                    isText = true;
                } else if (parsedType.subtype === "xml" || parsedType.suffix === "xml") {
                    isText = true;
                } else if (parsedType.type !== "application") {
                    isText = false;
                } else if ((parsedType.subtype !== "octet-stream")
                    && (parsedType.subtype !== "cbor")
                    && (parsedType.subtype !== "x-protobuf")) {
                    checkUTF = true;
                } else {
                    // application/octet-stream or application/cbor
                    isText = false;
                }

            }
        }

        getBody(req, {
            length: req.headers['content-length'],
            encoding: isText ? "utf8" : null
        }, function (err, buf) {
            if (err) { return next(err); }
            if (!isText && checkUTF && isUtf8(buf)) {
                buf = buf.toString()
            }
            req.body = buf;
            next();
        });
    }
  
    function createResponseWrapper(node,res) {
        var wrapper = {
            _res: res
        };
        var toWrap = [
            "append",
            "attachment",
            "cookie",
            "clearCookie",
            "download",
            "end",
            "format",
            "get",
            "json",
            "jsonp",
            "links",
            "location",
            "redirect",
            "render",
            "send",
            "sendfile",
            "sendFile",
            "sendStatus",
            "set",
            "status",
            "type",
            "vary"
        ];
        toWrap.forEach(function(f) {
            wrapper[f] = function() {
                node.warn(RED._("event-subscribers.errors.deprecated-call",{method:"msg.res."+f}));
                var result = res[f].apply(res,arguments);
                if (result === res) {
                    return wrapper;
                } else {
                    return result;
                }
            }
        });
        return wrapper;
    }

    var corsHandler = function(req,res,next) { next(); }

    if (RED.settings.httpNodeCors) {
        corsHandler = cors(RED.settings.httpNodeCors);
        RED.httpNode.options("*",corsHandler);
    }

    function BusinessEventSubscriber(n) {
        RED.nodes.createNode(this,n);
        if (RED.settings.httpNodeRoot !== false) {
            n.method = "post";
            if (!n.event) {
                this.warn(RED._("event-subscribers.errors.missing-path"));
                return;
            }
            this.event = n.event;

            if (this.event[0] !== '/') {
                this.event = '/'+this.event;
            } 

            this.method = n.method;
            var node = this;

            this.errorHandler = function(err,req,res,next) {
                node.warn(err);
                res.sendStatus(500);
            };

            this.callback = function(req,res) {
                var msgid = RED.util.generateId();
                res._msgid = msgid;
                // Since Node 15, req.headers are lazily computed and the property
                // marked as non-enumerable.
                // That means it doesn't show up in the Debug sidebar.
                // This redefines the property causing it to be evaluated *and*
                // marked as enumerable again.
                Object.defineProperty(req, 'headers', {
                    value: req.headers,
                    enumerable: true
                })
                //Bütün talepler POST olcağı için burada bir kontrol yapmaya gerek yok
                //if (node.method.match(/^(post|delete|put|options|patch)$/)) { }
                if(node.method == "post"){
                    node.status({}); //clear node status                        
                    node.send({_msgid:msgid,req:req,res:createResponseWrapper(node,res),payload:req.body});   
                    node.status({fill:"yellow",shape:"dot",text:"Triggered"});

                    setTimeout(function() {
                        node.status({}); // 1 saniye sonra status'u temizle
                    }, 1000);  
                }             
                
            };

            var httpMiddleware = function(req,res,next) { next(); }

            if (RED.settings.httpNodeMiddleware) {
                if (typeof RED.settings.httpNodeMiddleware === "function" || Array.isArray(RED.settings.httpNodeMiddleware)) {
                    httpMiddleware = RED.settings.httpNodeMiddleware;
                }
            }

            var maxApiRequestSize = RED.settings.apiMaxLength || '5mb';
            var jsonParser = bodyParser.json({limit:maxApiRequestSize});
            var urlencParser = bodyParser.urlencoded({limit:maxApiRequestSize,extended:true});

            var metricsHandler = function(req,res,next) { next(); }
            if (this.metric()) {
                metricsHandler = function(req, res, next) {
                    var startAt = process.hrtime();
                    onHeaders(res, function() {
                        if (res._msgid) {
                            var diff = process.hrtime(startAt);
                            var ms = diff[0] * 1e3 + diff[1] * 1e-6;
                            var metricResponseTime = ms.toFixed(3);
                            var metricContentLength = res.getHeader("content-length");
                            //assuming that _id has been set for res._metrics in HttpOut node!
                            node.metric("response.time.millis", {_msgid:res._msgid} , metricResponseTime);
                            node.metric("response.content-length.bytes", {_msgid:res._msgid} , metricContentLength);
                        }
                    });
                    next();
                };
            }

            var multipartParser = function(req,res,next) { next(); }
            if (this.method == "post") {            
                RED.httpNode.post(this.event,cookieParser(),httpMiddleware,corsHandler,metricsHandler,jsonParser,urlencParser,multipartParser,rawBodyParser,this.callback,this.errorHandler);
            }

            this.on("close",function() {
                var node = this;
                node.method = "post";
                RED.httpNode._router.stack.forEach(function(route,i,routes) {
                    if (route.route && route.route.path === node.event && route.route.methods[node.method]) {
                        routes.splice(i,1);
                    }
                });
            });

            
        } else {
            this.warn(RED._("event-subscribers.errors.not-created"));
        }
    }
    RED.nodes.registerType("Business Events",BusinessEventSubscriber);

    function ApplicationEventSubscriber(n) {
        RED.nodes.createNode(this,n);
        if (RED.settings.httpNodeRoot !== false) {
            n.method = "post";
            if (!n.event) {
                this.warn(RED._("event-subscribers.errors.missing-path"));
                return;
            }
            this.event = n.event;

            if (this.event[0] !== '/') {
                this.event = '/'+this.event;
            } 

            this.method = n.method;
            var node = this;

            this.errorHandler = function(err,req,res,next) {
                node.warn(err);
                res.sendStatus(500);
            };

            this.callback = function(req,res) {
                  var msgid = RED.util.generateId();
                res._msgid = msgid;
                // Since Node 15, req.headers are lazily computed and the property
                // marked as non-enumerable.
                // That means it doesn't show up in the Debug sidebar.
                // This redefines the property causing it to be evaluated *and*
                // marked as enumerable again.
                Object.defineProperty(req, 'headers', {
                    value: req.headers,
                    enumerable: true
                })
                //Bütün talepler POST olcağı için burada bir kontrol yapmaya gerek yok
                //if (node.method.match(/^(post|delete|put|options|patch)$/)) { }
                if(node.method == "post"){
                    node.status({}); //clear node status                        
                    node.send({_msgid:msgid,req:req,res:createResponseWrapper(node,res),payload:req.body});   
                    node.status({fill:"yellow",shape:"dot",text:"Triggered"});

                    setTimeout(function() {
                        node.status({}); // 1 saniye sonra status'u temizle
                    }, 1000);  
                }             
                
            };

            var httpMiddleware = function(req,res,next) { next(); }

            if (RED.settings.httpNodeMiddleware) {
                if (typeof RED.settings.httpNodeMiddleware === "function" || Array.isArray(RED.settings.httpNodeMiddleware)) {
                    httpMiddleware = RED.settings.httpNodeMiddleware;
                }
            }

            var maxApiRequestSize = RED.settings.apiMaxLength || '5mb';
            var jsonParser = bodyParser.json({limit:maxApiRequestSize});
            var urlencParser = bodyParser.urlencoded({limit:maxApiRequestSize,extended:true});

            var metricsHandler = function(req,res,next) { next(); }
            if (this.metric()) {
                metricsHandler = function(req, res, next) {
                    var startAt = process.hrtime();
                    onHeaders(res, function() {
                        if (res._msgid) {
                            var diff = process.hrtime(startAt);
                            var ms = diff[0] * 1e3 + diff[1] * 1e-6;
                            var metricResponseTime = ms.toFixed(3);
                            var metricContentLength = res.getHeader("content-length");
                            //assuming that _id has been set for res._metrics in HttpOut node!
                            node.metric("response.time.millis", {_msgid:res._msgid} , metricResponseTime);
                            node.metric("response.content-length.bytes", {_msgid:res._msgid} , metricContentLength);
                        }
                    });
                    next();
                };
            }

            var multipartParser = function(req,res,next) { next(); }
            if (this.method == "post") {            
                RED.httpNode.post(this.event,cookieParser(),httpMiddleware,corsHandler,metricsHandler,jsonParser,urlencParser,multipartParser,rawBodyParser,this.callback,this.errorHandler);
            }

            this.on("close",function() {
                var node = this;
                node.method = "post";
                RED.httpNode._router.stack.forEach(function(route,i,routes) {
                    if (route.route && route.route.path === node.event && route.route.methods[node.method]) {
                        routes.splice(i,1);
                    }
                });
            });

            
        } else {
            this.warn(RED._("event-subscribers.errors.not-created"));
        }
    }
    RED.nodes.registerType("Application Events",ApplicationEventSubscriber);

    function SystemEventSubscriber(n) {
        RED.nodes.createNode(this,n);
        if (RED.settings.httpNodeRoot !== false) {
            n.method = "post";
            if (!n.event) {
                this.warn(RED._("event-subscribers.errors.missing-path"));
                return;
            }
            this.event = n.event;

            if (this.event[0] !== '/') {
                this.event = '/'+this.event;
            } 

            this.method = n.method;
            var node = this;

            this.errorHandler = function(err,req,res,next) {
                node.warn(err);
                res.sendStatus(500);
            };

            this.callback = function(req,res) {
                  var msgid = RED.util.generateId();
                res._msgid = msgid;
                // Since Node 15, req.headers are lazily computed and the property
                // marked as non-enumerable.
                // That means it doesn't show up in the Debug sidebar.
                // This redefines the property causing it to be evaluated *and*
                // marked as enumerable again.
                Object.defineProperty(req, 'headers', {
                    value: req.headers,
                    enumerable: true
                })
                //Bütün talepler POST olcağı için burada bir kontrol yapmaya gerek yok
                //if (node.method.match(/^(post|delete|put|options|patch)$/)) { }
                if(node.method == "post"){
                    node.status({}); //clear node status                        
                    node.send({_msgid:msgid,req:req,res:createResponseWrapper(node,res),payload:req.body});   
                    node.status({fill:"yellow",shape:"dot",text:"Triggered"});

                    setTimeout(function() {
                        node.status({}); // 1 saniye sonra status'u temizle
                    }, 1000);   
                }             
                
            };

            var httpMiddleware = function(req,res,next) { next(); }

            if (RED.settings.httpNodeMiddleware) {
                if (typeof RED.settings.httpNodeMiddleware === "function" || Array.isArray(RED.settings.httpNodeMiddleware)) {
                    httpMiddleware = RED.settings.httpNodeMiddleware;
                }
            }

            var maxApiRequestSize = RED.settings.apiMaxLength || '5mb';
            var jsonParser = bodyParser.json({limit:maxApiRequestSize});
            var urlencParser = bodyParser.urlencoded({limit:maxApiRequestSize,extended:true});

            var metricsHandler = function(req,res,next) { next(); }
            if (this.metric()) {
                metricsHandler = function(req, res, next) {
                    var startAt = process.hrtime();
                    onHeaders(res, function() {
                        if (res._msgid) {
                            var diff = process.hrtime(startAt);
                            var ms = diff[0] * 1e3 + diff[1] * 1e-6;
                            var metricResponseTime = ms.toFixed(3);
                            var metricContentLength = res.getHeader("content-length");
                            //assuming that _id has been set for res._metrics in HttpOut node!
                            node.metric("response.time.millis", {_msgid:res._msgid} , metricResponseTime);
                            node.metric("response.content-length.bytes", {_msgid:res._msgid} , metricContentLength);
                        }
                    });
                    next();
                };
            }

            var multipartParser = function(req,res,next) { next(); }
            if (this.method == "post") {            
                RED.httpNode.post(this.event,cookieParser(),httpMiddleware,corsHandler,metricsHandler,jsonParser,urlencParser,multipartParser,rawBodyParser,this.callback,this.errorHandler);
            }

            this.on("close",function() {
                var node = this;
                node.method = "post";
                RED.httpNode._router.stack.forEach(function(route,i,routes) {
                    if (route.route && route.route.path === node.event && route.route.methods[node.method]) {
                        routes.splice(i,1);
                    }
                });
            });

            
        } else {
            this.warn(RED._("event-subscribers.errors.not-created"));
        }
    }
    RED.nodes.registerType("System Events",SystemEventSubscriber);

    function CommunicationEventSubscriber(n) {
        RED.nodes.createNode(this,n);
        if (RED.settings.httpNodeRoot !== false) {
            n.method = "post";
            if (!n.event) {
                this.warn(RED._("event-subscribers.errors.missing-path"));
                return;
            }
            this.event = n.event;

            if (this.event[0] !== '/') {
                this.event = '/'+this.event;
            } 

            this.method = n.method;
            var node = this;

            this.errorHandler = function(err,req,res,next) {
                node.warn(err);
                res.sendStatus(500);
            };

            this.callback = function(req,res) {
                  var msgid = RED.util.generateId();
                res._msgid = msgid;
                // Since Node 15, req.headers are lazily computed and the property
                // marked as non-enumerable.
                // That means it doesn't show up in the Debug sidebar.
                // This redefines the property causing it to be evaluated *and*
                // marked as enumerable again.
                Object.defineProperty(req, 'headers', {
                    value: req.headers,
                    enumerable: true
                })
                //Bütün talepler POST olcağı için burada bir kontrol yapmaya gerek yok
                //if (node.method.match(/^(post|delete|put|options|patch)$/)) { }
                if(node.method == "post"){
                    node.status({}); //clear node status                        
                    node.send({_msgid:msgid,req:req,res:createResponseWrapper(node,res),payload:req.body});   
                    node.status({fill:"yellow",shape:"dot",text:"Triggered"});

                    setTimeout(function() {
                        node.status({}); // 1 saniye sonra status'u temizle
                    }, 1000);    
                }             
                
            };

            var httpMiddleware = function(req,res,next) { next(); }

            if (RED.settings.httpNodeMiddleware) {
                if (typeof RED.settings.httpNodeMiddleware === "function" || Array.isArray(RED.settings.httpNodeMiddleware)) {
                    httpMiddleware = RED.settings.httpNodeMiddleware;
                }
            }

            var maxApiRequestSize = RED.settings.apiMaxLength || '5mb';
            var jsonParser = bodyParser.json({limit:maxApiRequestSize});
            var urlencParser = bodyParser.urlencoded({limit:maxApiRequestSize,extended:true});

            var metricsHandler = function(req,res,next) { next(); }
            if (this.metric()) {
                metricsHandler = function(req, res, next) {
                    var startAt = process.hrtime();
                    onHeaders(res, function() {
                        if (res._msgid) {
                            var diff = process.hrtime(startAt);
                            var ms = diff[0] * 1e3 + diff[1] * 1e-6;
                            var metricResponseTime = ms.toFixed(3);
                            var metricContentLength = res.getHeader("content-length");
                            //assuming that _id has been set for res._metrics in HttpOut node!
                            node.metric("response.time.millis", {_msgid:res._msgid} , metricResponseTime);
                            node.metric("response.content-length.bytes", {_msgid:res._msgid} , metricContentLength);
                        }
                    });
                    next();
                };
            }

            var multipartParser = function(req,res,next) { next(); }
            if (this.method == "post") {            
                RED.httpNode.post(this.event,cookieParser(),httpMiddleware,corsHandler,metricsHandler,jsonParser,urlencParser,multipartParser,rawBodyParser,this.callback,this.errorHandler);
            }

            this.on("close",function() {
                var node = this;
                node.method = "post";
                RED.httpNode._router.stack.forEach(function(route,i,routes) {
                    if (route.route && route.route.path === node.event && route.route.methods[node.method]) {
                        routes.splice(i,1);
                    }
                });
            });

            
        } else {
            this.warn(RED._("event-subscribers.errors.not-created"));
        }
    }
    RED.nodes.registerType("Communication Events",CommunicationEventSubscriber);

    function DisplayEventSubscriber(n) {
        RED.nodes.createNode(this,n);
        if (RED.settings.httpNodeRoot !== false) {
            n.method = "post";
            if (!n.event) {
                this.warn(RED._("event-subscribers.errors.missing-path"));
                return;
            }
            this.event = n.event;

            if (this.event[0] !== '/') {
                this.event = '/'+this.event;
            } 

            this.method = n.method;
            var node = this;

            this.errorHandler = function(err,req,res,next) {
                node.warn(err);
                res.sendStatus(500);
            };

            this.callback = function(req,res) {
                  var msgid = RED.util.generateId();
                res._msgid = msgid;
                // Since Node 15, req.headers are lazily computed and the property
                // marked as non-enumerable.
                // That means it doesn't show up in the Debug sidebar.
                // This redefines the property causing it to be evaluated *and*
                // marked as enumerable again.
                Object.defineProperty(req, 'headers', {
                    value: req.headers,
                    enumerable: true
                })
                //Bütün talepler POST olcağı için burada bir kontrol yapmaya gerek yok
                //if (node.method.match(/^(post|delete|put|options|patch)$/)) { }
                if(node.method == "post"){
                    node.status({}); //clear node status                        
                    node.send({_msgid:msgid,req:req,res:createResponseWrapper(node,res),payload:req.body});   
                    node.status({fill:"yellow",shape:"dot",text:"Triggered"});

                    setTimeout(function() {
                        node.status({}); // 1 saniye sonra status'u temizle
                    }, 1000);   
                }             
                
            };

            var httpMiddleware = function(req,res,next) { next(); }

            if (RED.settings.httpNodeMiddleware) {
                if (typeof RED.settings.httpNodeMiddleware === "function" || Array.isArray(RED.settings.httpNodeMiddleware)) {
                    httpMiddleware = RED.settings.httpNodeMiddleware;
                }
            }

            var maxApiRequestSize = RED.settings.apiMaxLength || '5mb';
            var jsonParser = bodyParser.json({limit:maxApiRequestSize});
            var urlencParser = bodyParser.urlencoded({limit:maxApiRequestSize,extended:true});

            var metricsHandler = function(req,res,next) { next(); }
            if (this.metric()) {
                metricsHandler = function(req, res, next) {
                    var startAt = process.hrtime();
                    onHeaders(res, function() {
                        if (res._msgid) {
                            var diff = process.hrtime(startAt);
                            var ms = diff[0] * 1e3 + diff[1] * 1e-6;
                            var metricResponseTime = ms.toFixed(3);
                            var metricContentLength = res.getHeader("content-length");
                            //assuming that _id has been set for res._metrics in HttpOut node!
                            node.metric("response.time.millis", {_msgid:res._msgid} , metricResponseTime);
                            node.metric("response.content-length.bytes", {_msgid:res._msgid} , metricContentLength);
                        }
                    });
                    next();
                };
            }

            var multipartParser = function(req,res,next) { next(); }
            if (this.method == "post") {            
                RED.httpNode.post(this.event,cookieParser(),httpMiddleware,corsHandler,metricsHandler,jsonParser,urlencParser,multipartParser,rawBodyParser,this.callback,this.errorHandler);
            }

            this.on("close",function() {
                var node = this;
                node.method = "post";
                RED.httpNode._router.stack.forEach(function(route,i,routes) {
                    if (route.route && route.route.path === node.event && route.route.methods[node.method]) {
                        routes.splice(i,1);
                    }
                });
            });

            
        } else {
            this.warn(RED._("event-subscribers.errors.not-created"));
        }
    }
    RED.nodes.registerType("Display Events",DisplayEventSubscriber);

    function FormEventSubscriber(n) {
        RED.nodes.createNode(this,n);
        if (RED.settings.httpNodeRoot !== false) {
            n.method = "post";
                       
            var formname = n.formname;            
            if(n.formainform == true){ 
                formname = "AppForm";
            }

            var eventname = n.eventname;
            if(n.formainform == true){ 
                eventname = n.eventtime+"_"+eventname;
            }

            if(n.control == "_")
                n.event = formname+n.control+eventname;    
            else
                n.event = formname+n.control+"_"+eventname;

            if (!n.event) {
                this.warn(RED._("event-subscribers.errors.missing-path"));
                return;
            }            
            this.event = n.event;
            this.formname = n.formname;
            this.eventname = n.eventname;
            this.formainform = n.formainform;

            if (this.event[0] !== '/') {
                this.event = '/'+this.event;
            } 

            this.method = n.method;
            var node = this;

            this.errorHandler = function(err,req,res,next) {
                node.warn(err);
                res.sendStatus(500);
            };

            this.callback = function(req,res) {
                var msgid = RED.util.generateId();
                res._msgid = msgid;
                // Since Node 15, req.headers are lazily computed and the property
                // marked as non-enumerable.
                // That means it doesn't show up in the Debug sidebar.
                // This redefines the property causing it to be evaluated *and*
                // marked as enumerable again.
                Object.defineProperty(req, 'headers', {
                    value: req.headers,
                    enumerable: true
                })
                //Bütün talepler POST olcağı için burada bir kontrol yapmaya gerek yok
                //if (node.method.match(/^(post|delete|put|options|patch)$/)) { }
                if(node.method == "post"){
                    node.status({}); //clear node status                        
                    node.send({_msgid:msgid,req:req,res:createResponseWrapper(node,res),payload:req.body});   
                    node.status({fill:"yellow",shape:"dot",text:"Triggered"});

                    setTimeout(function() {
                        node.status({}); // 1 saniye sonra status'u temizle
                    }, 1000);   
                }             
                
            };

            var httpMiddleware = function(req,res,next) { next(); }

            if (RED.settings.httpNodeMiddleware) {
                if (typeof RED.settings.httpNodeMiddleware === "function" || Array.isArray(RED.settings.httpNodeMiddleware)) {
                    httpMiddleware = RED.settings.httpNodeMiddleware;
                }
            }

            var maxApiRequestSize = RED.settings.apiMaxLength || '5mb';
            var jsonParser = bodyParser.json({limit:maxApiRequestSize});
            var urlencParser = bodyParser.urlencoded({limit:maxApiRequestSize,extended:true});

            var metricsHandler = function(req,res,next) { next(); }
            if (this.metric()) {
                metricsHandler = function(req, res, next) {
                    var startAt = process.hrtime();
                    onHeaders(res, function() {
                        if (res._msgid) {
                            var diff = process.hrtime(startAt);
                            var ms = diff[0] * 1e3 + diff[1] * 1e-6;
                            var metricResponseTime = ms.toFixed(3);
                            var metricContentLength = res.getHeader("content-length");
                            //assuming that _id has been set for res._metrics in HttpOut node!
                            node.metric("response.time.millis", {_msgid:res._msgid} , metricResponseTime);
                            node.metric("response.content-length.bytes", {_msgid:res._msgid} , metricContentLength);
                        }
                    });
                    next();
                };
            }

            var multipartParser = function(req,res,next) { next(); }
            if (this.method == "post") {            
                RED.httpNode.post(this.event,cookieParser(),httpMiddleware,corsHandler,metricsHandler,jsonParser,urlencParser,multipartParser,rawBodyParser,this.callback,this.errorHandler);
            }

            this.on("close",function() {
                var node = this;
                node.method = "post";
                RED.httpNode._router.stack.forEach(function(route,i,routes) {
                    if (route.route && route.route.path === node.event && route.route.methods[node.method]) {
                        routes.splice(i,1);
                    }
                });
            });

            
        } else {
            this.warn(RED._("event-subscribers.errors.not-created"));
        }
    }
    RED.nodes.registerType("Form Events",FormEventSubscriber);
    
    function DisplayMethodSubscriber(n) {
        RED.nodes.createNode(this,n);
        if (RED.settings.httpNodeRoot !== false) {
            n.method = "post";
            if (!n.event) {
                this.warn(RED._("event-subscribers.errors.missing-path"));
                return;
            }
            this.event = n.event;

            if (this.event[0] !== '/') {
                this.event = '/'+this.event;
            } 

            this.method = n.method;
            var node = this;

            this.errorHandler = function(err,req,res,next) {
                node.warn(err);
                res.sendStatus(500);
            };

            this.callback = function(req,res) {
                var msgid = RED.util.generateId();
                res._msgid = msgid;
                // Since Node 15, req.headers are lazily computed and the property
                // marked as non-enumerable.
                // That means it doesn't show up in the Debug sidebar.
                // This redefines the property causing it to be evaluated *and*
                // marked as enumerable again.
                Object.defineProperty(req, 'headers', {
                    value: req.headers,
                    enumerable: true
                })
                //Bütün talepler POST olcağı için burada bir kontrol yapmaya gerek yok
                //if (node.method.match(/^(post|delete|put|options|patch)$/)) { }
                if(node.method == "post"){
                    node.status({}); //clear node status                        
                    node.send({_msgid:msgid,req:req,res:createResponseWrapper(node,res),payload:req.body});   
                    node.status({fill:"yellow",shape:"dot",text:"Triggered"});

                    setTimeout(function() {
                        node.status({}); // 1 saniye sonra status'u temizle
                    }, 1000);   
                }             
                
            };

            var httpMiddleware = function(req,res,next) { next(); }

            if (RED.settings.httpNodeMiddleware) {
                if (typeof RED.settings.httpNodeMiddleware === "function" || Array.isArray(RED.settings.httpNodeMiddleware)) {
                    httpMiddleware = RED.settings.httpNodeMiddleware;
                }
            }

            var maxApiRequestSize = RED.settings.apiMaxLength || '5mb';
            var jsonParser = bodyParser.json({limit:maxApiRequestSize});
            var urlencParser = bodyParser.urlencoded({limit:maxApiRequestSize,extended:true});

            var metricsHandler = function(req,res,next) { next(); }
            if (this.metric()) {
                metricsHandler = function(req, res, next) {
                    var startAt = process.hrtime();
                    onHeaders(res, function() {
                        if (res._msgid) {
                            var diff = process.hrtime(startAt);
                            var ms = diff[0] * 1e3 + diff[1] * 1e-6;
                            var metricResponseTime = ms.toFixed(3);
                            var metricContentLength = res.getHeader("content-length");
                            //assuming that _id has been set for res._metrics in HttpOut node!
                            node.metric("response.time.millis", {_msgid:res._msgid} , metricResponseTime);
                            node.metric("response.content-length.bytes", {_msgid:res._msgid} , metricContentLength);
                        }
                    });
                    next();
                };
            }

            var multipartParser = function(req,res,next) { next(); }
            if (this.method == "post") {            
                RED.httpNode.post(this.event,cookieParser(),httpMiddleware,corsHandler,metricsHandler,jsonParser,urlencParser,multipartParser,rawBodyParser,this.callback,this.errorHandler);
            }

            this.on("close",function() {
                var node = this;
                node.method = "post";
                RED.httpNode._router.stack.forEach(function(route,i,routes) {
                    if (route.route && route.route.path === node.event && route.route.methods[node.method]) {
                        routes.splice(i,1);
                    }
                });
            });

            
        } else {
            this.warn(RED._("event-subscribers.errors.not-created"));
        }
    }
    RED.nodes.registerType("Display Methods",DisplayMethodSubscriber);
    

    function EventResponser(n) {
        RED.nodes.createNode(this,n);
        var node = this;
        this.headers = n.headers||{};
        this.statusCode = parseInt(n.statusCode);
        this.on("input",function(msg,_send,done) {
            if (msg.res) {
                var headers = RED.util.cloneMessage(node.headers);
                if (msg.headers) {
                    if (msg.headers.hasOwnProperty('x-node-red-request-node')) {
                        var headerHash = msg.headers['x-node-red-request-node'];
                        delete msg.headers['x-node-red-request-node'];
                        var hash = hashSum(msg.headers);
                        if (hash === headerHash) {
                            delete msg.headers;
                        }
                    }
                    if (msg.headers) {
                        for (var h in msg.headers) {
                            if (msg.headers.hasOwnProperty(h) && !headers.hasOwnProperty(h)) {
                                headers[h] = msg.headers[h];
                            }
                        }
                    }
                }
                if (Object.keys(headers).length > 0) {
                    msg.res._res.set(headers);
                }
                if (msg.cookies) {
                    for (var name in msg.cookies) {
                        if (msg.cookies.hasOwnProperty(name)) {
                            if (msg.cookies[name] === null || msg.cookies[name].value === null) {
                                if (msg.cookies[name]!==null) {
                                    msg.res._res.clearCookie(name,msg.cookies[name]);
                                } else {
                                    msg.res._res.clearCookie(name);
                                }
                            } else if (typeof msg.cookies[name] === 'object') {
                                msg.res._res.cookie(name,msg.cookies[name].value,msg.cookies[name]);
                            } else {
                                msg.res._res.cookie(name,msg.cookies[name]);
                            }
                        }
                    }
                }
                var statusCode = node.statusCode || parseInt(msg.statusCode) || 200;
                if (typeof msg.payload == "object" && !Buffer.isBuffer(msg.payload)) {
                    msg.res._res.status(statusCode).jsonp(msg.payload);
                } else {
                    if (msg.res._res.get('content-length') == null) {
                        var len;
                        if (msg.payload == null) {
                            len = 0;
                        } else if (Buffer.isBuffer(msg.payload)) {
                            len = msg.payload.length;
                        } else if (typeof msg.payload == "number") {
                            len = Buffer.byteLength(""+msg.payload);
                        } else {
                            len = Buffer.byteLength(msg.payload);
                        }
                        msg.res._res.set('content-length', len);
                    }

                    if (typeof msg.payload === "number") {
                        msg.payload = ""+msg.payload;
                    }
                    msg.res._res.status(statusCode).send(msg.payload);
                }
            } else {
                node.warn(RED._("event-responser.errors.no-response"));
            }
            done();
        });
    }
    RED.nodes.registerType("Responser",EventResponser);
}