const express  = require('express');
const router   = express.Router();
const bcrypt   = require('bcrypt-nodejs');
const db       = require('../db');


router.post('/register', (req, res) => {
    let password = req.body.password;
    console.log(req.body.password);
    db.oneOrNone('SELECT * FROM users WHERE username = $1',req.body.username).then((result) => {
        console.log(result)
        if(!result) {
            //korisnicko ime nije zauzeto, nastavi!
            bcrypt.hash(password, null, null, function(err, hash) {
                db.none('INSERT INTO users(username, password) VALUES($1, $2)', [req.body.username, hash])
                .then(() => {
                console.log("gghgjgj") // success;
                res.send('uspijesnp')
                })
                .catch(error => {
                    console.log('err')
                    // error;
                res.send('pogreska')
                });
            });
        } else {
            res.send('korisnicko ime je vec zauzeto');

        }
    })
   
    
    
}) 

module.exports = router;