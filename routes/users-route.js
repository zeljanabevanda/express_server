const express = require('express');
const router  = express.Router();
const db = require('../db/index.js');


router.get('/user/:id', (req, res) => {
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



module.exports = router;