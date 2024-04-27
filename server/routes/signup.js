const express = require('express');
const pool = require('../db');
const router = express.Router();
const bcrypt = require("bcrypt");

router.post('/', async (req, res) => {
  try {
		if (Object.keys(req.body).length === 0)
			return res.status(400).send({ message: "Object is missing" });

		const [usersql] = await pool.query(`SELECT userid FROM logininfo WHERE userid='${req.body.userid}';`);
		console.log(req.body.userid);
		if (Object.keys(usersql).length !== 0)
			return res.status(409).send({ message: "User with given userid already Exist!" });

    const salt = await bcrypt.genSalt(Number(process.env.SALT));
    const hashPassword = await bcrypt.hash(req.body.password, salt);
		const [query] = await pool.query(`INSERT INTO logininfo VALUES ('${req.body.userid}','${hashPassword}','${req.body.role}');`);

		res.status(201).send({ message: "User created successfully" });

	} catch (error) {
    console.log(error);
		res.status(500).send({ message: "Internal Server Error" });

	}
});

module.exports = router;