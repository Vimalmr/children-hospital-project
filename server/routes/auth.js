const express = require('express');
const pool = require('../db');
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');

router.post('/', async (req, res) => {
    try {
        if (Object.keys(req.body).length === 0)
			return res.status(400).send({ message: "Object is missing" });

        const [usersql] = await pool.query(`SELECT * FROM logininfo WHERE userid='${req.body.userid}';`);
        if (Object.keys(usersql).length === 0){
            return res.status(409).send({ message: "User doesn't exist" });
          }
        const validPassword = await bcrypt.compare(req.body.password, usersql[0].password);

        if (!validPassword)
			return res.status(401).send({ message: "Invalid Email or Password" });

        const token = generateAccessToken(usersql[0]);
        res.status(200).cookie('token', token).send({ data: token, message: "logged in successfully" });

    } catch (err) {
  
        console.error(err);
        res.status(500).send('Database error');
  
    }
  });

  function generateAccessToken(user) {
    const payload = {
      id: user.userid
    };
  
    return jwt.sign(payload, process.env.JWTSECRETKEY);
  }

  router.post('/logout', async (req, res) => {
    res.status(204).cookie('token', "").send({message: "logged out successfully" });
  });

  function generateAccessToken(user) {
    const payload = {
      id: user.userid
    };
  
    return jwt.sign(payload, process.env.JWTSECRETKEY);
  }

  module.exports = router;