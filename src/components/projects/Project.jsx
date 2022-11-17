import React from 'react'
import Skill from '../skills/Skill'
import ReactGA from 'react-ga'

const Project = (props) => {
  return (
    <div className='card'>
        <img src={props.image} alt={props.projectName}/>
        <div className='card-content'>
            <h3>{props.projectName}</h3>
            <h5>{props.description}</h5>
            <div className='card-skills'>
                {props.skills.map((skill, index) => {
                    return <Skill key={index} skillName={skill} />
                })}
            </div>
            <div className='card-cta'>
              <a onClick={()=> ReactGA.event({ category: 'Project', action: props.projectName})}
              href={props.url} className='btn btn-primary' target='_blank'>{props.urlIcon} {props.urlTitle}</a>
            </div>
        </div>
    </div>
  )
}

export default Project