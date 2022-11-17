import React from 'react'
import ReactGA from 'react-ga'

const ContactCard = (props) => {
  return (
    <a href={props.url} onClick={()=> ReactGA.event({ category: 'Social', action: props.title})}>
        <div className={'btn contact-card' + (props.isPrimary ? ' btn-primary' : '')}>
            <div className='contact-card-icon'>
                {props.icon}
            </div>
            {props.title}
        </div>
    </a>
  )
}

export default ContactCard