import React, {useState} from 'react';
import estyle from './Examination.module.css';


export const PhysicalExamination = ({setData}) => {

  const[PhyData,setPhyData] = useState({
    phyhead:"",
    phyface:"",
    phyneck:"",
    phychest:"",
    phyuplimb:"",
    phylowlimb:"",
    phycvs:"",
    phyrs:"",
    phycns:"",
    phyabd:"",
    phygu:"",
    phyothfea:"",

  });

  const handleChange =(e)=>{

    const{name,value}=e.target;
    setPhyData((prev)=>({...prev,[name]:value}));
    setData((prev)=>({...prev,[name]:value}));
  };


  return (
    <>
        <div>
            <h2 className={estyle.heading}>PhysicalExamination Details<span className={estyle.line}></span></h2>


            <div>
                  
              <label className={estyle.label}>Head</label><br />
              <input
                  className={estyle.input}
                  type="text"
                  placeholder="Head"
                  name="phyhead"
                  onChange={handleChange}
                  value={PhyData.phyhead}
                  required
              ></input><br />
              <label className={estyle.label}>Face</label><br />
              <input
                  className={estyle.input}
                  type="text"
                  placeholder="Face"
                  name="phyface"
                  onChange={handleChange}
                  value={PhyData.phyface}
                  required
              ></input><br />
              <label className={estyle.label}>Neck</label><br />
              <input
                  className={estyle.input}
                  type="text"
                  placeholder="Neck"
                  name="phyneck"
                  onChange={handleChange}
                  value={PhyData.phyneck}
                  required
              ></input><br />
              <label className={estyle.label}>Chest</label><br />
              <input
                  className={estyle.input}
                  type="text"
                  placeholder="Chest"
                  name="phychest"
                  onChange={handleChange}
                  value={PhyData.phychest}
                  required
              ></input><br />
              <label className={estyle.label}>Upper Limbs</label><br />
              <input
                  className={estyle.input}
                  type="text"
                  placeholder="Upper Limbs"
                  name="phyuplimb"
                  onChange={handleChange}
                  value={PhyData.phyuplimb}
                  required
              ></input><br />
              <label className={estyle.label}>Lower Limbs</label><br />
              <input
                  className={estyle.input}
                  type="text"
                  placeholder="Lower Limbs"
                  name="phylowlimb"
                  onChange={handleChange}
                  value={PhyData.phylowlimb}
                  required
              ></input><br />
              <label className={estyle.label}>CVS</label><br />
              <input
                  className={estyle.input}
                  type="text"
                  placeholder="CVS"
                  name="phycvs"
                  onChange={handleChange}
                  value={PhyData.phycvs}
                  required
              ></input><br />
              <label className={estyle.label}>RS</label><br />
              <input
                  className={estyle.input}
                  type="text"
                  placeholder="RS"
                  name="phyrs"
                  onChange={handleChange}
                  value={PhyData.phyrs}
                  required
              ></input><br />
               <label className={estyle.label}>CNS</label><br />
              <input
                  className={estyle.input}
                  type="text"
                  placeholder="CNS"
                  name="phycns"
                  onChange={handleChange}
                  value={PhyData.phycns}
                  required
              ></input><br />
               <label className={estyle.label}>ABD</label><br />
              <input
                  className={estyle.input}
                  type="text"
                  placeholder="ABD"
                  name="phyabd"
                  onChange={handleChange}
                  value={PhyData.phyabd}
                  required
              ></input><br />
               <label className={estyle.label}>GU</label><br />
              <input
                  className={estyle.input}
                  type="text"
                  placeholder="GU"
                  name="phygu"
                  onChange={handleChange}
                  value={PhyData.phygu}
                  required
              ></input><br />
               <label className={estyle.label}>Other Feautures</label><br />
              <input
                  className={estyle.input}
                  type="text"
                  placeholder="other Feautures"
                  name="phyothfea"
                  onChange={handleChange}
                  value={PhyData.phyothfea}
                  required
              ></input><br />
            </div>

        </div>


    </>
  )
}
