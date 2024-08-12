import React, { useEffect, useState } from 'react';
import "./cursor.scss";
import { motion, useMotionValue, useSpring } from "framer-motion";

function Cursor() {
  const [isHovering, setIsHovering] = useState(false);
  // Using motion values for smooth animation
  const [position, setPosition] = useState({x:0,y:0})
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 150, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 150, damping: 20 });

  useEffect(() => {
    const mouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      setPosition({x:e.clientX,y:e.clientY})
    };

    const handleMouseEnter = (e) => {
      if (e.target.tagName === 'BUTTON' || e.target.tagName === 'A') {
        setIsHovering(true);
      }
    };

    const handleMouseLeave = (e) => {
      if (e.target.tagName === 'BUTTON' || e.target.tagName === 'A') {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", mouseMove);
    document.addEventListener("mouseover", handleMouseEnter);
    document.addEventListener("mouseout", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
      document.removeEventListener("mouseover", handleMouseEnter);
      document.removeEventListener("mouseout", handleMouseLeave);
    };
  }, [mouseX, mouseY]);

  return (
    <>
    <motion.div
      style={{
        left: springX, 
        top: springY,        
        width: isHovering ? '4rem' : '3rem',
        height: isHovering ? '4rem' : '3rem',
        transition: 'width 0.2s ease, height 0.2s ease'
      }}
      className='cursor'
    >
      
    </motion.div>
    <div style={{left:position.x + "px", top:position.y + "px"}} className='dot'></div>
    </>
  );
}

export default Cursor;
