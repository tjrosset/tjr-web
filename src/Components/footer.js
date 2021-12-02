import React, {Component} from 'react';
import {Container} from 'react-bootstrap'
import {Link} from 'react-scroll'
import {Bounce} from 'react-reveal'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import {faGithub} from "@fortawesome/free-brands-svg-icons";
import { send } from 'emailjs-com';

//styles
import '../styles/footer.css'


class Footer extends Component{

    constructor() {
        super();
        this.state = { 
            toggle: false,
            message: '',
            from_name: '',
        };
    }

    updateInput = e => {
        this.setState({
          [e.target.name]: e.target.value
        });
    };

    send_email = e =>{
        send(process.env.REACT_APP_SERVICEID, process.env.REACT_APP_TEMPLATEID, {from_email: this.state.from_name,message: this.state.message}, process.env.REACT_APP_AUTHID )
        this.setState({
            message: '',
            from_name: '',
        });
    }

    email() {
        this.setState({
            toggle: !this.state.toggle
        });
    }

    render(){
        return(
            <div id='contact' className={'footer-container-'+ (this.state.toggle ? 'open':'closed')}>
                <Container className='cspace'>
                    <div className='information-container'>
                        <li className ='info-item'>Thomas Rossetti</li>
                        <li className ='info-item'>rossettitj@gmail.com</li>
                        <div style={{display:'flex', flexDirection:'row', justifyContent:'space-evenly'}}>
                            {/* <a href='https://github.com/tjrosset' target="_blank" rel="noreferrer"><FontAwesomeIcon className='testicon' icon={faGithub} size='3x'></FontAwesomeIcon></a> */}
                            <Link onClick={this.email.bind(this)}  to="contact" spy={true} smooth={true}><FontAwesomeIcon className='testicon' icon={faEnvelope} size='3x'></FontAwesomeIcon></Link>
                        </div>
                    </div>
                    {this.state.toggle ?
                        <div className='email-container'>
                            <Bounce left>
                            <br></br>
                            <form className='email-form'>
                                <label>Email</label>
                                <input type='email' name='from_name' onChange={this.updateInput} value={this.state.from_name} required></input>
                                <label>Message</label>
                                <textarea rows='5' name='message' maxlength='555' onChange={this.updateInput} value={this.state.message} style={{resize:'none'}}  required></textarea>
                                <button type='button' onClick={this.send_email}>Send</button>
                            </form>
                            </Bounce>
                        </div> : null
                    }
                </Container>
            </div>
        );
    };
};

export default Footer;