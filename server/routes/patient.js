const express = require('express');
const pool = require('../db');
const router = express.Router();

router.post('/', async (req, res) => {
  try {
		if (Object.keys(req.body).length === 0)
			return res.status(400).send({ message: "Object is missing" });

        var patientinfo = req.body.patientData;
        var motherinfo = req.body.motherData;
        var fatherinfo = req.body.fatherData;
		console.log(patientinfo);
		console.log(motherinfo);
		console.log(fatherinfo);
		console.log(patientinfo.admno);
		const [patient] = await pool.query(`SELECT * FROM patientinfo WHERE AdmissionNumber='${patientinfo.admno}';`);
		if (Object.keys(patient).length !== 0)
	        return res.status(409).send({ message: "User with given userid already Exist!" });
	    
        // const [query] = await pool.query(`INSERT INTO logininfo VALUES ('${req.body.userid}','${hashPassword}','${req.body.role}');`);
        const [query1] = await pool.query(`INSERT INTO patientinfo VALUES ('${patientinfo.admno}', '${patientinfo.name}', '${patientinfo.dob}', '${patientinfo.age}', '${patientinfo.address}','${patientinfo.pin}', '${patientinfo.insno}', '${patientinfo.aadharid}', NOW());`);

		res.status(201).send({ message: "Patient Entry successfull" });

	} catch (error) {
    console.log(error);
		res.status(500).send({ message: "Internal Server Error" });

	}
});

module.exports = router;