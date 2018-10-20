const express  = require('express');
const router   = express.Router();
const bcrypt   = require('bcrypt-nodejs');
const db       = require('../db');

router.post('/login', (req, res) => {
    //console.log(req.body) 
    let password = req.body.password; 
    let username = req.body.username;
    db.one('SELECT * FROM users WHERE username = $1', username)
    .then(user => {
        console.log(user); // print user object;
        bcrypt.compare(password, user.password, function(err, result) {
            console.log(result, 'passw');
            //ako je password valjan generirati token i vrtatiti korisniku podatke
            if(result) {
                res.send(user);
            }
            
            // res == true
        });
    })
    .catch(error => {
        // error;    
    }); 
    
    
})

module.exports = router;