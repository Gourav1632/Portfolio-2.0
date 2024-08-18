import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './toggleButton.scss';

function ToggleButton({ opened, setOpen }) {
  return (
    <motion.button
      className='toggle-button'
      onClick={() => setOpen((prev) => !prev)}
      style={opened ? { backgroundColor: '#d90429' } : { backgroundColor: '#0d1321' }}
      whileHover= "hover"
    >
        <motion.div animate={opened?"open" : "closed"} className="hamburger-icon">
            <motion.span 
                style={{
                    x:"-50%",
                    top:'46%',
                }}
                variants={{
                    open:{
                        x: "-50%",
                        top:"50%",
                        rotate: "-45deg"
                    },
                    closed:{

                    }
                }}

            ></motion.span>
            <motion.span
                style={{
                    x:"-50%",
                    top:'54%',

                }} 
                variants={{
                    open:{
                        x: "-50%",
                        top:"50%",
                        rotate: "45deg"
                    },
                    closed:{

                    }
                }} 
            ></motion.span>
        </motion.div>
      <motion.div
        className='toggle-button-overlay'
        initial={{ y: '100%' }}
        variants ={{hover: { y: '0%' }}}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
      >
      </motion.div>
    </motion.button>
  );
}

export default ToggleButton;
