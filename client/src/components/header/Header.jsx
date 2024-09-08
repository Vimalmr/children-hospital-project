import React, { useContext } from 'react';
import style3 from './Header.module.css';
import headlogo from '../../assets/logohead.jpeg';
import { UserContext } from '../Usercontext';
import axios from 'axios';


function Header() {
    const { user } = useContext(UserContext);

    const handleLogout = async (e) => {
        
        try {
			const { data } = await axios.post("/api/login/logout", {});
            window.location = "/login";
		} catch (error) {
			if (
				error.response &&
				error.response.status >= 400 &&
				error.response.status <= 500
			) {
				setError(error.response.data.message);
			}
		}
    }

    return (
        <div className={style3.container}>
            <div className={style3.headline}>
                <img src={headlogo} alt="logo_head" width="65px" />
            </div>

            <div className={style3.dropdown}>
                <button className={style3.dropbtn}>
                    {user ? user : 'No User'}
                </button>
                <div className={style3.dropdowncontent}>
                    <a href="#" onClick={handleLogout}>Logout</a>
                </div>
            </div>
        </div>
    );
}

export default Header;
