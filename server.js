const db = require('./db/index.js');
const bodyParser = require('body-parser');
const cors = require('cors')

var express = require('express')
var app = express();
app.use(bodyParser.urlencoded({
    extended: true
  }));
// app.use(cors);

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function (req, res) {
  res.send('hello world')
})

app.get('/home', function (req, res) {
    res.send("zeljanaaaa")
})

db.none('INSERT INTO users(first_name) VALUES($1)', ['jure'])
    .then(() => {
       console.log("gghgjgj") // success;
    })
    .catch(error => {
        console.log('err')
        // error;
    });
    
    app.get('/user/:id', (req, res) => {
        db.one({
            text: 'SELECT * FROM users WHERE id = $1', // can also be a QueryFile object
            values: [req.params.id]
        })
            .then(user => {
                res.send(user)
                console.log(user)
            })
            .catch(error => {
                res.send('user not found')
            });
    
    })

    app.post('/register', (req, res) => {
        console.log(req.body,'body')
    }) 
   











app.listen(3000, function() {
    console.log("listennn")
})