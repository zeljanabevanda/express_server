const express  = require('express');
const router   = express.Router();
const bcrypt   = require('bcrypt-nodejs');
const db       = require('../db');
const jwt      = require('jsonwebtoken');


router.post('/login', (req, res) => {
    //console.log(req.body) 
    let password = req.body.password; 
    let username = req.body.username;
    db.one('SELECT * FROM users WHERE username = $1', username)
    .then(user => {       
        bcrypt.compare(password, user.password, function(err, result) {
            console.log(result, 'passw');
            //ako je password valjan generirati token i vrtatiti korisniku podatke
            if(result) {
                jwt.sign(user.id, 'secret', (err, token) => {
                    const userObj = user;
                    userObj.token = token;
                    res.send(userObj);
                });
                
            } else {
                res.send('lozinka nije valjana');
            }
            
            // res == true
        });
          
    })
    .catch(error => {
        // error;    
    }); 
    
    
})

module.exports = router;