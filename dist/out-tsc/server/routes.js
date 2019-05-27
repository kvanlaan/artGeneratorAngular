"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
exports.routes = express.Router();
var Storage = require('@google-cloud/storage').Storage;
var path = require("path");
var patternImages = [];
// var storageRef = firebase.storage();
// const imagesRef = storageRef.ref('artImages');
// let artImagesBucketName = imagesRef.bucket
// const gCloud = gcs();
exports.routes.get('/', function (req, res) { return res.sendFile(path.join('dist/artGenerator/index.html')); });
exports.routes.get('/artImages', function (req, res) {
    var storage = new Storage({
        "keyFilename": "artGenerator-c7aeb7e6db05.json",
        "project_id": "artgenerator-8008a",
    });
    // res.send({hello: 'world'});
    var options = {
        prefix: 'artImages/'
    };
    var artImagesBucket = storage.bucket('artgenerator-8008a.appspot.com');
    artImagesBucket.getFiles(options).catch(function (err) {
        console.log('found error', err);
    }).then(function (response) {
        if (response) {
            res.send(response[0]);
        }
    });
    //  .subscribe(function (res: any) {
    // console.log('res', res); 
    // });
    // artImagesBucket.getFiles(function (err: any, files: any) {
    //   if(!err) {
    //   files.forEach(function (file) {
    //     file.getDownloadURL().then((url) => {
    //       if (url) {
    //         console.log('url', url);
    //         patternImages.push(url);
    //       }
    //     }).catch(function (error) {
    //     });
    //   }
    //   )
    // } else {
    //   console.log('error', err);
    // }
    // })
    // res.send('patternImages')
});
//# sourceMappingURL=routes.js.map