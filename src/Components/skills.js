import React from 'react';
import {Container} from 'react-bootstrap'
import Modal from 'react-modal'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faTimes } from '@fortawesome/free-solid-svg-icons';

//Styles
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/skills.css'

//Images
import tpx from '../assets/topix/logo-300 mono.png'
import tsu from '../assets/topix/topix-signup.JPG'
import thp from '../assets/topix/topix-home.JPG'
import mpc from '../assets/mpc/logo.png'
import wgm from '../assets/wingman/wingmanl.png'
import hoo from '../assets/hyb/hyb.png'
import hsr from '../assets/hyb/hoo-results.JPG'


function Skills(){
    //Boolean values used to determine if/which modal is open
    const [modal1, set1] = React.useState(false);
    const [modal2, set2] = React.useState(false);
    const [modal3, set3] = React.useState(false);
    const [modal4, set4] = React.useState(false);

    //Functions for the expandable modals
    function open1() {
      set1(true);
    }
    function close1() {
      set1(false);
    }
    function open2() {
        set2(true);
    }
    function close2() {
        set2(false);
    }
    function open3() {
        set3(true);
    }
    function close3() {
        set3(false);
    }
    function open4() {
        set4(true);
    }
    function close4() {
        set4(false);
    }

    return(
        <div name='skills' className='skills-page'>
            <Container className='skills-container'>
                <br></br>
                <h2>Skills</h2>
                    <label>Python (Flask)</label>
                    <Container style={{height:'50px', background:'linear-gradient(90deg, #C3A75D 87%, #FFFFFF 20%)', border:'2px solid black'}}></Container>
                    <label>HTML</label>
                    <Container style={{height:'50px', background:'linear-gradient(90deg, #5F965B 90%, #FFFFFF 10%)', border:'2px solid black'}}></Container>
                    <label>CSS</label>
                    <Container style={{height:'50px', background:'linear-gradient(90deg, #5B6B96 90%, #FFFFFF 10%)', border:'2px solid black'}}></Container>
                    <label>JavaScript (React, React Native, Nodejs)</label>
                    <Container style={{height:'50px', background:'linear-gradient(90deg, #965B5B 78%, #FFFFFF 22%)', border:'2px solid black'}}></Container>
                    <label>PHP</label>
                    <Container style={{height:'50px', background:'linear-gradient(90deg, #5B9690 68%, #FFFFFF 32%)', border:'2px solid black'}}></Container>
                    <label>Docker</label>
                    <Container style={{height:'50px', background:'linear-gradient(90deg, #935B96 60%, #FFFFFF 40%)', border:'2px solid black'}}></Container>
                
                <br></br>
                <h2>Projects</h2>
                <div className='projects-container'>
                    {/* Topix */}
                    <div>
                        <div title='Topix' className='project-pic-wrapper' onClick={open1}>
                            <img className='project-logos' alt='project, Topix' src={tpx}></img>
                        </div>
                        <Modal isOpen={modal1}  onRequestClose={close1}>
                            <div className='project-titlebar'>
                                <h5>Topix - Post Sharing Social Media Application</h5>
                                <FontAwesomeIcon onClick={close1} className='exiticon' icon={faTimes} size='1x'></FontAwesomeIcon>
                            </div>
                            <div className='project-content'>
                                <img src={tsu} style={{width:'75%'}}></img>
                                {/* <img src={thp} style={{height:'100%'}}></img> */}
                                <p>Topix was developed using React, MySQL, FontAwesome

                                </p>
                            </div>
                        </Modal>
                    </div>

                    {/* Wingman */}
                    <div>
                        <div title='Wingman' className='project-pic-wrapper' onClick={open2}>
                            <img className='project-logos' alt='project, Wingman' src={wgm}></img>
                        </div>
                        <Modal isOpen={modal2}  onRequestClose={close2}>
                            <div className='project-titlebar'>
                                <h5>Wingman - Dating Application Driven by Others</h5>
                                <FontAwesomeIcon onClick={close2} className='exiticon' icon={faTimes} size='1x'></FontAwesomeIcon>
                            </div>
                            <div className='project-content'>
                                <p>Wingman was developed using PHP and MySQL</p>
                            </div>
                        </Modal>
                    </div>

                    {/* Marco Polo */}
                    <div>
                        <div title='MarcoPoloClub' className='project-pic-wrapper' onClick={open3}>
                            <img className='project-logos' alt='project, Marco Polo club' src={mpc} style={{backgroundColor:'#202020', borderRadius:'25px'}}></img>
                        </div>
                        <Modal isOpen={modal3}  onRequestClose={close3}>
                            <div className='project-titlebar'>
                                <h5>Marco Polo Club - Local Club Website</h5>
                                <FontAwesomeIcon onClick={close3} className='exiticon' icon={faTimes} size='1x'></FontAwesomeIcon>
                            </div>
                            <div className='project-content'>
                                <p>This application was built using React</p>
                            </div>
                        </Modal>
                    </div>

                    {/* Hybrid */}
                    <div>
                        <div title='Hybrid' className='project-pic-wrapper' onClick={open4}>
                            <img className='project-logos' alt='project, Hybrid' src={hoo}></img>
                        </div>
                        <Modal isOpen={modal4}  onRequestClose={close4}>
                            <div className='project-titlebar'>
                                <h5>Hybrid - Reception of Covid-19 Analysis</h5>
                                <FontAwesomeIcon onClick={close4} className='exiticon' icon={faTimes} size='1x'></FontAwesomeIcon>
                            </div>
                            <div className='project-content'>
                                <img src={hsr} style={{width:'75%'}}></img>
                                <p>The purpose of this project was to evaluate the reception of covid-19 in three different contries based off of twitter data.
                                    The tweets were gathered from citizens and POIs from Italy, India, and the United States using the Twitter API and various queries.
                                    The tweets were then indexed using Solr setup on a Amazon Web Services instance. The webpage allows users to consume the information with ease using search
                                    queries and filters. 
                                </p>
                                <p>Tools used: Flask, Bootstrap, Solr, AWS, GoogleNews API, Twitter API, FontAwesome</p>
                            </div>
                        </Modal>
                    </div>
                </div>

            </Container>
        </div>
    );
};

export default Skills;