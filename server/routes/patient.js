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
		console.log(fatherinfo.habits.smoke);
		const [patient] = await pool.query(`SELECT * FROM patientinfo WHERE AdmissionNumber='${patientinfo.admno}';`);
		if (Object.keys(patient).length !== 0)
	        return res.status(409).send({ message: "User with given userid already Exist!" });
	    
        const [query1] = await pool.query(`INSERT INTO patientinfo VALUES ('${patientinfo.admno}', '${patientinfo.name}', '${patientinfo.dob}', '${patientinfo.age}', '${patientinfo.address}','${patientinfo.pin}', '${patientinfo.insno}', '${patientinfo.aadharid}', NOW());`);
		const [query2] = await pool.query(`INSERT INTO motherinfo(AdmissionNumber, Mother_Name, Mother_Age, Mother_Occupation, Mother_Health_General, Mother_Diabetes, Mother_Illness, Mother_Drugs, Mother_Exposure_Teratogens) VALUES ('${patientinfo.admno}', '${motherinfo.name}', '${motherinfo.age}', '${motherinfo.moocc}', '${motherinfo.hegnrl}', '${motherinfo.modiab}', '${motherinfo.moill}', '${motherinfo.modrg}', '${motherinfo.moexts}');`);
		const [query3] = await pool.query(`INSERT INTO fatherinfo(AdmissionNumber, Father_Name, Father_Age, Father_Occupation, Father_Medication, Father_Past_illness, Father_Smoke, Father_Alcohol, Father_Tobacco) VALUES ('${patientinfo.admno}', '${fatherinfo.name}', '${fatherinfo.age}', '${fatherinfo.faocc}', '${fatherinfo.famed}', '${fatherinfo.fapaill}', '${fatherinfo.habits.smoke}', '${fatherinfo.habits.tobacco}', '${fatherinfo.habits.alcohol}');`);
		console.log(query3);
		res.status(201).send({ message: "Patient, Mother Entry successfull" });

	} catch (error) {
    console.log(error);
		res.status(500).send({ message: "Internal Server Error" });

	}
});

module.exports = router;