import React from 'react';
import { useState } from 'react'
import './css/Projects.css'

function Projects() {

    const [displayProject, setDisplayProject] = useState("project1")
    const bubLink = <a style={{color: "inherit"}} href="https://www.bubthebandit.com/">Bub The Bandit</a>
    const inanimateesLink = <a style={{color: "inherit"}} href="https://www.inanimatees.com/">Inanimatees</a>
    const text = {
        project1:{
            title: bubLink,
            body1:
            "Bub The Bandit is an NFT project my friends and I embarked on\
            as a means to take our collective abilities to try to establish\
            ourselves in the crypto space. Although objectively the project\
            (and NFTs in its entirety) was not successful, we are still proud\
            of the work we did and what we accomplished.",
            body2:
            "Bub the Bandit reflects our aspirations of a technology we believe\
            to have significant potential. We saw NFTs as an interesting fusion\
            of art and technology and as a way to generate curiosity for blockchain.",
            link: bubLink
        },
        project2:{
            title: inanimateesLink,
            body1:
            "This is our take on a personality quiz but with personality.\
            You’ve taken personality quizzes before, you know the deal,\
            but have you ever wanted to be a chicken sandwich? This quiz\
            will tell you who and more importantly what you really are.",
            body2:
            "A fun project we decided to make in our free time.\
            Though cute and quirky on the surface some real work\
            went into figuring out exactly how to word the questions/answers\
            and the logic behind assigning a personality to the user.",
            link: inanimateesLink
        },
        project3:{
            title:"NA",
            body1:"NA",
            body2:"NA"
        }
    }

    const handleDisplayProject = (e) => {
        setDisplayProject(e.target.className)
    }

    const handleDisplayOperator = (e) => {

        let num = parseInt(displayProject.charAt(displayProject.length - 1))

        if (e.target.innerText === "<" && displayProject !== "project1") {
            let decrement = num - 1
            let updateDecrement = displayProject.slice(0,-1) + decrement

            setDisplayProject(updateDecrement)
        } 
        else if (e.target.innerText === ">" && displayProject !== "project2") {
            let increment = num + 1
            let updateIncrement = displayProject.slice(0,-1) + increment

            setDisplayProject(updateIncrement)
        }
    }

    return(
        <div className="project-content">
            <div className="project-title">
                <h1 key={displayProject} className="project-title-bub">
                    {text[displayProject].title}
                </h1>
            </div>
            <span className="project-content-text-container">
                <p className="project-content-text-message-1">
                    {text[displayProject].body1}
                </p>
                <p className="project-content-text-message-2">
                    {text[displayProject].body2}<br/>
                    <br/>
                    {text[displayProject].link}
                </p>
            </span>
            <div className="pagination">
                <p className="pagination-arrow" onClick={handleDisplayOperator}>{'<'}</p>
                <p style={displayProject === 'project1' ? {color: 'white'} : {}} className='project1' onClick={handleDisplayProject}>•</p>
                <p style={displayProject === 'project2' ? {color: 'white'} : {}}className="project2" onClick={handleDisplayProject}>•</p>
                <p className="pagination-arrow" onClick={handleDisplayOperator}>{'>'}</p>
            </div>
        </div>
    )
}

export default Projects