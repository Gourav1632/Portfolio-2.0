import React from 'react';
import "./skills.scss";
import SkillCard from '../../components/skill-card/SkillCard';
import WebDevCard from '../../components/skill-card/WebDevCard';
import programmingLanguages from '../../json/icons-path/programmingLanguages';
import tools from '../../json/icons-path/tools';
import gameDevelopment from '../../json/icons-path/gameDevelopment';
import ui from '../../json/icons-path/ui&ux';
import databases from '../../json/icons-path/databases';
import frontEnd from '../../json/icons-path/frontEnd';
import backEnd from '../../json/icons-path/backEnd';
function Skills() {
    let icons = [];
  return (
    <div>
      <section id='skills' className='skills'>
        <div className='skills-heading'>I can help you with...</div>
        <div className="skills-container">
            <SkillCard skill="Programming Languages" icons={programmingLanguages}/>
            <WebDevCard frontEnd={frontEnd} backEnd={backEnd}/>
            <SkillCard skill="UI/UX" icons={ui}/>
            <SkillCard skill="Game Development" icons={gameDevelopment}/>
            <SkillCard skill="Databases" icons={databases}/>
            <SkillCard skill="Tools & Platforms" icons={tools}/>
        </div>
      </section>
    </div>
  )
}

export default Skills
