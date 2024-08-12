import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './hoverButton.scss';

function HoverButton({text}) {
  return (
    <motion.button
      className='hover-button'
      whileHover= "hover"
    >
    <a>{text}</a>
      <motion.div
        className='hover-button-overlay'
        initial={{ y: '50%' }}
        variants ={{hover: { y: '-80%' }}}
        transition={{ duration: .5, ease: 'easeInOut' }}
      >
      </motion.div>
    </motion.button>
  );
}

export default HoverButton;
