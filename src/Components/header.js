import React,  {useState , useEffect} from 'react';
import {Container} from 'react-bootstrap'
import {Link} from 'react-scroll'

// Styles
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/header.css'


function Header(){

    const [scrolled, setScrolled] = useState('header-component');
    const [offSet, setoffSet] = useState(-45);

    const scrollListener = e => {
        if (window.scrollY > (window.innerHeight-100)) {
            setScrolled('header-component-scroll');
            setoffSet(-45)
        } else {
            setScrolled('header-component')
            setoffSet(0)
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", scrollListener);
    
        return () => window.removeEventListener("scroll", scrollListener);
      }, []);

    return(
        <div className={scrolled}>
            <Container className='header-container'>
                <Link activeClass="active" className='scroll_links' to="landing" offset={-45} delay={0} spy={true} smooth={true} duration={500}>Home</Link>
                <Link className='scroll_links' to="about" offset={offSet} delay={0} spy={true} smooth={true} duration={500}>About</Link>
                <Link className='scroll_links' to="skills" offset={offSet} delay={0} spy={true} smooth={true} duration={500}>Skills</Link>
                <Link className='scroll_links' to="skills" offset={offSet} delay={0} spy={true} smooth={true} duration={500}>Projects</Link>
                <Link className='scroll_links' to="contact" offset={45} delay={0} spy={true} smooth={true} duration={500}>Contacts</Link>
            </Container>
        </div>
    );
};

export default Header;