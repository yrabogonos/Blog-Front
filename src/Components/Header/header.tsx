import { FC } from "react";
import './header.scss';
import Navigation from "./Nav/nav";

const Header:FC<{setModalActive:(modalActive:boolean)=>void}> = ({setModalActive}) =>{
    return(
        <section className="header">
            <div className="header-wrap d-flex flex-column">
                {<Navigation setModalActive={setModalActive} />}
                <div className="header-text">
                    <h4 className="text-category">Photography</h4>
                    <h2 className="text-title">African Lion <br /> Feel The Leadership </h2>
                    <div className="text-subtitle">
                        Author | April 25, 2020
                    </div>

                </div>
            </div>            
        </section>
    );
};

export default Header;