import React from 'react';
import f1style from './PatientDataForm.module.css';

export const PatientDataForm = ({pdata}) => {
  return (
    <>
        <div>
            <h2 className={f1style.heading}>Patient Details<span className={f1style.line}></span></h2>
            <div className={f1style.data}>
                <div className={f1style.item}><label className={f1style.label}><strong>Name </strong></label><div className={f1style.colon}>:</div><div className={f1style.value}>{pdata.name}</div></div>
                <div className={f1style.item}><label className={f1style.label}><strong>Date of Birth </strong></label><div className={f1style.colon}>:</div><div className={f1style.value}>{pdata.dob}</div></div>
                <div className={f1style.item}><label className={f1style.label}><strong>Age </strong></label><div className={f1style.colon}>:</div><div className={f1style.value}>{pdata.age}</div></div>
                <div className={f1style.item}><label className={f1style.label}><strong>Address </strong></label><div className={f1style.colon}>:</div><div className={f1style.value}>{pdata.address}</div></div>
                <div className={f1style.item}><label className={f1style.label}><strong>Pincode </strong></label><div className={f1style.colon}>:</div><div className={f1style.value}>{pdata.pin}</div></div>
                <div className={f1style.item}><label className={f1style.label}><strong>Insurance no </strong></label><div className={f1style.colon}>:</div><div className={f1style.value}>{pdata.insno}</div></div>
                <div className={f1style.item}><label className={f1style.label}><strong>Aadhar no  </strong></label><div className={f1style.colon}>:</div><div className={f1style.value}>{pdata.aadharid}</div></div>
                
            </div>
        </div>
    </>
  );
};

