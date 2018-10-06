const db = require('./db/index.js');

var express = require('express')
var app = express()

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function (req, res) {
  res.send('hello world')
})

app.get('/home', function (req, res) {
    res.send("zeljanaaaa")
})

db.none('INSERT INTO users(first_name) VALUES($1)', ['John'])
    .then(() => {
        // success;
    })
    .catch(error => {
        // error;
    });
app.listen(3000, function() {
    console.log("listennn")
})