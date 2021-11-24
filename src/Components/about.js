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
                        Hi, I am a well rounded developer who is a recent graduate from the University at Buffalo with a Bachelors of Science in Computer
                        Science and am looking forward to working alongside others to build applications that are both visually appealing and user friendly. 
                        I have experience working with a plethora of different frameworks such as Flask, React, Django, NetJS, Bootstrap, and more.
                        Also, I am familiar with databases. For example, I have worked with SQL, MongoDB, Firestore, and Solr.
                        
                    </p>
                </div>
                
                <div className='about-horizontal-container'>
                    <div style={{borderRight: '1px solid #333333'}} className='education-container'>
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
                    <div style={{borderLeft: '1px solid #333333'}} className='education-container'>
                        <h2 style={{textDecoration:'underline'}}>Education</h2>
                        <b>University at Buffalo</b>
                        <p>Bachelors of Science, Computer Science - 2021</p>
                    </div>
                </div>
                <button className='resume-button' onClick={openResume}>View Resume</button>
            </Container>
        </div>
    );
};

export default Filler;