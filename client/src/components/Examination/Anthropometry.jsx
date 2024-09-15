import React, { useState } from 'react';
import estyle from './Examination.module.css';
export const Anthropometry = ({setData}) => {

  const[AntData,setAntData] = useState({
    anthgt:"",
    antwgt:"",
    antarmcir:"",
    anthecir:"",
    antupseg:"",
    antloseg:"",
    antuslsra:"",
    antarmsp:""

  });

  const handleChange =(e)=>{

    const{name,value}=e.target;
    setAntData((prev)=>({...prev,[name]:value}));
    setData((prev)=>({...prev,[name]:value}));
  };

  return (
    <>
        <div>
            <h2 className={estyle.heading}>Anthropometry Details<span className={estyle.line}></span></h2>
            <div>
                  
              <label className={estyle.label}>Anthropometry Height</label><br />
              <input
                  className={estyle.input}
                  type="text"
                  placeholder="Anthropometry Height"
                  name="anthgt"
                  onChange={handleChange}
                  value={AntData.anthgt}
                  required
              ></input><br />
              <label className={estyle.label}>Anthropometry Weight</label><br />
              <input
                  className={estyle.input}
                  type="text"
                  placeholder="Anthropometry Weight"
                  name="antwgt"
                  onChange={handleChange}
                  value={AntData.antwgt}
                  required
              ></input><br />
              <label className={estyle.label}>Anthropometry Arm Circumference</label><br />
              <input
                  className={estyle.input}
                  type="text"
                  placeholder="Anthropometry Arm Circumference"
                  name="antarmcir"
                  onChange={handleChange}
                  value={AntData.antarmcir}
                  required
              ></input><br />
              <label className={estyle.label}>Anthropometry Head Circumference</label><br />
              <input
                  className={estyle.input}
                  type="text"
                  placeholder="Anthropometry Head Circumference"
                  name="anthecir"
                  onChange={handleChange}
                  value={AntData.anthecir}
                  required
              ></input><br />
              <label className={estyle.label}>Anthropometry Upper Segment</label><br />
              <input
                  className={estyle.input}
                  type="text"
                  placeholder="Anthropometry Upper Segment"
                  name="antupseg"
                  onChange={handleChange}
                  value={AntData.antupseg}
                  required
              ></input><br />
              <label className={estyle.label}>Athropometry Lower Segment</label><br />
              <input
                  className={estyle.input}
                  type="text"
                  placeholder="Athropometry Lower Segment"
                  name="antloseg"
                  onChange={handleChange}
                  value={AntData.antloseg}
                  required
              ></input><br />
              <label className={estyle.label}>Anthropometry Us Ls Ratio</label><br />
              <input
                  className={estyle.input}
                  type="text"
                  placeholder="Anthropometry Us Ls Ratio"
                  name="antuslsra"
                  onChange={handleChange}
                  value={AntData.antuslsra}
                  required
              ></input><br />
              <label className={estyle.label}>Anthropometry Arm Span</label><br />
              <input
                  className={estyle.input}
                  type="text"
                  placeholder="Anthropometry Arm Span"
                  name="antarmsp"
                  onChange={handleChange}
                  value={AntData.antarmsp}
                  required
              ></input><br />
            </div>
            
            
        </div>
    </>
  )
}
