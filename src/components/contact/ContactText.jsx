import React from 'react'

const ContactText = (props) => {
  return (
    <div className='contact-text'>
        <h3>{props.icon} {props.title}:</h3> 
        {props.content}
    </div>
  )
}

export default ContactText