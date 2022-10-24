import React from 'react'
import Skill from '../skills/Skill'

const Project = (props) => {
  return (
    <div className='card'>
        <img src={props.image} />
        <div className='card-content'>
            <h3>{props.projectName}</h3>
            <h5>{props.description}</h5>
            <div className='card-skills'>
                {props.skills.map((skill, index) => {
                    return <Skill key={index} skillName={skill} />
                })}
            </div>
            <div className='card-cta'>
              <a href={props.url} className='btn btn-primary' target='_blank'>{props.urlIcon} {props.urlTitle}</a>
            </div>
        </div>
    </div>
  )
}

export default Project