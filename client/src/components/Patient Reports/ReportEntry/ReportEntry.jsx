import React from 'react'
import style9 from './ReportEntry.module.css'

const ReportEntry = () => {
  return (
    <>
      <div className={style9.heading}>
        <h2>Patient Report New Entry</h2>
      </div>
      <div>
        <div className={style9.container}>
          <div>
            <label htmlFor='admissionNum' className={style9.detailsLabel}>OP\Admission No:</label>
            <input type='text' className={style9.detailsForm} name='admissionNum'></input>
          </div>
          <div>
            <label htmlFor='Date' className={style9.detailsLabel}>Date\Time:</label>
            <input type='text' className={style9.detailsForm} name='Date'></input>
          </div>
          <div>
            <label htmlFor='Diagnosis' className={style9.detailsLabel}>Diagnosis:</label>
            <input type='text' className={style9.detailsForm} name='Diagnosis'></input>
          </div>
          <div>
            <label htmlFor='Procedure' className={style9.detailsLabel}>Procedure:</label>
            <input type='text' className={style9.detailsForm} name='Procedure'></input>
          </div>
          <div>
            <label htmlFor='Treatment' className={style9.detailsLabel}>Treatment:</label>
            <input type='text' className={style9.detailsForm} name='Treatment'></input>
          </div>
          <div>
            <label htmlFor='DoctorName' className={style9.detailsLabel}>Doctor Name:</label>
            <input type='text' className={style9.detailsForm} name='DoctorName'></input>
          </div>
          <div>
            <label htmlFor='Status' className={style9.detailsLabel}>Status:</label>
            <input type='text' className={style9.detailsForm} name='Status'></input>
          </div>
        </div>
        <div id={style9.divdiv}>
          <button className={style9.searchButton}>Submit</button>
        </div>
      </div>
    </>
  )
}

export default ReportEntry