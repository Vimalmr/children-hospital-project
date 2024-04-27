import style3 from "./Header.module.css";
import headlogo from '../../assets/logohead.jpeg';
import { UserContext } from "../Usercontext";
import { useContext } from "react";

function Header(){
    const {user} = useContext(UserContext)
    console.log(user);
    return (
        <>
        <div className={style3.container}>

            <div className={style3.headline}>
                <img src={headlogo} alt="logo_head" width="65px"/>
            </div>

            <div className={style3.dropdown}>
                <button className={style3.dropbtn}>
                    {!!user && (<div>{user}</div>)}
                </button>
                <div className={style3.dropdowncontent}>
                    <a href="#">Logout</a>
                </div>
            </div>

        </div>
        </>
    );
}

export default Header;