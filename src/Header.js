import React from 'react';
import './css/Header.css';
import Logo from './assets/Logo.js'

function Header() {
    return(
        <div className= "header-content">
            <div className= "header-logo">
                {/* <div className="main-logo">
                    <Logo />
                </div> */}
                <p>Kevin Lai</p>
            </div>
        </div>
    )
}

export default Header