import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from "axios";
import Login from "./components/login/Login";
import Signup from "./components/signup/Signup";
import Header from "./components/header/Header";
import Home from "./components/Home/Home";
import HomeContent from "./components/HomeContent/HomeContent";
import { UserContextProvider } from "./components/Usercontext";
import PatientReports from "./components/Patient Reports/PatientReports";
import { PatientInfo } from "./components/PatientInfo/PatientInfo";

axios.defaults.withCredentials = true;
axios.defaults.baseURL = 'http://localhost:8619';

function App() {
  return (
    <UserContextProvider>
      <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/header" element={<Header />} />
        <Route path="/home" element={<Home />} />
        <Route path="/homeContent" element={<HomeContent/>} />
        <Route path="/patient_reports" element={<PatientReports />}/>
        <Route path="/patientinfo" element={<PatientInfo />}/>
      </Routes>
      </Router>
    </UserContextProvider>
  );
}

export default App;