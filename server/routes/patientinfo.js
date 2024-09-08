const express = require('express');
const pool = require('../db');
const router = express.Router();
const jwt = require('jsonwebtoken');

router.get('/', async(req, res) => {

    const {token} = req.cookies;
    if(token){
        jwt.verify(token, process.env.JWTSECRETKEY, async (err, _ ) => {
        if(err) {
            return res.status(401).send({ message: "Cannot access without loggin in" });
        }
        });
    } else {
        return res.status(401).send({ message: "Cannot access without loggin in" });
    }
         
    const admissionNo = req.query.admno;
    
    if(!admissionNo)
        return res.status(400).send({message: "No params recieved"})

	try{
        const [patientInfo] = await pool.query('SELECT * FROM patientinfo WHERE AdmissionNumber = ?', [admissionNo]);
        const [motherInfo] = await pool.query('SELECT * FROM motherinfo WHERE AdmissionNumber = ?', [admissionNo]);
        const [fatherInfo] = await pool.query('SELECT * FROM fatherinfo WHERE AdmissionNumber = ?', [admissionNo]);

        if (!patientInfo.length) {
            return res.status(204).send({ message: "User with given AdmissionNo doesn't exist" });
        }

        var pi = {
                admno: patientInfo[0].AdmissionNumber,
                name: patientInfo[0].Patient_Name,
                dob: patientInfo[0].Patient_DateOfBirth,
                age: patientInfo[0].Patient_Age,
                aadharid: patientInfo[0].Patient_AadharNumber,
                insno: patientInfo[0].Patient_InsuranceNumber,
                address: patientInfo[0].Patient_Address,
                pin: patientInfo[0].Patient_Pincode
        }

        var mi = {
                name: motherInfo[0].Mother_Name,
                age: motherInfo[0].Mother_Age,
                moocc: motherInfo[0].Mother_Occupation,
                hegnrl: motherInfo[0].Mother_Health_General,
                modiab: motherInfo[0].Mother_Diabetes,
                moill: motherInfo[0].Mother_Illness,
                modrg: motherInfo[0].Mother_Drugs,
                moexts: motherInfo[0].Mother_Exposure_Teratogens
        }

        var fi = {
                name: fatherInfo[0].Father_Name,
                age: fatherInfo[0].Father_Age,
                faocc: fatherInfo[0].Father_Occupation,
                famed: fatherInfo[0].Father_Medication,
                fapaill: fatherInfo[0].Father_Past_illness,
                habits: {
                  smoke: fatherInfo[0].Father_Smoke,
                  tobacco: fatherInfo[0].Father_Tobacco,
                  alcohol: fatherInfo[0].Father_Alcohol
                }
        }

         const data = {
            patientInfo: pi,
            motherInfo: mi,
            fatherInfo: fi
        };

        console.log(data);
		res.status(200).json(data);
	} catch (error){
		console.log(error);
		res.status(500).send({ message: "Internal Server Error" });
	}
})

module.exports = router;