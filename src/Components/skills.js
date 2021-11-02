import React from 'react';
import {Container} from 'react-bootstrap'

//Styles
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/skills.css'

//Images
import tpx from '../assets/logo-300 mono.png'
import mpc from '../assets/logo.png'
import wgm from '../assets/wingmanl.png'


function Skills(){
    return(
        <div name='skills' className='skills-page'>
            <Container className='skills-container'>
                <br></br>
                <h2>Skills</h2>
                <br></br>
                <h2>Projects</h2>
                <div className='projects-container'>
                    <div className='project'>
                        <img className='project-logos' alt='project, topix' src={tpx}></img>
                    </div>
                    <div className='project'>
                        <img className='project-logos' alt='project, Wingman' src={wgm}></img>
                    </div>
                    <div className='project'>
                        <img className='project-logos' alt='project, marco polo club' src={mpc} style={{backgroundColor:'#202020', borderRadius:'25px'}}></img>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Skills;