import React from 'react'
import "./options.scss"
import {delay, motion} from "framer-motion"

function Options({opened,setOpen}) {
  const variants = {
    open:{
      transition:{
        staggerChildren:.1
      }
    },
    closed:{
      transition:{
        staggerChildren:0.05,
        staggerDirection:-1
      }
    }
  }
  const itemVariants = {
    open:{
      x : 0,
      opacity : 1
    },
    closed:{
      x: 100,
      opacity: 0
    }
  }
  const options = ["home", "about","skills","projects","contact"];
  return (
    <motion.div variants={variants}  initial={opened ? "open" : "closed"} animate={opened ? "open" : "closed"} className='options'>
      <motion.div variants={itemVariants} className='title'>NAVIGATION</motion.div>
      <motion.hr variants={itemVariants} />
      {
        options.map((option)=>(
          <motion.a onClick={()=>{setOpen((prev)=>!prev)}} variants={itemVariants} whileHover={{scale:1.1,x: "10px", originX:0}} key={option} href={`#${option}`}>{option}</motion.a>
        ))
      }
    </motion.div>
  )
}

export default Options
