import React from 'react';
import "./app.scss";
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Skills from './pages/Skills/Skills';
import Projects from './pages/Projects/Projects';
import Education from './pages/Education/Education';
import Contact from './pages/Contact/Contact';
import HamburgerMenu from './components/HamburgerMenu/HamburgerMenu';
import Cursor from './components/cursor/Cursor';

function App() {
  return (
      <div>
        
        <Cursor/>
        <HamburgerMenu/>
        <Home />
        <About/>
        <Education/>
        <Skills/>
        <Projects/>
        <Contact/>  
      </div>
  )
}

export default App
