import React from 'react'


const AboutList = (props) => {
  return (
    <div className='module'>
        <h3>{props.title}:</h3>
        <ul className='about-list'>
            {props.content.map(content => (
                <li>{props.icon} {content}</li>
            ))}
        </ul>
    </div>
  )
}

export default AboutList