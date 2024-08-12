import React, { useRef } from 'react';
import "./about.scss";
import BuddhaCanvas from '../../components/Buddha/Buddha';
import { motion, useScroll, useTransform } from "framer-motion";

function About() {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  const x1 = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const x2 = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);

  return (
    <section  id='about' className='about'>
      <div className="text">
        <motion.div 
            initial={{opacity:0,x:"-30px"}} 
            whileInView={{ opacity: 1, x: 0 }} 
            transition={{duration:.5}} 
            viewport={{ once: true }} 
            className="big"
        >
          Having a strong curiosity for new technologies drives me to explore and innovate, constantly learning about the latest advancements.
        </motion.div>
        <motion.div 
            initial={{opacity:0,x:"30px"}} 
            whileInView={{ opacity: 1, x: 0 }} 
            transition={{duration:.3}} 
            viewport={{ once: true }} 
            className="small"
        >
          <div className="small-text">I also love to read books, watch web series, draw and sketch.</div>
          <div className="projects-link"><a href="#projects">View projects</a></div>
        </motion.div>
      </div>

      <div ref={ref} className="quote">
        <motion.span style={{ x:x1 }} className='upper-text'>Every morning </motion.span>
        <div className='canvas'>
          <BuddhaCanvas />
        </div>
        <motion.span style={{x:x2}} className='lower-text'>we are born again</motion.span>
      </div>
    </section>
  );
}

export default About;
