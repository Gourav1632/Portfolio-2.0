import React from 'react'
import Navbar from '../../components/navbar/Navbar';
import "./home.scss";
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import SouthEastIcon from '@mui/icons-material/SouthEast';
import {motion} from "framer-motion"

function Home() {

  return (
    <section id='home' className='hero'>
        <Navbar className="navbar"/>
        <div className='container'>
            <motion.div initial={{opacity:0,scale:0.9}} animate={{opacity:1,scale:1}} transition={{duration:0.5,delay:0.3}} className="contact-button">
              <a href="#contact"><button>Let's talk</button></a>
            </motion.div>
            <div className="text">
              <motion.span initial={{opacity:0,x:"-50px"}} animate={{opacity:1,x:"0px"}} transition={{duration:0.5}} className="hi">Hi I am</motion.span>
              <motion.span initial={{opacity:0,x:"-50px"}} animate={{opacity:1,x:"0px"}} transition={{duration:0.5,delay:0.1}} className="gourav">Gourav <SouthEastIcon fontSize='large'/></motion.span>
              <div className="kumar-skills">
                <motion.span initial={{opacity:0,x:"-50px"}} animate={{opacity:1,x:"0px"}} transition={{duration:0.5,delay:0.2}} className="kumar">Kumar</motion.span>
                <motion.div initial={{opacity:0,x:"-50px"}} animate={{opacity:1,x:"0px"}} transition={{duration:0.5,delay:0.2}} className="skills">
                  <span>I am a</span>
                  <span>Web developer</span>
                  <span>UI/UX Designer</span>
                  <span>Game Developer</span>

                </motion.div>
              </div>
            </div>
            <div className="links">
              <motion.div initial={{opacity:0,x:"-50px"}} animate={{opacity:1,x:"0px"}} transition={{duration:0.5}} className="social-links">
                  <motion.a  whileHover={{scale:1.01,x:"-10px"}} transition={{ duration: 0.3, ease: "easeOut" }} style={{textDecoration:'none',color:'white'}} href="https://www.linkedin.com/in/gourav-kumar-4230b7286/" target='_blank'><span>LinkedIn <LinkedInIcon/></span></motion.a>
                  <motion.a  whileHover={{scale:1.01,x:"-10px"}} transition={{ duration: 0.3, ease: "easeOut" }} style={{textDecoration:'none',color:'white'}} href="https://www.instagram.com/gourav_kumar946/" target='_blank'><span>Instagram <InstagramIcon/></span></motion.a>
                  <motion.a  whileHover={{scale:1.01,x:"-10px"}} transition={{ duration: 0.3, ease: "easeOut" }} style={{textDecoration:'none',color:'white'}} href="https://github.com/Gourav1632" target='_blank'><span>Github <GitHubIcon/></span></motion.a>

              </motion.div>
            </div>
        </div>
    </section>
  )
}

export default Home;
