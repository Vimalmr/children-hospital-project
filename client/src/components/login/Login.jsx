import style2 from './Login.module.css';
import headlogo from '../../assets/logohead.jpeg';
import sidelogo from '../../assets/loginSideLogo.jpg';
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login(){

    const [data, setData] = useState({
		userid: "",
		password: "",
	});

    const [error, setError] = useState("");

    const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};

    const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const url = "/api/login";
			const { data: res } = await axios.post(url, data);
			window.location = "/header";
		} catch (error) {
			if (
				error.response &&
				error.response.status >= 400 &&
				error.response.status <= 500
			) {
				setError(error.response.data.message);
			}
		}
	};

    return (
        <>
            <div className={style2.headline}>
                <img src={headlogo} alt="logo_head" width="65px"/>
            </div>
            <p className={style2.loginHeading}>Institute of Child Health and Hospital for Children</p>
            <div className={style2.loginContanier}>
                <div className={style2.sideHolder}>
                    <img src={sidelogo} alt="side_logo" className={style2.sideimg} />
                </div>
                <div className={style2.loginForm}>
                    <p className={style2.logintxt}>LOGIN</p>
                    <form onSubmit={handleSubmit}>

                        <label className={style2.loginLabel}>UserID</label><br/>
                        <input
							type="text"
							placeholder="Enter the UserID"
							name="userid"
                            className='loginInput'
                            onChange={handleChange}
                            value={data.userid}
							required
						/>
                        <br />

                        <label className={style2.loginLabel}>Password</label><br/>
                        <input
							type="password"
							placeholder="Enter the Password"
							name="password"
                            className='loginInput'
                            onChange={handleChange}
                            value={data.password}
							required
						/>
                        <br />
                        <button type="submit" className={style2.submitbtn}>Login</button>
                    </form>
                    {error && <div className={style2.error_msg}>{error}</div>}
                </div>
            </div>
        </>
    );
}

export default Login