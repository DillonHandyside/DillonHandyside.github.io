import React from 'react'
import Experience from './Experience'
import Experience_Image1 from '../../assets/Experience_Thales.jpg'
import Experience_Image2 from '../../assets/Experience_Kmart.jpg'
import ExperienceCTA from './ExperienceCTA'

const Experiences = (props) => {
  return (
    <section id='experiences' className={props.isVariant ? 'section-variant' : ''}>
      <h5>Enquire About My</h5>
      <h2>Experience</h2>
      <div className='container experiences-container'>
        <Experience 
          image={Experience_Image1} 
          experienceName='Thales Group' 
          role='Software Development Intern'
          skills={['HoloLens', 'AR/MR', 'C#', 'Unity', 'Networking', 'Azure', 'React', 'Kotlin']} />
        <Experience 
          image={Experience_Image2} 
          experienceName='Kmart' 
          role='Retail Assistant'
          skills={['Customer Service', 'Communication', 'Patience', 'Discipline']} />
      </div>
      <ExperienceCTA />
    </section>
  )
}

export default Experiences