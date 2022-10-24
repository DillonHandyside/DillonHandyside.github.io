import React from 'react'
import { AiOutlineArrowDown, AiOutlineLinkedin } from 'react-icons/ai'

const AboutCTA = () => {
  return (
    <div className='cta-buttons'>
        <a href="#contact" className='btn'>Contact Me</a>
        <a href="#projects" className='btn btn-primary'><AiOutlineArrowDown /> Projects</a>
    </div>
  )
}

export default AboutCTA