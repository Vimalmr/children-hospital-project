import React from 'react'
import style7 from './PatientReports.module.css'

const PatientReports = () => {
  return (
    <div className={style7.container}>
      <div className={style7.buttonContainer}>
        <button className={style7.topButton}>Report Details</button>
        <button className={style7.topButton}>Report Entry</button>
      </div>
      <div>
        <label htmlFor="admissionNum">OP/Admission No:</label>
        <input type='text' name='admissionNum' />
      </div>
    </div>
  )
}

export default PatientReports