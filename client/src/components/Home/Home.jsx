import Header from '../header/Header';
import style6 from './Home.module.css';
import PatientReports from '../Patient Reports/PatientReports';
import { useState, useEffect } from 'react';
import HomeContent from '../HomeContent/HomeContent';
import { PatientInfo } from '../PatientInfo/PatientInfo';
import { UserContext } from "../Usercontext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
    const [activeComponent, setActiveComponent] = useState('home');
    const { user, loading, error } = useContext(UserContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (loading) return; 

        if (error) {
            console.error('Error fetching user data:', error);
            return;
        }

        if (user === null) {
            navigate("/login");
        }
    }, [user, loading, error, navigate]);

    const renderComponent = () => {
        switch (activeComponent) {
            case 'home':
                return <HomeContent />;
            case 'patient_information':
                return <PatientInfo />;
            case 'examination':
                return <h2>Examination</h2>;
            case 'patient_reports':
                return <PatientReports />;
            case 'documents':
                return <h2>Documents</h2>;
            case 'login':
                return <h2>Login Required</h2>;
            default:
                return <h2>Not Found</h2>;
        }
    };

    if (loading) {
        return <div>Loading...</div>;
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
