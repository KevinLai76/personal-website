import React from 'react';
import './css/Header.css';
import Logo from './assets/Logo.js'

function Header() {
    return(
        <div className= "header-content">
            <div className= "header-logo">
                <div className="main-logo">
                    <Logo />
                </div>
                <div className="name-logo">
                    Kevin Lai
                </div>
            </div>
        </div>
    )
}

export default Header