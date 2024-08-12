import React from 'react';
import "./education.scss";
import {motion} from "framer-motion"

function Education() {
  return (
    <section id='education' className='education'>
        <div className='education-heading'>Education</div>
        <div className="education-container">
            <div className="education-card">
                <motion.div 
                    initial={{opacity:0,y:"50px"}} 
                    whileInView={{ opacity: 1, y: 0 }} 
                    transition={{duration:.3}} 
                    viewport={{ once: true }} 
                    className="logo"
                >
                  <img src="/kota.png" alt="iiitkota" />
                </motion.div>
                <div className="education-details">
                    <motion.div
                      initial={{opacity:0,y:"50px"}} 
                      whileInView={{ opacity: 1, y: 0 }} 
                      transition={{duration:.3}} 
                      viewport={{ once: true }} 
                      className="organisation"
                    >
                      Indian Institue Of Information Technology Kota
                    </motion.div>
                    <motion.div 
                      initial={{opacity:0,y:"50px"}} 
                      whileInView={{ opacity: 1, y: 0 }} 
                      transition={{duration:.3}} 
                      viewport={{ once: true }} 
                      className="degree"
                    >
                      Bachelor Of Technology
                      </motion.div>
                    <motion.div 
                      initial={{opacity:0,y:"50px"}} 
                      whileInView={{ opacity: 1, y: 0 }} 
                      transition={{duration:.3}} 
                      viewport={{ once: true }} 
                      className="branch"
                    >
                      Computer Science & Engineering
                    </motion.div>
                    <motion.div 
                      initial={{opacity:0,y:"50px"}} 
                      whileInView={{ opacity: 1, y: 0 }} 
                      transition={{duration:.3}} 
                      viewport={{ once: true }} 
                      className="year"
                    >
                      2023-27
                    </motion.div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Education
