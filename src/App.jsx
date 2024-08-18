import React, { useEffect, useState } from 'react';
import "./app.scss";
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Skills from './pages/Skills/Skills';
import Projects from './pages/Projects/Projects';
import Education from './pages/Education/Education';
import Contact from './pages/Contact/Contact';
import HamburgerMenu from './components/HamburgerMenu/HamburgerMenu';
import Cursor from './components/cursor/Cursor';
import Loader from './components/Loader/Loader';

function App() {
  const [loading,setLoading] = useState(true)
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); 
    }, 3000);

    return () => clearTimeout(timer); 
  }, []);
  return (
      <>
      {loading ?
      (
        <Loader/>
      ): 
      (
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
      </>
  )
}

export default App
