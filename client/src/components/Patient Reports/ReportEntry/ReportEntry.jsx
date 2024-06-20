import React from 'react'
import { useState } from 'react';
import style9 from './ReportEntry.module.css'

const ReportEntry = () => {

  const initialFormValues = {
    admissionNum: '',
    Date: '',
    Diagnosis: '',
    Procedure: '',
    Treatment: '',
    DoctorName: '',
    Status: '',
  };
  // State to manage input values
  const [formValues, setFormValues] = useState(initialFormValues);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const valuesArray = Object.values(formValues);
    console.log(valuesArray);
    setFormValues(initialFormValues);
  };
  return (
    <>
      <div className={style9.heading}>
        <h2>Patient Report New Entry</h2>
      </div>
      <form onSubmit={handleSubmit}>
        <div className={style9.container}>
          <div>
            <label htmlFor='admissionNum' className={style9.detailsLabel}>OP\Admission No:</label>
            <input type='text' className={style9.detailsForm} name='admissionNum' value={formValues.admissionNum} onChange={handleChange}></input>
          </div>
          <div>
            <label htmlFor='Date' className={style9.detailsLabel}>Date\Time:</label>
            <input type='text' className={style9.detailsForm} name='Date' value={formValues.Date} onChange={handleChange}></input>
          </div>
          <div>
            <label htmlFor='Diagnosis' className={style9.detailsLabel}>Diagnosis:</label>
            <input type='text' className={style9.detailsForm} name='Diagnosis' value={formValues.Diagnosis} onChange={handleChange}></input>
          </div>
          <div>
            <label htmlFor='Procedure' className={style9.detailsLabel}>Procedure:</label>
            <input type='text' className={style9.detailsForm} name='Procedure' value={formValues.Procedure} onChange={handleChange}></input>
          </div>
          <div>
            <label htmlFor='Treatment' className={style9.detailsLabel}>Treatment:</label>
            <input type='text' className={style9.detailsForm} name='Treatment' value={formValues.Treatment} onChange={handleChange}></input>
          </div>
          <div>
            <label htmlFor='DoctorName' className={style9.detailsLabel}>Doctor Name:</label>
            <input type='text' className={style9.detailsForm} name='DoctorName' value={formValues.DoctorName} onChange={handleChange}></input>
          </div>
          <div>
            <label htmlFor='Status' className={style9.detailsLabel}>Status:</label>
            <input type='text' className={style9.detailsForm} name='Status' value={formValues.Status} onChange={handleChange}></input>
          </div>
        </div>
        <div id={style9.divdiv}>
          <button type='submit' className={style9.searchButton}>Submit</button>
        </div>
      </form>
    </>
  )
}

export default ReportEntry