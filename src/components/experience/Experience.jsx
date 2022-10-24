import React from 'react'
import Skill from '../skills/Skill'
import './experiences.css'

const Experience = (props) => {
    return (
      <div className='card card-variant'>
          <img src={props.image} />
          <div className='card-content'>
              <h3>{props.experienceName}</h3>
              <h5>{props.role}</h5>
              <div className='card-skills'>
                  {props.skills.map((skill, index) => {
                      return <Skill key={index} skillName={skill} />
                  })}
              </div>
          </div>
      </div>
    )
}

export default Experience