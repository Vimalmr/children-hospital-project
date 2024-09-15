import React, { useEffect, useState } from 'react';
import f1style from './PatientDataForm.module.css';

export const FatherDataForm = ({fdata}) => {

const[Habits,setHabits] = useState({
  smoke:false,
  alcohol:false,
  tobacco:false
});

useEffect(()=>{

  if(fdata && fdata.habits){
    setHabits({
      smoke : fdata.habits.smoke ==='true',
      alcohol : fdata.habits.alcohol === 'true',
      tobacco : fdata.habits.tobacco === 'true'
    }); 
    console.log(Habits);
  }
  

},[fdata]);



  console.log("value of habits");
  console.log(fdata.habits.smoke);
  console.log(fdata.habits.alcohol);
  console.log(fdata.habits.tobacco);
  return (

    <>
         <div>
            <h2 className={f1style.heading}>Patient Father's Details<span className={f1style.line}></span></h2>
            <div className={f1style.data}>
                <div className={f1style.item}><label className={f1style.label}><strong>Father's Name </strong></label><div className={f1style.colon}>:</div><div className={f1style.value}>{fdata.name}</div></div>
                <div className={f1style.item}><label className={f1style.label}><strong>Father's Age </strong></label><div className={f1style.colon}>:</div><div className={f1style.value}>{fdata.age}</div></div>
                <div className={f1style.item}><label className={f1style.label}><strong>Father's Occupation </strong></label><div className={f1style.colon}>:</div><div className={f1style.value}>{fdata.faocc}</div></div>
                <div className={f1style.item}><label className={f1style.label}><strong>Father's Medication </strong></label><div className={f1style.colon}>:</div><div className={f1style.value}>{fdata.famed}</div></div>
                <div className={f1style.item}><label className={f1style.label}><strong>Significant Past Illness</strong></label><div className={f1style.colon}>:</div><div className={f1style.value}>{fdata.fapaill}</div></div>
                <div className={f1style.item}><label className={f1style.label}><strong>Father's Habits</strong></label><div className={f1style.colon}>:</div><div className={f1style.value}>
                   
                  
                    <input
                    type='checkbox'
                    checked={Habits.smoke}
                    readOnly
                   
                    /><label>Smoke</label><br />
                    <input
                    type='checkbox'
                    checked={Habits.alcohol}
                    readOnly
                  
                    /><label>Alcohol</label><br />
                    <input
                    type='checkbox'
                    checked={Habits.tobacco}
                    readOnly

                    /><label>Tobacco</label><br />
                    </div></div>
                
                
            </div>
        </div>
    </>

  );
};