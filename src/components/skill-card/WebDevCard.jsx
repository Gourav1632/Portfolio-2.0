import React from 'react';
import "./webDevCard.scss";
import {motion,motionValue, useMotionValue, useSpring,useTransform} from "framer-motion"


function WebDevCard({frontEnd, backEnd}) {
      const x = useMotionValue(0);
      const y = useMotionValue(0)
      const mouseXSpring = useSpring(x);
      const mouseYSpring = useSpring(y);
      const rotateX = useTransform(mouseYSpring, [-0.5,0.5], ["10deg", "-10deg"])
      const rotateY = useTransform(mouseXSpring, [-0.5,0.5], ["-10deg", "10deg"])
    
    const frontEndIcon = frontEnd.map((icon,index)=>
        <img key={index} src={icon.path} alt={icon.name} />
    );
    const backEndIcon = backEnd.map((icon,index)=>
        <img key={index} src={icon.path} alt={icon.name} />
    );
    const handleMouseMove = (e)=>{
      const rect = e.target.getBoundingClientRect();
      const width = rect.width;
      const height = rect.height;
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;
      const xPercent = mouseX/width - 0.5;
      const yPercent = mouseY/width - 0.5;
      x.set(xPercent)
      y.set(yPercent)
    }
    const handleMouseLeave = (e)=>{
      x.set(0)
      y.set(0)
    }
  return (
    <motion.div style={{rotateX,rotateY}} className='web-card' onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
      <h3>Web Development</h3>
      <div className='front-end'>
        <h4>Front End</h4>
        <div className='icons'>{frontEndIcon}</div>
      </div>
      <div className='back-end'>
        <h4>Back End</h4>
        <div className='icons'>{backEndIcon}</div>
      </div>
    </motion.div>
  )
}

export default WebDevCard
