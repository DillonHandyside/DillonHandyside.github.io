import React from 'react'
import SkillButtons from './SkillButtons'
import './skills.css'
import SkillsContainer from './SkillsContainer'

const Skills = (props) => {
  return (
    <section id='skills' className={props.isVariant ? 'section-variant' : ''}>
      <h5>Endorse My</h5>
      <h2>Skills</h2>
      <div className='container skills-container'>
        <SkillsContainer skillCategory="General" skills={["Software Development", "Software Design", 
        "Mobile Development", "Game Development", "Web Development",]} />
        <SkillsContainer skillCategory="Languages" skills={["C#", "C", "C++", "Python", "HTML", "CSS", "PHP", "SQL", "Java", 
        "JavaScript", "TypeScript", "React", "Kotlin", "UML", "Regex"]} />
        <SkillsContainer skillCategory="Technical" skills={["Git", "IoT", "Unity", "AI", "VR", "AR/MR", 
        "Networking", "Cloud Computing", "OOP", "SDLC", "SOLID", "Deployment", "Testing", "Agile", "DevOps", 
        "Frontend", "Backend", "Full-Stack"]} />
        <SkillsContainer skillCategory="Interpersonal" skills={["Customer Service", "Communication", "Discipline",
        "Motivation", "Confidence"]} />
      </div>
      <SkillButtons />
    </section>
  )
}

export default Skills