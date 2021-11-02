import React from 'react';
import {Fade} from 'react-reveal'
import './App.css';

import Header from './Components/header'
import Landing from './Components/landing'
import About from './Components/about'
import Skills from './Components/skills'
import Footer from './Components/footer'

function App() {
  return (
    <Fade>
    <div className="App">
      <Header/>
      <Landing/>
      <About/>
      <Skills/>
      <Footer/>
    </div>
    </Fade>
  );
}

export default App;
