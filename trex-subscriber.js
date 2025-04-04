module.exports = function(RED) {
    "use strict";
    var cookieParser = require("cookie-parser");
    var cors = require('cors');
    var onHeaders = require('on-headers');
    var typer = require('content-type');
    var mediaTyper = require('media-typer');
    var hashSum = require("hash-sum");
  
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

    function TrexSubscriber(n) {
        RED.nodes.createNode(this,n);
        
        if (RED.settings.httpNodeRoot !== false) {
            n.method = "get";
            
            if (!n.event) {
                this.warn(RED._("trex-subscribers.errors.missing-path"));
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

                if (node.method == "get") {
                    node.status({}); 
                    
                    //node.send({_msgid:msgid,req:req,res:createResponseWrapper(node,res),payload:req.query});
                    
                    const eventTypes = new Set(["Business Events", 
                                                "Application Events", 
                                                "System Events",
                                                "Communication Events",
                                                "Display Events",
                                                "Form Events",
                                                "Display Methods",
                                                "Method Returns",]);
                        
                    let matchingNodes = [];
                    RED.nodes.eachNode(function (n) {
                        if (eventTypes.has(n.type)) {                        
                            let runtimeNode = RED.nodes.getNode(n.id);
                            if (runtimeNode) {
                                matchingNodes.push(runtimeNode.event.replace(/\//g, ""));
                            }
                        }
                    });


                    node.send({_msgid:msgid,payload:{ client: req.ip, subs: matchingNodes}});

                    let msg = {_msgid:msgid,req:req,res:createResponseWrapper(node,res),payload:matchingNodes}

                    node.headers= {};

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
                        node.warn(RED._("trex-subscriber.errors.no-response"));
                    }    



                    
                    
                    node.status({fill:"yellow",shape:"dot",text:"Triggered"});
                    setTimeout(function() {
                        node.status({}); // 1 saniye sonra status'u temizle
                    }, 500);  
                }       
                
            };

            var httpMiddleware = function(req,res,next) { next(); }

            if (RED.settings.httpNodeMiddleware) {
                if (typeof RED.settings.httpNodeMiddleware === "function" || Array.isArray(RED.settings.httpNodeMiddleware)) {
                    httpMiddleware = RED.settings.httpNodeMiddleware;
                }
            }

            var maxApiRequestSize = RED.settings.apiMaxLength || '5mb';

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

            if (this.method == "get") {
                RED.httpNode.get(this.event,cookieParser(),httpMiddleware,corsHandler,metricsHandler,this.callback,this.errorHandler);
            }

            this.on("close",function() {
                var node = this;
                node.method = "get";
                RED.httpNode._router.stack.forEach(function(route,i,routes) {
                    if (route.route && route.route.path === node.event && route.route.methods[node.method]) {
                        routes.splice(i,1);
                    }
                });
            });

            
        } else {
            this.warn(RED._("trex-subscribers.errors.not-created"));
        }
        
        
        
        /*


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
                node.warn(RED._("httpin.errors.no-response"));
            }
            done();
        });
        */

    }

    RED.nodes.registerType("trex Subscriber",TrexSubscriber);
}
