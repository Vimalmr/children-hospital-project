const express = require('express');
const pool = require('../db');
const router = express.Router();
const jwt = require('jsonwebtoken');

router.get('/', (req, res) => {
    const {token} = req.cookies;
    if(token){
        jwt.verify(token, process.env.JWTSECRETKEY, {}, async (err, userData) => {
            if(err) throw err;
            const [userDoc] = await pool.query(`SELECT * FROM logininfo WHERE userid='${userData.id}';`);
            res.json(userDoc[0].userid);
        });
    } else {
        res.json(null);
    }
})

module.exports = router;