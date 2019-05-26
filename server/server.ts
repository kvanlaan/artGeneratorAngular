// equivalent of older: const express = require('express')
import * as express from 'express';
import { routes } from './routes';
const app = express();
// Allow any method from any host and log requests
app.use((req: any, res: any, next: any) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, DELETE');
    if('OPTIONS' === req.method) {
        res.sendStatus(200);
    } else {
        console.log(`${req.ip} ${req.method} ${req.url}`);
        next();
    }
})
// Handle POST requests that come in formatted as JSON
app.use(express.json());
// make express look in the public directory for assets (css/js/img)
app.use(express.static(__dirname + '/dist/artGenerator'));

// app.get('/*all', function(req, res) {
//     res.sendFile(path.join(__dirname + '/dist/index.html'));
//   });

// A default hello word route
// Put at the top
// Put after the express.json() call
app.use('/dist/out-tsc/', routes);
// start our server on port 4201
var port = process.env.PORT || 4201;
app.listen(port);