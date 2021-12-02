import React from 'react';
import {Container} from 'react-bootstrap'

//Styles
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/about.css'

//Images
import tjr from '../assets/about/ll.jpg'
import pdf from '../assets/tjr-resume.pdf'

function Filler(){

    const openResume = e => {
        window.open(pdf);
    }

    return(
        <div id='about' className='about-container'>
            <div className='dividerw'></div>
            <Container>
                <br></br>
                <h2 style={{textDecoration:'underline'}}>About</h2>
                <div className='profile-container'>
                    <img className='profilepic' alt='profile pic' src={tjr}></img>
                    <p style={{fontSize:'20px', textAlign:'justify', padding:'5px'}}>
                        Hi, I am a well rounded developer and a recent graduate from the University at Buffalo with a Bachelors of Science in Computer
                        Science. During my education, I have developed a passion for web development and am looking forward to turning this passion into a career! 
                        My goal is to work alongside others to build applications that are both visually appealing and user friendly. 
                        During my studies I have had the pleasure to experience working with a plethora of different frameworks such as Flask, React, Django, and Node.js.
                        Databases are no stranger to me either, during my studies I have become familiar with popular databases such as SQL, MongoDB, Solr, Firestore, and more!
                    </p>
                </div>
                
                <div className='about-horizontal-container'>
                    <div style={{borderRight: '1px solid #202020'}} className='education-container'>
                        <h2 style={{textDecoration:'underline'}}>Experience</h2>
                        <b>Silver Bay YMCA - Conference Services</b>
                        <p>• Worked alongside guests to ensure meetings spaces were held up to
                            standards
                            <br />
                            • Provided troubleshooting assistance with campus technology (laptops,
                            projectors, etc)
                        </p>

                        <b>Weber Knapp - Floor Worker</b>
                        <p>• Racked and unracked manufactured parts on and off of a powdercoat line</p>

                        <b>Marco Polo Club Inc - Web Developer</b>
                        <p>• worked alongside clients to design their website
                            <br />
                            • Developed an easy to use developer console
                            <br />
                            • Built pages out to client specifications
                        </p>
                    </div>
                    <div style={{borderLeft: '1px solid #202020'}} className='education-container'>
                        <h2 style={{textDecoration:'underline'}}>Education</h2>
                        <b>University at Buffalo</b>
                        <p>Bachelors of Science, Computer Science - 2021</p>
                        <h2 style={{textDecoration:'underline'}}>Highlighted Coursework</h2>
                        <p>Applied Human Computer Interaction (CSE 370)</p>
                        <p>Software Engineering (CSE 442)</p>
                        <p>Web Applications (CSE 312)</p>
                        <p>Algorithms and Complexity (CSE 331)</p>
                        <p>Algorithms Analysis and Design (CSE 431)</p>
                        <p>Intro to Pattern Recognition (CSE 455)</p>
                    </div>
                </div>
                <button className='resume-button' onClick={openResume}>View Resume</button>
            </Container>
        </div>
    );
};

export default Filler;