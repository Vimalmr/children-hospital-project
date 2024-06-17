import Header from '../header/Header';
import style6 from './Sidebar.module.css';
import PatientReports from '../Patient Reports/PatientReports';
import { useState } from 'react';

function Sidebar() {
    const [activeComponent, setActiveComponent] = useState('home');

    const renderComponent = () =>{
        switch(activeComponent){
            case 'patient_reports':
                return <PatientReports />;
        }
    }
    return (
        <>
            <Header />
            <div className={style6.container}>
                <ul className={style6.ulist}>
                <li><a href="#home" onClick={() => setActiveComponent('home')}>Home</a></li>
                <li><a href="#patient_information" onClick={() => setActiveComponent('patient_information')}>Patient Information</a></li>
                <li><a href="#examination" onClick={() => setActiveComponent('examination')}>Examination</a></li>
                <li><a href="#patient_reports" onClick={() => setActiveComponent('patient_reports')}>Patient Reports</a></li>
                <li><a href="#document" onClick={() => setActiveComponent('document')}>Document</a></li>
                </ul>
            </div>
            <div>
                {renderComponent()}
            </div>
        </>
    );
}

export default Sidebar;