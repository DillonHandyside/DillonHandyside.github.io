import React from 'react'
import './skills.css'
import Skill from './Skill'

const SkillsContainer = (props) => {
  return (
    <article className="skills">
        <div className="skills-header">
            <h3>{props.skillCategory}</h3>
        </div>
        <div className='skills-list'>
            {props.skills.map((skill, index) => {
                return <Skill key={index} skillName={skill} />
            })}
        </div>
    </article>
  )
}

export default SkillsContainer