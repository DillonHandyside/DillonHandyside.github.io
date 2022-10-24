import React from 'react'
import { FaGraduationCap } from 'react-icons/fa'
import { BsDot } from 'react-icons/bs'
import './about.css'
import AboutCTA from './AboutCTA'
import AboutList from './AboutList'
import AboutStatus from './AboutStatus'

const About = (props) => {
  return (
    <section id='about' className={props.isVariant ? 'section-variant' : ''}>
      <h5>Learn</h5>
      <h2>About Me</h2>
      <div className='container'>
        <AboutStatus />
        <p className='about-bio'>
          Soon-to-be Software Engineer/Developer. Confident in my skills, and my ability to learn and adapt.
        </p>
        <div className='about-lists'>
          <AboutList 
            title='Skills' 
            icon={<BsDot />}
            content={['Programming', 'Unity', 'Full-Stack', <a href='#skills'>See Skills</a>]} />
          <AboutList 
            title='Hobbies' 
            icon={<BsDot />}
            content={['Anime', 'Card Games', 'Programming', 'Walking & Gym']} />
          <AboutList 
            title='Interested In' 
            icon={<BsDot />}
            content={['Content Creation', 'Aquaponics & Sustainability', 'Philosophy', 'Learning, in general']} />
        </div>
      </div>
      <AboutCTA />
    </section>
  )
}

export default About