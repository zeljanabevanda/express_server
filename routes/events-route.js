const express  = require('express');
const router   = express.Router();
const bcrypt   = require('bcrypt-nodejs');
const db       = require('../db');
const jwt      = require('jsonwebtoken');


router.post("/events", (req, res) => {
    console.log("radi", req.body)
  
    db.one('INSERT INTO events(title, description, starting_at, ending_at) VALUES($1,$2,$3,$4) RETURNING id, title, description, starting_at, ending_at', [req.body.title, req.body.description, req.body.starting_at, req.body.ending_at])
    .then((event) => {
        res.send(event);
    })

})


module.exports = router;