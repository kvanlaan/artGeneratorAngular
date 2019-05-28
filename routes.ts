import * as express from 'express';
export const routes = express.Router();
const { Storage } = require('@google-cloud/storage');
import * as path from 'path';

import * as firebase from 'firebase';
var patternImages: string[] = [];
// var storageRef = firebase.storage();
// const imagesRef = storageRef.ref('artImages');
// let artImagesBucketName = imagesRef.bucket
// const gCloud = gcs();

// routes.get('/', (req, res) => res.send({hello: 'world'}));
routes.get('*',(req, res) => {
  res.sendFile(path.resolve(__dirname, 'dist', 'artGenerator', 'index.html'));
});
routes.get('/artImages', function (req, res) {
  const storage = new Storage(
    {
      "keyFilename": "artGenerator-c7aeb7e6db05.json",
      "project_id": "artgenerator-8008a",
    }

  );

  // res.send({hello: 'world'});
  const options = {
    prefix: 'artImages/'
  };
  let artImagesBucket = storage.bucket('artgenerator-8008a.appspot.com');
  artImagesBucket.getFiles(options).catch((err) => {
    console.log('found error', err);
  }).then((response) => {
    if (response) {
      res.send(response[0]);
    }
  })

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
})
