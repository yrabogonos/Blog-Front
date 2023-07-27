import { FC } from "react";
import './nav.scss';
import logo from '../../../assets/icons/logo.png';

const Navigation:FC<{setModalActive:(modalActive:boolean)=>void}> = ({setModalActive})=>{ // потім забрати 
    return(
       <nav className="navigation pt-2">
            <div className="nav-container d-flex justify-content-between align-items-center">
                <div className="nav-logotype d-flex gap-3 align-items-center">
                    <div className="nav-img">
                        <img src={logo} alt="logo" />
                    </div>
                    <div className="logo-text">
                        <p className="m-0">Photography</p>
                        <p className="m-0">Capture the moment</p>
                    </div>
                </div>
                <div className="nav-links d-flex gap-4">
                    <a className="nav-link" href="#">Home</a>
                    <a className="nav-link" href="#">Log In</a>
                    <a className="nav-link" href="#" onClick={(e:React.MouseEvent)=>{
                        e.preventDefault();
                        setModalActive(true);
                    }}>Sign Up</a>
                </div>
            </div>
       </nav>
    );
};

export default Navigation;