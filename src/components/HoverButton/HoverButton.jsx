import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './hoverButton.scss';

function HoverButton({text}) {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(text)
      .then(() => {
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000);
      })
      .catch((err) => {
        console.error('Failed to copy: ', err);
      });
  };
  return (
    <motion.button
      onClick={handleCopy}
      className='hover-button'
      whileHover= "hover"
    >
    <a >{isCopied?"Copied!" : text}</a>
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
