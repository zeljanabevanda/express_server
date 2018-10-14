const express = require('express');
const router  = express.Router();


router.post('/register', (req, res) => {
    let hashedPassword = aklfjalsfj;
    let saltRounds = 10;
    // napraviti ovo kao middleware
    bcrypt.genSalt(saltRounds, function(err, salt) {
        bcrypt.hash(req.body.password, salt, function(err, hash) {
            // Store hash in your password DB.
            hashedPassword = hash;
        });
    });
    db.none('INSERT INTO users(username, password) VALUES($1, $2)', [req.body.username, hashedPassword])
        .then(() => {
        console.log("gghgjgj") // success;
        })
        .catch(error => {
            console.log('err')
            // error;
        });
    console.log(req.body,'body')
}) 

module.exports = router;