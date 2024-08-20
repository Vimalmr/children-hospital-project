import React, { useState } from 'react'
import style7 from './PatientReports.module.css'
import ReportDetails from './ReportDetails/ReportDetails';
import ReportEntry from './ReportEntry/ReportEntry';

const PatientReports = () => {
  const [reportComponent, setReportComponent] = useState('reportDetails');
  const renderComponent = () => {
    switch (reportComponent) {
      case 'reportDetails':
        return <ReportDetails />;
      case 'reportEntry':
        return <ReportEntry />;
      default:
        return <ReportDetails />;
    }
  };
  return (
    <div className={style7.container}>
      <div className={style7.buttonContainer}>
        <button className={`${style7.reportButton} ${reportComponent === 'reportDetails' ? style7.reportButtonActive : ''}`} onClick={() => setReportComponent('reportDetails')}>Report Details</button>
        <button className={`${style7.reportButton} ${reportComponent === 'reportEntry' ? style7.reportButtonActive : ''}`}onClick={() => setReportComponent('reportEntry')}>Report Entry</button>
      </div>
      <div>
      {renderComponent()}
      </div>
    </div>
  )
}

export default PatientReports