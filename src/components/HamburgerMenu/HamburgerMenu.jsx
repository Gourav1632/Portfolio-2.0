import React, { useState,useRef,useEffect } from 'react'
import "./hamburgerMenu.scss"
import ToggleButton from './ToggleButton/ToggleButton'
import Options from './Options/Options'
import {delay, motion} from "framer-motion"

function HamburgerMenu() {
  const menuRef = useRef(null);
  const [open,setOpen] = useState(false);
const variants = {
  open:{
    clipPath : "circle(200% at 200% 50%)",
    transition :{
      type: "spring",
      stiffness: 30,
    },
  },
  closed:{
    clipPath : "circle(0% at 200% 50%)",
    transition :{
      type:"spring",
      stiffness: 20,
    }
  }
}
useEffect(() => {
  function handleClickOutside(event) {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setOpen(false);
    }
  }

  // Attach the event listener
  document.addEventListener('mousedown', handleClickOutside);
  
  // Cleanup the event listener
  return () => document.removeEventListener('mousedown', handleClickOutside);
}, [menuRef]);
  return (
    <div>
    <motion.div ref={menuRef}  className='menu' initial={false} animate={open? "open" : "closed"}>
      <motion.div  className="button">
        <ToggleButton opened={open} setOpen={setOpen} />
      </motion.div>
      <motion.div className="bg" variants={variants}>
        <Options setOpen={setOpen} opened={open}/>
      </motion.div>
    </motion.div>

    </div>
  )
}

export default HamburgerMenu
