import React from 'react';
import {Container} from 'react-bootstrap'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub, faLinkedin, faInstagram} from "@fortawesome/free-brands-svg-icons";
// import {Fade} from 'react-reveal'

// Styles
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/landing.css'

import tjr from '../assets/about/tjr.jpg'

function Landing(){
    return(
        <div id='landing' className='landing-page'>
            <Container className='landing-container'>
                <div className='bio'>
                    <img className='landing-pic' alt='profile pic' src={tjr}></img>
                    <h1>Hi, I'm Thomas Rossetti</h1>
                    <b>| Computer Scientist | Full Stack Developer | Software Systems Specialist |</b>
                </div>
                <div className='links'>
                    <a href='https://github.com/tjrosset' target="_blank" rel="noreferrer" className='contacts'><FontAwesomeIcon icon={faGithub} size='2x'></FontAwesomeIcon></a>
                    <a href='https://www.linkedin.com/in/thomas-rossetti-53526a200/' target="_blank" rel="noreferrer" className='contacts'><FontAwesomeIcon icon={faLinkedin} size='2x'></FontAwesomeIcon></a>
                    <a href='https://www.instagram.com/rossetti505/' target="_blank" rel="noreferrer" className='contacts'><FontAwesomeIcon icon={faInstagram} size='2x'></FontAwesomeIcon></a>
                </div>
            </Container>
        </div>
        
    );
};

export default Landing;