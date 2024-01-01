import React from 'react'
import resume from '../Images/resume.pdf';

export const Contact = () => {
    return (
        <div id="contact" className="contact bgcolor">
            <div className="container text-center mt-3">
                <div className="text-center intro-title">
                    <h3>Get in Touch</h3>
                    <hr/>
                </div>

                <div className="contact-grid text-center">
                    <div className="contact-item">
                        <a href="https://www.linkedin.com/in/aryan-patel-02ab95214/" rel="noreferrer" target="_blank"><i className="fab fa-linkedin"></i></a>
                    </div>
                    <div className="contact-item">
                        <a href="https://twitter.com/AryanPa09191003?s=09" target="_blank" rel="noreferrer"><i className="fab fa-twitter"></i></a>
                    </div>                                                          
                    <div className="contact-item">
                        <a href="https://www.instagram.com/aryann_182/" target="_blank" rel="noreferrer"><i className="fab fa-instagram" ></i></a>
                    </div>                    
                    <div className="contact-item">
                        <a href="https://www.youtube.com/channel/UCVOXD948RoxYpcHPBddXw3A" rel="noreferrer" target="_blank"><i className="fab fa-youtube"></i></a>
                    </div>                    
                    <div className="contact-item">
                        <a href="https://github.com/AryanPatel182" rel="noreferrer" target="_blank"><i className="fab fa-github" ></i></a>
                    </div>                    
                </div>

                <div className="handouts container text-center">                
                    <div className="handouts-item">
                        <p>Resume</p>
                        <a href={resume} rel="noreferrer" download="resume"><i>Download</i></a>
                    </div>
                    <div className="handouts-item">
                        <p>Email</p>
                        <a href="mailto: asp6304@gmail.com" rel="noreferrer"><i>asp6304@gmail.com</i></a>
                    </div>                    
                </div>
            </div>
        </div>
    )
}
