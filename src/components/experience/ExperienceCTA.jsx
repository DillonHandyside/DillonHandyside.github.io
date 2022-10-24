import React from 'react'
import { AiOutlineArrowDown, AiOutlineLinkedin } from 'react-icons/ai'

const ExperienceCTA = () => {
  return (
    <div className='cta-buttons'>
        <a href="#contact" className='btn'>Contact Me</a>
        <a href="#skills" className='btn btn-primary'><AiOutlineArrowDown /> Skills</a>
    </div>
  )
}

export default ExperienceCTA