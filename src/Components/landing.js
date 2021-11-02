import React from 'react';
import {Container} from 'react-bootstrap'
// import {Fade} from 'react-reveal'

// Styles
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/landing.css'
import '../styles/header.css'

// images
import pic from '../assets/tjr.jpg'

function Landing(){
    return(
        <div id='landing' className='landing-page'>
            <Container className='landing-container'>
                <div className='bio'>
                    <h2>Hi, I'm Thomas Rossetti</h2>
                    <b>Filler | Filler | Filler</b>
                </div>
            </Container>
        </div>
        
    );
};

export default Landing;