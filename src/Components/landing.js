import React from 'react';
import {Container} from 'react-bootstrap'
// import {Fade} from 'react-reveal'

// Styles
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/landing.css'
import '../styles/header.css'


function Landing(){
    return(
        <div id='landing' className='landing-page'>
            <Container className='landing-container'>
                <div className='bio'>
                    <h1>Hi, I'm Thomas Rossetti</h1>
                    <b>| Full Stack Developer |</b>
                </div>
            </Container>
        </div>
        
    );
};

export default Landing;