import React, { useState } from 'react'
import style8 from './ReportDetails.module.css'

const ReportDetails = () => {
    const [inputVal, setInputVal] = useState('');
    const [error, setError] = useState('');

    const handleInputChange = (event) =>{
        setInputVal(event.target.value);
        setError('');
    }
    const handleSearchClick = () =>{
        if (!inputVal.trim()) {
            setError('Please enter a value.');
          } else {
            setError('');
            console.log("Search input value:", inputVal);
            setInputVal('');
          }
    }
    return (
        <>
            <div className={style8.container}>
                <label htmlFor='admissionNum' id={style8.detailsLabel}>OP\Admission No:</label>
                <input type='text' id={style8.detailsForm} name='admissionNum' value={inputVal} onChange={handleInputChange} required></input>
                <button id={style8.searchButton} onClick={handleSearchClick}>Search</button>
                {error && <p className={style8.error}>{error}</p>}
            </div>
            <div className={style8.heading}>
                <h2>Patient Report Details</h2>
            </div>
        </>
    )
}

export default ReportDetails