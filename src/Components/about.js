import React from 'react';
import {Container} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/about.css'


function Filler(){
    return(
        <div id='about' className='about-container'>
            <div className='dividerw'></div>
            <Container>
                <br></br>
                <h2>About</h2>
            </Container>
        </div>
    );
};

export default Filler;