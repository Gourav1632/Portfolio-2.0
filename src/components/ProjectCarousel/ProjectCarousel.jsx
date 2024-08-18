import React, { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue } from 'framer-motion';
import "./projectCarousel.scss";
import ProjectCard from '../project-card/ProjectCard';
import { useMotion } from '@react-three/drei';


const DRAG_BUFFER = 10;
const AUTO_DELAY = 5000
function ProjectCarousel({ projects }) {
  const intervalRef = useRef(null)
  const [dragging, setDragging] = useState(false)
  const [imgIndex,setImgIndex] = useState(0)

  useEffect(() => {
    startAutoSlide();
    return () => stopAutoSlide(); // Clear interval on component unmount
  }, []);

  const startAutoSlide = () => {
    intervalRef.current = setInterval(() => {
      setImgIndex((prev) => (prev + 1) % projects.length);
    }, AUTO_DELAY);
  };

  const stopAutoSlide = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  const dragX = useMotionValue(0)

  const onDragStart = ()=>{
    setDragging(true)
    stopAutoSlide();
  }
  const onDragEnd = ()=>{
    setDragging(false);
    const x = dragX.get();
    if(x <= -DRAG_BUFFER && imgIndex < projects.length - 1){
      setImgIndex((prev)=> prev + 1)
    }else if(x >= DRAG_BUFFER && imgIndex > 0){
      setImgIndex((prev)=> prev - 1)
    }
    startAutoSlide();
  }
  const projectCards = projects.map((project,index)=>
    <motion.div key={index}  animate={{scale: imgIndex == index ? 1 : 0.9, opacity: imgIndex == index ? 1: 0.7}}  className="project">
      <img src={project.img} alt="" />
      <ProjectCard 
        title={project.title} 
        description={project.description} 
        tech={project.tech} 
        github={project.github} 
        link={project.link}
      />
    </motion.div>
  )

  return (
    <>
    <motion.div className='carousel-container'
      drag='x'
      dragConstraints={{
        left:0,
        right:0
      }}
      animate={{
        translateX: `-${imgIndex * 100}%`,
        
      }}
      transition={{duration:.5}}
      style={{
        x:dragX
      }}
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
    >
      {projectCards}
    </motion.div>
    <div className="dots">
      {projects.map((project,index)=>{
        return <button style={{backgroundColor: (index == imgIndex)? "#ef233c" : "#8d99ae"}} key={index} onClick={()=>{setImgIndex(index)}}/>
      })}
    </div>
    </>
  );
}

export default ProjectCarousel;

