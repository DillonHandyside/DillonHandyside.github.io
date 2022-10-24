import React from 'react'
import './contact.css'
import ContactCard from './ContactCard'
import { BsLinkedin, BsTelephoneFill } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';
import Skill from '../skills/Skill';
import ContactText from './ContactText';
import ContactCTA from './ContactCTA';

const Contact = (props) => {
  return (
    <section id='contact' className={props.isVariant ? 'section-variant' : ''}>
      <h5>Get In</h5>
      <h2>Contact</h2>
      <div className='container contact-container'>
        <div className='contact-cards'>
          <ContactCard 
            icon={<BsLinkedin />} 
            title='LinkedIn' 
            url='https://linkedin.com/in/dillonhandyside' />
          <ContactCard 
            icon={<BsTelephoneFill />} 
            title='Mobile' 
            url='tel:0449150070' />
          <ContactCard 
            icon={<MdEmail />} 
            title='Email' 
            url='mailto:dj_handyside@hotmail.com'
            isPrimary={true} />
        </div>
        <div className='contact-texts'>
          <ContactText 
            icon={<BsTelephoneFill />}
            title='Mobile'
            content='See CV' />
          <ContactText 
            icon={<MdEmail />}
            title='Email'
            content='dj_handyside@hotmail.com' />
        </div>
        <div className='contact-description'>
          <div className='module'>
            <h4>Preferred Contact Method</h4>
            <div className='contact-preferred'>
              <Skill skillName='Email' />
              <Skill skillName='Phone' />
            </div>
          </div>
          <div className='module'>
            <h4>Checks Emails</h4>
            <Skill skillName='Daily' /> 
          </div>
        </div>
        <ContactCTA />
      </div>
    </section>
  )
}

export default Contact