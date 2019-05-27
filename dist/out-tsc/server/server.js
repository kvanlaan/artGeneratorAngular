"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// equivalent of older: const express = require('express')
var express = require("express");
var routes_1 = require("./routes");
var app = express();
// Allow any method from any host and log requests
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, DELETE');
    if ('OPTIONS' === req.method) {
        res.sendStatus(200);
    }
    else {
        console.log(req.ip + " " + req.method + " " + req.url);
        next();
    }
});
// Handle POST requests that come in formatted as JSON
// app.use(express.json());
// make express look in the public directory for assets (css/js/img)
// app.use(express.static(__dirname + '/dist/artGenerator'));
// app.get('/*', function(req, res) {
//     res.sendFile(path.join('/dist/artGenerator/index.html'));
//   });
// A default hello word route
// Put at the top
// Put after the express.json() call
app.use(express.static('/dist/out-tsc/server'), routes_1.routes);
// start our server on port 4201
var port = process.env.PORT || 4201;
app.listen(port);
//# sourceMappingURL=server.js.map