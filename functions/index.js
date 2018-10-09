const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

const fetch = require('node-fetch');
var convert = require('xml-js');

exports.data = functions.https.onRequest((req, res) => {
    const endpoint = 'https://blogs.oracle.com/rss';
    fetch(endpoint)
        .then(res => res.text())
        .then(body => {
            result = convert.xml2json(body, { compact: true, spaces: 4 });
            return res.send(result)

        })
        .catch();
});