import React from 'react';
import {Container} from 'react-bootstrap'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub, faLinkedin, faTwitter} from "@fortawesome/free-brands-svg-icons";
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
                    <b>| Computer Scientist | Full Stack Developer |</b>
                </div>
                <div className='links'>
                    <FontAwesomeIcon icon={faGithub} size='2x'></FontAwesomeIcon>
                    <FontAwesomeIcon icon={faLinkedin} size='2x'></FontAwesomeIcon>
                    <FontAwesomeIcon icon={faTwitter} size='2x'></FontAwesomeIcon>                
                </div>
            </Container>
        </div>
        
    );
};

export default Landing;