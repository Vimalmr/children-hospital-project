import React, { useState } from 'react';
import { Anthropometry } from './Anthropometry';
import { PhysicalExamination } from './PhysicalExamination';
import { ExpertOpinion } from './ExpertOpinion';
import { LaboratoryDetails } from './LaboratoryDetails';
import estyle from './Examination.module.css'
import axios from 'axios';

export const Examination = () => {

  const[AnthropometryData,setAnthropometryData] = useState({});
  const[PhysicalExaminationData,setPhysicalExaminationData] = useState({});
  const[ExpertOpinionData,setExpertOpinionData] = useState({});
  const[LaboratoryDetailsData,setLaboratoryDetailsData] = useState({});
  const[admno, setAdmno] = useState('');

  const handleChange = (e)=>{
    const value = e.target.value;
    setAdmno(value);
  }

  const handleSubmit = async(e)=>{
    e.preventDefault();

    const data = {
      Admno:admno,
      Anthropometry : AnthropometryData,
      PhysicalExamination : PhysicalExaminationData,
      ExpertOpinion : ExpertOpinionData,
      LaboratoryDetails : LaboratoryDetailsData
    };
    console.log(data);
    try {

    const [res] = await axios.post("Endpoint",data);

    setAdmno('');
    setAnthropometryData({});
    setPhysicalExaminationData({});
    setExpertOpinionData({});
    setLaboratoryDetailsData({});
      
    } catch (error) {
      console.log("error at posting examination details ",error);
      
    };
  };

  

  return (
    <>
        <div className={estyle.container}>
        <div className={estyle.mainheading}>Examination Report</div>
            <div className={estyle.get}>
                <label>Admission no:</label>
                <input

                type="text"
                placeholder="Admission Number"
                name="admno"
                value={admno}
                required
                onChange={handleChange}
                ></input>
            </div>
            <form onSubmit={handleSubmit}>
                <Anthropometry setData={setAnthropometryData}/>
                <PhysicalExamination setData={setPhysicalExaminationData} />
                {/*  <Pedegree /> */}
                <LaboratoryDetails setData={setLaboratoryDetailsData}/>
                <ExpertOpinion setData={setExpertOpinionData} />
                <div className={estyle.submit}>
                <input
                className={estyle.submit}
                type = "submit"
                value="submit"
                ></input>
                </div>
            </form>
            
        </div>
    </>
  )
}
