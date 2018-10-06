
const express = require('express');
const app = express();
const fetch = require('node-fetch');
var convert = require('xml-js');

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/', function(req, res){
    const endpoint = 'https://blogs.oracle.com/rss';
    fetch(endpoint)
        .then(res => res.text())
        .then(body => {
            result = convert.xml2json(body, { compact: true, spaces: 4 });
            res.send(result)
            
        });

        

})

app.listen(3300);