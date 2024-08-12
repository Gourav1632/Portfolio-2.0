import React, { useRef, useState } from 'react';
import "./projects.scss";
import ProjectCard from '../../components/project-card/ProjectCard';
import projects from '../../json/projects/projects';
import {motion,spring,useSpring} from "framer-motion"
import ProjectCarousel from '../../components/ProjectCarousel/ProjectCarousel';

const isMobile = () => {
  return window.innerWidth <= 1024;
};


function Projects() {
  const [img,setImg] = useState({
    src:"",
    alt:"",
    opacity: 0,
  })
  const spring ={
    stiffness:150,
    damping:15,
    mass:0.1,
  }
  const imgPos = {
    x: useSpring(0,spring),
    y: useSpring(0,spring)
  }
  const handleMove = (e)=>{
      const {clientX, clientY} = e;
      imgPos.x.set(clientX - 350)
      imgPos.y.set(clientY - 200)

  }
  return (
    <section  id='projects' className='projects'>
        <motion.img 
            src={img.src}
            alt={img.alt}
            className='hover-img'
            style={{
              x:imgPos.x,
              y:imgPos.y,
              opacity:img.opacity,
              display: isMobile()? "none" : "block"
            }}
        />
        <div className='projects-heading'>  
            <span>PROJECTS</span>
            <hr />
        </div>
        {
          isMobile()?(
            <div className='projects-carousel'>
              <ProjectCarousel projects={projects} />
            </div>
          )
          :(
            <div onMouseMove={handleMove} className="projects-container">
              {
                projects.map((project,index)=>(
                  <ProjectCard setImg={setImg} img={project.img} key={index} title={project.title} description={project.description} tech={project.tech} github={project.github} link={project.link}/>
                ))
              }
            </div>
          )
        }

    </section>
  )
}

export default Projects
