import React from 'react';
// import HeadShot from '../assets/images/headshot.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGitlab, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const About = () => {
    return ( 
        <section className="section bg-light" id="about">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="mt-3">
                            {/* <img src={HeadShot} alt="" className="img-fluid mx-auto d-block img-thumbnail"/> */}
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="mt-3">
                            <h2><span className="font-weight-bold">About</span> Me</h2>
                            <h4 className="mt-4">Hello! <span className="text-custom font-weight-bold">I'm James Tinker.</span></h4>
                            <p className="text-muted mt-4">
                                An experienced and entrepreneurial Web Developer with key accomplishments creating custom websites for early-stage start-ups.
                                Approaching all projects using Agile Methodology ensuring compliance to project timelines, effective communication with stakeholders,
                                while managing product requirements.
                            </p>
                            <p className="text-muted mt-2">
                                Vast experience with Ruby on Rails and the languages associated: HTML, CSS, Javascript, and a working knowledge of PostgreSQL.
                            </p>
                            <p className="text-muted mt-2">
                                Keen in learning new languages and developmental practices; currently learning ReactJS and experimenting with Docker.
                            </p>
                            <div>
                                <ul className="mb-0 about-social list-inline mt-4">
                                    <li className="list-inline-item"><a href="https://www.linkedin.com/in/james-tinker/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedin} /></a></li>
                                    <li className="list-inline-item"><a href="https://gitlab.com/james_tinker" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGitlab} /></a></li>
                                </ul> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
 
export default About;