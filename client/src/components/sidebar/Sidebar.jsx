import style6 from './Sidebar.module.css';

function Sidebar(){
    return (
        <>
            <div className={style6.container}>
                <ul className={style6.ulist}>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Patient Information</a></li>
                    <li><a href="#">Examintaion</a></li>
                    <li><a href="#">Patient Reports</a></li>
                    <li><a href="#">Document</a></li>
                </ul>
            </div>
            <p>dsf</p>
        </>
    );
}

export default Sidebar;