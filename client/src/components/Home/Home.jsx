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
<<<<<<< HEAD
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
=======

    });

    const handlePatientChange = (e)=>{
        const {name,value}=e.target;
        setPatientData(
            {
                ...PatientData, [name]:value,
            }
        )
    };

    const handleMotherChange = (e)=>{
        const {name,value}=e.target;
        setMotherData(
            {
                ...MotherData, [name]:value,
            }
        )
    };

    const handleFatherChange = (e)=>{
        const {name,value}=e.target;
        setFatherData(
            {
                ...FatherData, [name]:value,
            }
        )
    };

    const handleCheckboxChange = (e)=>{
        const {name,checked}=e.target;
        setFatherData(
            {
                ...FatherData, 
                habits:{
                    ...FatherData.habits, [name]:checked,

                }
            },
        )
    };

    console.log(PatientData);
    console.log(MotherData);
    console.log(FatherData);

    const handleSubmit = async(e) =>{
        e.preventDefault();
        const data = {
            patientData :PatientData,
            motherData : MotherData,
            fatherData: FatherData

        };
        console.log("data of patient",data);
        try{

            const res = await axios.post("/api/patiententry",data);
            console.log('response',res.data);
        }catch(error){
            console.log("error at posting patient data",error);
        }
    };

  return (
    <>
        <div className={hstyle.container}>
            <div className={hstyle.heading}>New Patient Entry</div>
            <div>
                <form onSubmit={handleSubmit}>
                    <div className={hstyle.content}>
                        <div className={hstyle.item}>
                            <div className={hstyle.subhead}>Patient Details</div>
                            <div className={hstyle.section}>
                                <label className={hstyle.label}>Admission no</label><br />
                                <input
                                className={hstyle.input}
                                type="text"
                                placeholder="Admission number"
                                name="admno"
                                //className={}
                                onChange={handlePatientChange}
                                value={PatientData.admno}
                                required
                                ></input><br />

                                <label className={hstyle.label}>Name</label><br />
                                <input
                                className={hstyle.input}
                                type="text"
                                placeholder="Name"
                                name="name"
                                //className={}
                                onChange={handlePatientChange}
                                value={PatientData.name}
                                required
                                ></input><br />

                                <label className={hstyle.label}>Date of Birth</label><br />
                                <input
                                className={hstyle.input}
                                type= "date"
                                placeholder="DOB"
                                name="dob"
                                //className={}
                                onChange={handlePatientChange}
                                value={PatientData.dob}
                                required
                                ></input><br />

                                <label className={hstyle.label}>Age</label><br />
                                <input
                                className={hstyle.input}
                                type="number"
                                placeholder="Age"
                                name="age"
                                //className={}
                                onChange={handlePatientChange}
                                value={PatientData.age}
                                required
                                ></input><br />


                                <label className={hstyle.label}>Aadhar no</label><br />
                                <input
                                className={hstyle.input}
                                type="text"
                                placeholder="Aadhar number"
                                name="aadharid"
                                //className={}
                                onChange={handlePatientChange}
                                value={PatientData.aadharid}
                                required
                                ></input><br />

                                <label className={hstyle.label}>Insurance no</label><br />
                                <input
                                className={hstyle.input}
                                type="text"
                                placeholder="Insurance number"
                                name="insno"
                                //className={}
                                onChange={handlePatientChange}
                                value={PatientData.insno}
                                ></input><br />


                                <label className={hstyle.label}>Address</label><br />
                                <textarea
                                className={hstyle.input}
                                rows="4"
                                cols="20"
                                placeholder="Address"
                                name="address"
                                onChange={handlePatientChange}
                                value={PatientData.address}
                                required
                                ></textarea><br />

                                <label className={hstyle.label}>Pincode</label><br />
                                <input
                                className={hstyle.input}
                                type="text"
                                placeholder="pincode"
                                name="pin"
                                //className={}
                                onChange={handlePatientChange}
                                value={PatientData.pin}
                                required
                                ></input><br />
                            </div>
                        </div>
                        <div className={hstyle.item}>

                            <div className={hstyle.subhead}>Patient Mother Details</div>
                            <div className={hstyle.section}>

                                <label className={hstyle.label}>Mother name:</label><br />
                                <input
                                className={hstyle.input}
                                type="text"
                                placeholder="Mother name"
                                name="name"
                                //className={}
                                onChange={handleMotherChange}
                                value={MotherData.name}
                                required
                                ></input><br />

                                <label className={hstyle.label}>Mother age:</label><br />
                                <input
                                className={hstyle.input}
                                type= "number"
                                placeholder="Mother age"
                                name="age"
                                //className={}
                                onChange={handleMotherChange}
                                value={MotherData.age}
                                required
                                ></input><br />

                            
                                <label className={hstyle.label}>Mother occupation:</label><br />
                                <input
                                className={hstyle.input}
                                type="text"
                                placeholder="Mother occupation"
                                name="moocc"
                                //className={}
                                onChange={handleMotherChange}
                                value={MotherData.moocc}
                                required
                                ></input><br />

                                <label className={hstyle.label}>Mother health general:</label><br />
                                <input
                                className={hstyle.input}
                                type="text"
                                placeholder="health general"
                                name="hegnrl"
                                //className={}
                                onChange={handleMotherChange}
                                value={MotherData.hegnrl}
                                ></input><br />

                                <label className={hstyle.label}>Mother diabetes</label><br />
                                <input
                                className={hstyle.input}
                                type="text"
                                placeholder="Mother diabetes"
                                name="modiab"
                                //className={}
                                onChange={handleMotherChange}
                                value={MotherData.modiab}
                                required
                                ></input><br />

                                <label className={hstyle.label}>Mother illness:</label><br />
                                <input
                                className={hstyle.input}
                                type="text"
                                placeholder="Mother illness"
                                name="moill"
                                //className={}
                                onChange={handleMotherChange}
                                value={MotherData.moill}
                                required
                                ></input><br />

                                <label className={hstyle.label}>Mother drugs:</label><br />
                                <input
                                className={hstyle.input}
                                type="text"
                                placeholder="Mother drugs"
                                name="modrg"
                                //className={}
                                onChange={handleMotherChange}
                                value={MotherData.modrg}
                                required
                                ></input><br />

                                <label className={hstyle.label}>Mother exposure teratogens:</label><br />
                                <input
                                className={hstyle.input}
                                type="text"
                                placeholder="Mother exposure teratogens"
                                name="moexts"
                                //className={}
                                onChange={handleMotherChange}
                                value={MotherData.moexts}
                                required
                                ></input><br />
                            </div>

                        </div>

                        <div className={hstyle.item}>

                            <div className={hstyle.subhead}>Patient Father Details</div>
                            <div className={hstyle.section}>

                                <label className={hstyle.label}>Father name:</label><br />
                                <input
                                className={hstyle.input}
                                type="text"
                                placeholder="Father name"
                                name="name"
                                //className={}
                                onChange={handleFatherChange}
                                value={FatherData.name}
                                required
                                ></input><br />

                                <label className={hstyle.label}>Father age:</label><br />
                                <input
                                className={hstyle.input}
                                type= "number"
                                placeholder="Father age"
                                name="age"
                                //className={}
                                onChange={handleFatherChange}
                                value={FatherData.age}
                                required
                                ></input><br />

                            
                                <label className={hstyle.label}>Father occupation:</label><br />
                                <input
                                className={hstyle.input}
                                type="text"
                                placeholder="Father occupation"
                                name="faocc"
                                //className={}
                                onChange={handleFatherChange}
                                value={FatherData.faocc}
                                required
                                ></input><br />

                                <label className={hstyle.label}>Father medication:</label><br />
                                <input
                                className={hstyle.input}
                                type="text"
                                placeholder="Father medication"
                                name="famed"
                                //className={}
                                onChange={handleFatherChange}
                                value={FatherData.famed}
                                required
                                ></input><br />

                                <label className={hstyle.label}>Significant past illness:</label><br />
                                <input
                                className={hstyle.input}
                                type="text"
                                placeholder="past illness"
                                name="fapaill"
                                //className={}
                                onChange={handleFatherChange}
                                value={FatherData.fapaill}
                                required
                                ></input><br />


                                <label className={hstyle.label}>Does he has the following habits?</label><br />
                                <input
                                type="checkbox"
                                name="smoke"
                                //className={}
                                onChange={handleCheckboxChange}
                                checked={FatherData.habits.smoke}
                                required
                                ></input>
                                <label className={hstyle.label}>Smoking</label><br />

                                <input
                                type="checkbox"
                                name="tobacco"
                                //className={}
                                onChange={handleCheckboxChange}
                                checked={FatherData.habits.tobacco}
                                required
                                ></input>
                                <label className={hstyle.label}>tobacco</label><br />

                                <input
                                type="checkbox"
                                name="alcohol"
                                //className={}
                                onChange={handleCheckboxChange}
                                checked={FatherData.habits.alcohol}
                                required
                                ></input>
                                <label className={hstyle.label}>alcohol</label>                               
                            </div>

                        </div>
                        

                    </div>
                    <div className={hstyle.submit}>
                    <input
                    type='submit'
                    value='Submit'
                    ></input>

                    </div>
                    
                   
                    
                </form>
>>>>>>> 2156931f3d04867721f885aaabab17f39fae065c
            </div>
            <div className={style6.mainContent}>
                {renderComponent()}
            </div>
        </>
    );
}

export default Home;