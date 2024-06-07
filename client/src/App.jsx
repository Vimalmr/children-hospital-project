import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from "axios";
import Login from "./components/login/Login";
import Signup from "./components/signup/Signup";
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import { UserContextProvider } from "./components/Usercontext";

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
        <Route path="/sidebar" element={<Sidebar />} />
      </Routes>
      </Router>
    </UserContextProvider>
  );
}

export default App;