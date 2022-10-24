import React from 'react'

const ContactCard = (props) => {
  return (
    <a href={props.url}>
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