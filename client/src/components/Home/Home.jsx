import Header from '../header/Header';
import style6 from './Home.module.css';
import PatientReports from '../Patient Reports/PatientReports';
import { useState } from 'react';
import  HomeContent  from '../HomeContent/HomeContent';
import { PatientInfo } from '../PatientInfo/PatientInfo';

function Home() {
    const [activeComponent, setActiveComponent] = useState('home');

    const renderComponent = () => {
        switch (activeComponent) {
            case 'home':
                return <HomeContent/>; //change to home when the component is created
            case 'patient_information':
                return <PatientInfo />; //change to Patient Information when the component is created
            case 'examination':
                return <h2>Examination</h2>; //change to Examination when the component is created
            case 'patient_reports':
                return <PatientReports />;
            case 'documents':
                return <h2>Documents</h2> //change to Documents when the component is created
        }
    }
    return (
        <>
            <Header className={style6.header} />
            <div className={style6.container}>
                <ul className={style6.ulist}>
                    <li className={`${activeComponent === 'home' ? style6.activePage : ''}`} onClick={() => setActiveComponent('home')}>Home</li>
                    <li className={`${activeComponent === 'patient_information' ? style6.activePage : ''}`} onClick={() => setActiveComponent('patient_information')}>Patient Information</li>
                    <li className={`${activeComponent === 'examination' ? style6.activePage : ''}`} onClick={() => setActiveComponent('examination')}>Examination</li>
                    <li className={`${activeComponent === 'patient_reports' ? style6.activePage : ''}`} onClick={() => setActiveComponent('patient_reports')}>Patient Reports</li>
                    <li className={`${activeComponent === 'documents' ? style6.activePage : ''}`} onClick={() => setActiveComponent('documents')}>Documents</li>
                </ul>
            </div>
            <div className={style6.mainContent}>
                {renderComponent()}
            </div>
        </>
    );
}

export default Home;