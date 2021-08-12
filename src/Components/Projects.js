import React from 'react'
import project1 from '../Images/project1.png';
import project2 from '../Images/project2.png';
import project3 from '../Images/project3.png';
import project4 from '../Images/project4.png';

export const Projects = () => {
    return (
        <div id="projects" className="project-box">
            <div className="container text-center mt-3">
                <div className="project-container">
                    <div className="project-item1">
                        <h1>Projects</h1>
                        <h3>A small collection of my projects.</h3>
                    </div>
                    <div className="project-item">
                        <a href="https://web-cov.herokuapp.com/home" rel="noreferrer" target="_blank" >
                            <img src={project1} alt="project1"></img>
                        </a>
                    </div>
                    <div className="project-item">
                        <a href="https://shreeramengineers.azurewebsites.net/" rel="noreferrer" target="_blank">
                            <img src={project2} alt="project"></img>
                        </a>
                    </div>
                    <div className="project-item">
                        <a href="https://mytaskss.herokuapp.com/" rel="noreferrer" target="_blank" >
                            <img src={project3} alt="project"></img>
                        </a>
                    </div>
                    <div className="project-item">
                        <a href="https://github.com/AryanPatel182/SapceInvedor">
                            <img src={project4} alt="project"></img>
                        </a>
                    </div>                
                </div>
            </div>
        </div>
    )
}
