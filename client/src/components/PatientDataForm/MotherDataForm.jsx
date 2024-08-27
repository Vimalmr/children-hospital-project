import React from 'react';
import f1style from './PatientDataForm.module.css';

export const MotherDataForm = ({mdata}) => {
  return (
    <>
        <div>
            <h2 className={f1style.heading}>Patient Mother's Details<span className={f1style.line}></span></h2>
            <div className={f1style.data}>
                <div className={f1style.item}><label className={f1style.label}><strong>Mother's Name </strong></label><div className={f1style.colon}>:</div><div className={f1style.value}>{mdata.name}</div></div>
                <div className={f1style.item}><label className={f1style.label}><strong>Mother's Age </strong></label><div className={f1style.colon}>:</div><div className={f1style.value}>{mdata.age}</div></div>
                <div className={f1style.item}><label className={f1style.label}><strong>Mother's Occupation </strong></label><div className={f1style.colon}>:</div><div className={f1style.value}>{mdata.moocc}</div></div>
                <div className={f1style.item}><label className={f1style.label}><strong>Mother's General Health</strong></label><div className={f1style.colon}>:</div><div className={f1style.value}>{mdata.hegnrl}</div></div>
                <div className={f1style.item}><label className={f1style.label}><strong>Mother's Diabetes </strong></label><div className={f1style.colon}>:</div><div className={f1style.value}>{mdata.modiab}</div></div>
                <div className={f1style.item}><label className={f1style.label}><strong>Mother's Other Illness</strong></label><div className={f1style.colon}>:</div><div className={f1style.value}>{mdata.moill}</div></div>
                <div className={f1style.item}><label className={f1style.label}><strong>Mother's Drugs Being Taken  </strong></label><div className={f1style.colon}>:</div><div className={f1style.value}>{mdata.modrg}</div></div>
                <div className={f1style.item}><label className={f1style.label}><strong>Mother's Exposure To Teratogens - During Pregnancy  </strong></label><div className={f1style.colon}>:</div><div className={f1style.value}>{mdata.moexts}</div></div>
                
                
            </div>
        </div>
    </>
  );
};
