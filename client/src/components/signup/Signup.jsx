import style1 from './Signup.module.css';
import headlogo from '../../assets/logohead.jpeg';
import sidelogo from '../../assets/loginSideLogo.jpg';
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


function Signup(){

    const [data, setData] = useState({
		userid: "",
		password: "",
		role: "",
	});

    const [error, setError] = useState("");

    const navigate = useNavigate();

    const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};

    const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const url = "/api/signup";
			const { data: res } = await axios.post(url, data);
			navigate("/login");
			console.log(res.message);
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
            <div className={style1.headline}>
                <img src={headlogo} alt="logo_head" width="65px"/>
            </div>
            <p className={style1.loginHeading}>Institute of Child Health and Hospital for Children</p>
            <div className={style1.loginContanier}>
                <div>
                    <img src={sidelogo} alt="side_logo" className={style1.sideimg} />
                </div>
                <div className={style1.loginForm}>
                    <p className={style1.logintxt}>SIGN UP</p>
                    <form onSubmit={handleSubmit}>

                        <label className={style1.loginLabel}>UserID</label><br/>
                        <input
							type="text"
							placeholder="Enter the UserID"
							name="userid"
                            onChange={handleChange}
                            value={data.userid}
							required
						/>
                        <br />

                        <label className={style1.loginLabel}>Password</label><br/>
                        <input
							type="password"
							placeholder="Enter the Password"
							name="password"
                            onChange={handleChange}
                            value={data.password}
							required
						/>
                        <br />

                        <label className={style1.loginLabel}>Role</label><br/>
                        <input
							type="text"
							placeholder="Enter the Role"
							name="role"
                            onChange={handleChange}
                            value={data.role}
							required
						/>
                        <br />
                        <button type="submit" className={style1.submitbtn}>Sign up</button>
                    </form>
                    {error && <div className={style1.error_msg}>{error}</div>}
                </div>
            </div>
        </>
    );
}

export default Signup