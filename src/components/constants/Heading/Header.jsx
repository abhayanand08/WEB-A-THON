import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {GiHamburgerMenu} from 'react-icons/gi';
import { ImCross } from 'react-icons/im';
import Head from './Head';

const Header = () => {
  
    const [click, setClick] = useState(false);

  return (
    <div>
        <Head />
        <header>
            <nav className='flexSB'>
                <ul  className={click ? "mobile-nav" : "flexSB"} onClick = {() => setClick(false)}>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/Administration">Administration</Link></li>
                    <li><Link to="/Departments">Departments</Link></li>
                    <li><Link to="/About">About</Link></li>
                    <li><Link to="/Admissions">Admissions</Link></li>
                    <li><Link to="/TrainingandPlacements">Training & Placements</Link></li>
                </ul>
                <div className='start'>
                    <div className='login-btn'>Log In</div>
                </div>
                <button className='toggle' onClick = {() => setClick(!click)}>
                    {click ? <ImCross /> : <GiHamburgerMenu />}
                </button>
            </nav>
        </header>
    </div>
  )
}

export default Header