import React from "react";
import {FaFacebookF,FaTwitter,FaYoutube,FaInstagram} from 'react-icons/fa';
import {AiFillInstagram} from 'react-icons/ai';
import images from '../images'
import './Header.css'
const Head = () =>{
    return(
        <div>
            <section className="head">
                <div className="container flexSB">
                    <div className="logo">
                        <img src={images.bitlogo} alt='logo bit' style={{width: '80px'}} />
                    </div>

                    <div className="social">
                        <FaFacebookF className="icon"/>
                        <FaInstagram className="icon"/>
                        <FaTwitter className="icon"/>
                        <FaYoutube className="icon"/>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Head