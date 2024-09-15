import React, {useState} from 'react';
import estyle from './Examination.module.css';

export const LaboratoryDetails = ({setData}) => {

    const[LabData,setLabData] = useState({
        labhae:"",
        laburana:"",
        labbio:"",
        labxray:"",
        labulsnd:"",
        labkar:"",
        labdna:"",
        laboth:"",
        labpoa:"",
        labadv:"",
        labmfu:"",   
    });

    const handleChange = (e)=>{
    
        const{name,value}=e.target;
        setLabData((prev)=>({...prev,[name]:value}));
        setData((prev)=>({...prev,[name]:value}));
    
    }; 
    

  return (
    <>
        <div>
         <h2 className={estyle.heading}>Laboratory Investigation Details<span className={estyle.line}></span></h2>
            <div>
                  
              <label className={estyle.label}>Haematology</label><br />
              <input
                  className={estyle.input}
                  type="text"
                  placeholder="Haematology"
                  name="labhae"
                  onChange={handleChange}
                  value={LabData.labhae}
                  required
              ></input><br />
              <label className={estyle.label}>Urine Analysis</label><br />
              <input
                  className={estyle.input}
                  type="text"
                  placeholder="Urine Analysis"
                  name="laburana"
                  onChange={handleChange}
                  value={LabData.laburana}
                  required
              ></input><br />
              <label className={estyle.label}>Biochemistry</label><br />
              <input
                  className={estyle.input}
                  type="text"
                  placeholder="Biochemistry"
                  name="labbio"
                  onChange={handleChange}
                  value={LabData.labbio}
                  required
              ></input><br />
              <label className={estyle.label}>X-ray</label><br />
              <input
                  className={estyle.input}
                  type="text"
                  placeholder="X-ray"
                  name="labxray"
                  onChange={handleChange}
                  value={LabData.labxray}
                  required
              ></input><br />
              <label className={estyle.label}>Ultrasound</label><br />
              <input
                  className={estyle.input}
                  type="text"
                  placeholder="Ultrasound"
                  name="labulsnd"
                  onChange={handleChange}
                  value={LabData.labulsnd}
                  required
              ></input><br />
              <label className={estyle.label}>Karyotype</label><br />
              <input
                  className={estyle.input}
                  type="text"
                  placeholder="Karyotype"
                  name="labkar"
                  onChange={handleChange}
                  value={LabData.labkar}
                  required
              ></input><br />
              <label className={estyle.label}>DNA</label><br />
              <input
                  className={estyle.input}
                  type="text"
                  placeholder="DNA"
                  name="labdna"
                  onChange={handleChange}
                  value={LabData.labdna}
                  required
              ></input><br />
              <label className={estyle.label}>Others</label><br />
              <input
                  className={estyle.input}
                  type="text"
                  placeholder="Others"
                  name="laboth"
                  onChange={handleChange}
                  value={LabData.laboth}
                  required
              ></input><br />
               <label className={estyle.label}>Plan Of Action</label><br />
              <input
                  className={estyle.input}
                  type="text"
                  placeholder="Plan Of Action"
                  name="labpoa"
                  onChange={handleChange}
                  value={LabData.labpoa}
                  required
              ></input><br />
               <label className={estyle.label}>Advice</label><br />
              <input
                  className={estyle.input}
                  type="text"
                  placeholder="Advice"
                  name="labadv"
                  onChange={handleChange}
                  value={LabData.labadv}
                  required
              ></input><br />
               <label className={estyle.label}>Management and Follow up</label><br />
              <input
                  className={estyle.input}
                  type="text"
                  placeholder="Management and Follow up"
                  name="labmfu"
                  onChange={handleChange}
                  value={LabData.labmfu}
                  required
              ></input><br />
            </div>
            
            
        </div>
    </>
    
  )
}
