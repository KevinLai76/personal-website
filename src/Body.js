import React from 'react';
import { useState } from 'react'
import Bio from './Bio.js';
import Projects from './Projects.js';
import Experience from './Experience.js';
import Interest from './Interest.js';
import './css/Body.css';

function Body(){

    const [display, setDisplay] = useState(true)

    const handleDisplay = (e) => {
        e.target.innerText === 'Bio' ? setDisplay(true) : setDisplay(false)
    }

    return(
        <div className="body-content">
            <div className="side-body-container">
                <button style={display ? {color:"white"} : {}} onClick={handleDisplay}>Bio</button>
                <button style={!display ? {color:"white"} : {}} onClick={handleDisplay}>Projects</button>
            </div>
            <div className="main-body-container">
                {display 
                ?
                <Bio className="bio-container" />
                :
                <Projects className="projects-container" />
                }
                {/* <Experience className="experience-container"/> */}
                {/* <Interest className="interest-container"/> */}
            </div>
        </div>
    )
}

export default Body;