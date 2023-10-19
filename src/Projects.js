import React from 'react';
import { useState } from 'react'
import './css/Projects.css'

function Projects() {

    const [displayProject, setDisplayProject] = useState("project1")

    const text = {
        project1:{
            title:"Bub the Bandit",
            body1:
            "Bub The Bandit is Lorem ipsum dolor sit amet, consectetur adipiscing elit,\
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In est ante in nibh mauris.\
            In nulla posuere sollicitudin aliquam ultrices sagittis orci a scelerisque.\
            Malesuada bibendum arcu vitae elementum curabitur vitae nunc sed velit.",
            body2:
            "Adipiscing vitae proin sagittis nisl rhoncus.\
            Id porta nibh venenatis cras sed felis. Suspendisse interdum consectetur libero id faucibus nisl tincidunt.\
            Interdum consectetur libero id faucibus nisl tincidunt eget nullam."
        },
        project2:{
            title:"Inanimate Quiz",
            body1:
            "Inanimate is a Lorem ipsum dolor sit amet, consectetur adipiscing elit,\
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In est ante in nibh mauris.\
            In nulla posuere sollicitudin aliquam ultrices sagittis orci a scelerisque.\
            Malesuada bibendum arcu vitae elementum curabitur vitae nunc sed velit.",
            body2:
            "Adipiscing vitae proin sagittis nisl rhoncus.\
            Id porta nibh venenatis cras sed felis. Suspendisse interdum consectetur libero id faucibus nisl tincidunt.\
            Interdum consectetur libero id faucibus nisl tincidunt eget nullam."
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
                    {text[displayProject].body2}
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