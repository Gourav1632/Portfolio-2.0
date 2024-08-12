import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import "./projectCard.scss"
import {motion} from "framer-motion"
function ProjectCard({title,description,tech,github,link,setImg,img}) {
  return (
    <div  className='project-card'>
        <div  className="project">
            <motion.div whileHover={{opacity:0.7,x:"-10px"}} onMouseEnter={()=>{setImg({src: img, alt:title, opacity:1})}} onMouseLeave={()=>{setImg({src:img,alt:title,opacity:0})}} className="project-details">
                <div className="title">{title}</div>
                <div className="description">{description}</div>
                <div className="tech">{tech}</div>
            </motion.div>
            <div className="project-links">
                <motion.div whileHover={{scale:1.2}}><a  target='_blank' href={github}><GitHubIcon fontSize='large'/></a></motion.div>
                <motion.div whileHover={{scale:1.2}}><a target='_blank' href={link}><ArrowOutwardIcon fontSize='large'/></a></motion.div>
            </div>
        </div>
      <hr />
    </div>
  )
}

export default ProjectCard
