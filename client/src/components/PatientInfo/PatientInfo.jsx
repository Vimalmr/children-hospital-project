import React from 'react';
import pstyle from './PatientInfo.module.css';
import {useState} from 'react';
import  {PatientDataForm}  from '../PatientDataForm/PatientDataForm';
import { MotherDataForm } from '../PatientDataForm/MotherDataForm';
import { FatherDataForm } from '../PatientDataForm/FatherDataForm';
import axios from 'axios';

export const PatientInfo = () => {

    const [status , setStatus] = useState(false);

    const [admno , setadmno] = useState('');

    const handleChange = (e)=>{

        const val = e.target.value;
        setadmno(val);

    };

    const [data , setData] = useState(null);


    const handleSubmit = async(e)=>{

        e.preventDefault();

        try{
            const [res] = await axios.get("Endpoint" , {
                params:{

                    admno:admno

                }
            });
            setData(res.data);
            setStatus(true);
        }catch(error){
            console.log("Error While fetching patient details at patient info", error);
        }
    };


    console.log(data)



  return (
    <>
        <div className={pstyle.container}>
            <div className={pstyle.heading}>Patient Information</div>
            <div className={pstyle.get}>
                <label className={pstyle.label}>Admission no:</label>
                <input
                className={pstyle.input}
                type="text"
                placeholder="Name"
                name="name"
                required
                onChange={handleChange}
                ></input>
                <button  className={pstyle.submit} value='Search' type='submit'>Search</button>
            </div>
            <div>
                {status && <PatientDataForm pdata = {data.patientData} />}
                {status && <MotherDataForm mdata = {data.motherData}/>}
                {status && <FatherDataForm fdata = {data.fatherData}/>}
            </div>
            

        </div>

        

    </>
  );
};
