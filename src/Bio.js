import React from 'react';
import "./css/Bio.css"

function Bio() {
    return(
        <div className= "bio-content">
            <div className= "bio-title">
                    <h1 className= "bio-title-hey">Welcome</h1>
            </div>
            <span className= "bio-content-text-container">
                <p className= "bio-content-text-message-1">
                    My name is Kevin, a web developer with a love for minimalist design. 
                    With a focus on functionality and simplicity, I try to blend aesthetics and usability on every project. 
                    Whether it’s building intuitive interfaces, optimizing performance, or any creative/technical project I’m always up for the challenge.    
                </p> 
                <p className= "bio-content-message-2">
                    When I’m not on the computer you can find me outside shooting film photography or playing wiffleball.
                    Looking forward to the opportunity of working together, let's build something beautiful.    
                </p>
            </span>
        </div>
    )
}

export default Bio