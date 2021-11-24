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
import mpc from '../assets/mpc/logo.png'
import mph from '../assets/mpc/mpc-home.JPG'
import wgm from '../assets/wingman/wingmanl.png'
import wgh from '../assets/wingman/wing.JPG'
import hoo from '../assets/hyb/hyb.png'
import hsr from '../assets/hyb/hoo-results.JPG'
import tjr from '../assets/personal/tjr-web.JPG'
import tjw from '../assets/personal/pweb.JPG'


function Skills(){
    //Boolean values used to determine if/which modal is open
    const [modal1, set1] = React.useState(false);
    const [modal2, set2] = React.useState(false);
    const [modal3, set3] = React.useState(false);
    const [modal4, set4] = React.useState(false);
    const [modal5, set5] = React.useState(false);

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
    function open5() {
        set5(true);
    }
    function close5() {
        set5(false);
    }

    return(
        <div name='skills' className='skills-page'>
            <Container className='skills-container'>
                <br></br>
                <div className='progress-bars'>
                    <h2 style={{textDecoration:'underline'}}>Skills</h2>
                    <label>Python (Flask)</label>
                    <div style={{height:'50px', background:'linear-gradient(90deg, #C3A75D 87%, #FFFFFF 20%)', border:'2px solid black', width:"100%"}}></div>
                    <label>HTML</label>
                    <div style={{height:'50px', background:'linear-gradient(90deg, #5F965B 90%, #FFFFFF 10%)', border:'2px solid black', width:"100%"}}></div>
                    <label>CSS</label>
                    <div style={{height:'50px', background:'linear-gradient(90deg, #5B6B96 90%, #FFFFFF 10%)', border:'2px solid black', width:"100%"}}></div>
                    <label>JavaScript (React, React Native, Nodejs)</label>
                    <div style={{height:'50px', background:'linear-gradient(90deg, #965B5B 78%, #FFFFFF 22%)', border:'2px solid black', width:"100%"}}></div>
                    <label>PHP</label>
                    <div style={{height:'50px', background:'linear-gradient(90deg, #5B9690 68%, #FFFFFF 32%)', border:'2px solid black', width:"100%"}}></div>
                    <label>Docker</label>
                    <div style={{height:'50px', background:'linear-gradient(90deg, #935B96 60%, #FFFFFF 40%)', border:'2px solid black', width:"100%"}}></div>
                </div>

                <h2 name='projects' style={{textDecoration:'underline', marginTop:'50px'}}>Projects</h2>
                <div className='projects-container'>
                    
                    {/* Topix */}
                    <div>
                        <div title='Topix' className='project-pic-wrapper' onClick={open1}>
                            <img className='project-logos' alt='project, Topix' src={tpx}></img>
                        </div>
                        <Modal isOpen={modal1}  onRequestClose={close1} className='modals'>
                            <div className='project-titlebar'>
                                <h5>Topix - Post Sharing Social Media Application</h5>
                                <FontAwesomeIcon onClick={close1} className='exiticon' icon={faTimes} size='1x'></FontAwesomeIcon>
                            </div>
                            <div className='project-content'>
                                <img alt='topix login' src={tsu} className='project-example'></img>
                                {/* <img src={thp} style={{height:'100%'}}></img> */}
                                <p>Topix is an academic social platform designed with both style and funciton in mind. The project was initially fleshed out on Figma and brought to life using react.
                                    The application allowed authenticated users to share posts and messages with other users on the site. 
                                    Every post contains a topix tag that allows users to filter out their custom feed based on what they want to see.
                                </p>
                                <p>Tools used: React, HTML, CSS, MySQL, FontAwesome, Bootstrap, Git, Figma</p>
                            </div>
                        </Modal>
                    </div>

                    {/* Wingman */}
                    <div>
                        <div title='Wingman' className='project-pic-wrapper' onClick={open2}>
                            <img className='project-logos' alt='project, Wingman' src={wgm}></img>
                        </div>
                        <Modal isOpen={modal2}  onRequestClose={close2} className='modals'>
                            <div className='project-titlebar'>
                                <h5>Wingman - Dating Application Driven by Others</h5>
                                <FontAwesomeIcon onClick={close2} className='exiticon' icon={faTimes} size='1x'></FontAwesomeIcon>
                            </div>
                            <div className='project-content'>
                                <img alt='wingman homepage' src={wgh} className='project-example'></img>
                                <p>Wingman's purpose was to put a new spin on traditional dating applications. Users would not find be able to find matches themselves, but would rely on their friends to set them up.
                                    This could be done by adding two users into an anonymous group chat where they would be given an opportunity to spark up a conversation using our custom ice breakers.
                                    Each user has a viewable customizable profile that allows users to express themselves to others.
                                </p>
                                <p>Tools used: PHP, HTML, CSS, MySQL, FontAwesome, Git, Figma</p>
                            </div>
                        </Modal>
                    </div>

                    {/* Marco Polo */}
                    <div>
                        <div title='MarcoPoloClub' className='project-pic-wrapper' onClick={open3}>
                            <img className='project-logos' alt='project, Marco Polo club' src={mpc} style={{backgroundColor:'#202020', borderRadius:'25px'}}></img>
                        </div>
                        <Modal isOpen={modal3}  onRequestClose={close3} className='modals'>
                            <div className='project-titlebar'>
                                <h5>Marco Polo Club - Local Club Website</h5>
                                <FontAwesomeIcon onClick={close3} className='exiticon' icon={faTimes} size='1x'></FontAwesomeIcon>
                            </div>
                            <div className='project-content'>
                                <img alt='marco polo home' src={mph} className='project-example'></img>
                                <p>This application was built for a local club who wanted a website to display services, their history, and upcoming events to both members and newcomers.
                                    The site was designed alongside the members and built out to their specifications.
                                    It also contains a developer console that can be accessed by admins for easy updates.
                                </p>
                                <p>Tools used: Figma, React, HTML, CSS, Firebase, Firestore, Bootstrap, FontAwesome</p>
                            </div>
                        </Modal>
                    </div>

                    {/* Hybrid */}
                    <div>
                        <div title='Hybrid' className='project-pic-wrapper' onClick={open4}>
                            <img className='project-logos' alt='project, Hybrid' src={hoo}></img>
                        </div>
                        <Modal isOpen={modal4}  onRequestClose={close4} className='modals'>
                            <div className='project-titlebar'>
                                <h5>Hybrid - Reception of Covid-19 Analysis</h5>
                                <FontAwesomeIcon onClick={close4} className='exiticon' icon={faTimes} size='1x'></FontAwesomeIcon>
                            </div>
                            <div className='project-content'>
                                <img alt='hybrid search results' src={hsr} className='project-example'></img>
                                <p>The purpose of this project was to evaluate the reception of covid-19 in three different countries based off of twitter data.
                                    The tweets were gathered from citizens and POIs from Italy, India, and the United States using the Twitter API and various custom search queries.
                                    The tweets were then indexed using Solr which was setup on a Amazon Web Services EC2 instance. 
                                    The webpage servers as a user interface that allows the user to easily consume the information gathered. 
                                </p>
                                <p>Tools used: Flask, Bootstrap, Solr, AWS, GoogleNews API, Twitter API, FontAwesome</p>
                            </div>
                        </Modal>
                    </div>

                    {/* TJR-WEBSITE */}
                    <div>
                        <div title='TJR Web' className='project-pic-wrapper' onClick={open5}>
                            <img className='project-logos' alt='project, TJR' src={tjw}></img>
                        </div>
                        <Modal isOpen={modal5}  onRequestClose={close5} className='modals'>
                            <div className='project-titlebar'>
                                <h5>TJR Web - Personal Website</h5>
                                <FontAwesomeIcon onClick={close5} className='exiticon' icon={faTimes} size='1x'></FontAwesomeIcon>
                            </div>
                            <div className='project-content'>
                                <img alt='hybrid search results' src={tjr} className='project-example'></img>
                                <p>The purpose of this project was to develop a personal website to express myself and my work.
                                    The site displays information such as my previous work experience, my level of education, skills, and some of my favorite pieces of work.
                                    It also makes it easy for users to contact me through email or my other social medias.
                                </p>
                                <p>Tools used: React, Firebase, FontAwesome</p>
                            </div>
                        </Modal>
                    </div>

                </div>
            </Container>
        </div>
    );
};

export default Skills;