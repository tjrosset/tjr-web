import React from 'react';
import {Container} from 'react-bootstrap'

//Styles
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/about.css'

//Images
import tjr from '../assets/tjr.jpg'
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
                    <img className='profilepic' alt='profile picture' src={tjr}></img>
                    <p style={{fontSize:'22px', textAlign:'justify', padding:'5px'}}>
                        I am a well rounded, recent graduate from University at Buffalo with a Bachelors in Science in Computer
                        Science. I am looking forward to work alongside others to design and build user friendly
                        and visually appealing applications. I have experience working with a plethora of different frameworks such as Flask, React, Django, NetJS, Bootstrap, and more. 
                        I also am familiar with databases like SQL, MongoDB, Firestore, and Solr.
                    </p>
                </div>
                <div className='about-horizontal-container'>
                <div className='education-container'>
                        <h2 style={{textDecoration:'underline'}}>Experience</h2>
                        <b>Silver Bay YMCA - Conference Services</b>
                        <p>• Worked alongside guests to ensure meetings spaces were held up to
                            standards
                            • Provided troubleshooting assistance with campus technology (laptops,
                            projectors, etc)
                        </p>
                        <b>Weber Knapp - Floor Worker</b>
                        <p>• Racked and unracked manufactured parts on a powdercoat line</p>
                        <b>Marco Polo Club Inc - Web Developer</b>
                        <p>• worked alongside clients to achieve their vision for their website
                            • Developed an easy to use developer console 
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