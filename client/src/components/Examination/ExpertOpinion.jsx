import React, {useState} from 'react';
import estyle from './Examination.module.css';

export const ExpertOpinion = ({setData}) => {

  const[ExopData,setExopData] = useState({
    exopt:"",
    exent:"",
    excard:"",
    exneu:"",
    exendo:"",
    exortho:"",
    exsur:"",
    exden:""

  });

  const handleChange = (e)=>{
    
    const{name,value}=e.target;
    setExopData((prev)=>({...prev,[name]:value}));
    setData((prev)=>({...prev,[name]:value}));

  };
  return (
    <>
        <div>
            <h2 className={estyle.heading}>Expert Opinions<span className={estyle.line}></span></h2>

            <div>
            <label className={estyle.label}>Opthamology</label><br />
              <input
                  className={estyle.input}
                  type="text"
                  placeholder="Opthamology"
                  name="exopt"
                  onChange={handleChange}
                  value={ExopData.exopt}
                  required
              ></input><br />
              <label className={estyle.label}>ENT</label><br />
              <input
                  className={estyle.input}
                  type="text"
                  placeholder="ENT"
                  name="exent"
                  onChange={handleChange}
                  value={ExopData.exent}
                  required
              ></input><br />
              <label className={estyle.label}>Cardiology</label><br />
              <input
                  className={estyle.input}
                  type="text"
                  placeholder="Cardiology"
                  name="excard"
                  onChange={handleChange}
                  value={ExopData.excard}
                  required
              ></input><br />
              <label className={estyle.label}>Neurology</label><br />
              <input
                  className={estyle.input}
                  type="text"
                  placeholder="Neurology"
                  name="exneu"
                  onChange={handleChange}
                  value={ExopData.exneu}
                  required
              ></input><br />
              <label className={estyle.label}>Endocrinology</label><br />
              <input
                  className={estyle.input}
                  type="text"
                  placeholder="Endocrinology"
                  name="exendo"
                  onChange={handleChange}
                  value={ExopData.exendo}
                  required
              ></input><br />
              <label className={estyle.label}>Orthopaedic</label><br />
              <input
                  className={estyle.input}
                  type="text"
                  placeholder="Orthopaedic"
                  name="exortho"
                  onChange={handleChange}
                  value={ExopData.exortho}
                  required
              ></input><br />
              <label className={estyle.label}>Surgery</label><br />
              <input
                  className={estyle.input}
                  type="text"
                  placeholder="Surgery"
                  name="exsur"
                  onChange={handleChange}
                  value={ExopData.exsur}
                  required
              ></input><br />
              <label className={estyle.label}>Dental</label><br />
              <input
                  className={estyle.input}
                  type="text"
                  placeholder="Dental"
                  name="exden"
                  onChange={handleChange}
                  value={ExopData.exden}
                  required
              ></input><br />
              
            </div>
        </div>


    </>
    
  )
}

