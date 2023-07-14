import { FC } from "react";
import './footer.scss';
import logo from '../../assets/icons/logo.png';



const Footer:FC = () =>{
    return(
      <footer className="footer">
        <div className="footer-wrap">
            <div className="footer-container">
                <div className="row footer-row gap-3">
                    <div className="col-4 col-logo d-flex flex-column gap-2">
                        <img src={logo} alt="logotype" />
                        <p>Blog Jr is a well-designed Blog theme. It is blazing fast, extremely light-weight, search engine friendly and very easy to use.</p>
                    </div>
                    <div className="col-4 col-links d-flex">
                        <div className="row">
                            <div className="col-7">
                                <h4 className="col-title">Recent Posts</h4>
                                <ul className="link-list p-0">
                                    <li><a href="#">Morning Sunrise Cozy Bed</a></li>
                                    <li><a href="#">Perfect Macro Green Leaves</a></li>
                                    <li><a href="#">Black & White New York Girl</a></li>
                                </ul>
                            </div>
                    
                            <div className="col-5">
                                <h4 className="col-title">Categories</h4>
                                <ul className="link-list p-0">
                                    <li><a href="#">Design (10)</a></li>
                                    <li><a href="#">Photography (4)</a></li>
                                    <li><a href="#">Potrait (2)</a></li>
                                    <li><a href="#">Travel (8)</a></li>
                                </ul>
                            </div>
                        </div>
                       
                    </div>
                    <div className="col-3 col-tags">

                       <div className="tags-container">
                            <h4 className="col-title">Tags</h4>
                            <p className="tag-item">Agriculture</p>
                            <p className="tag-item">Forest</p>
                            <p className="tag-item">Home</p>
                            <p className="tag-item">Minimal</p>
                            <p className="tag-item">Portrait</p>
                            <p className="tag-item">Zoom</p>
                       </div>

                    </div>
                </div>
            </div>
            <div className="footer-copyright mt-5 d-flex">
                Copyright © 2020 | All Rights Reserved. BlogJr by Shark Themes. Repeated by Yurii Bogonos
            </div>
        </div>
      </footer >
    );
};

export default Footer;