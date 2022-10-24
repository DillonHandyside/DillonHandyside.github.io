import React from 'react'
import { AiOutlineArrowDown, AiOutlineLinkedin } from 'react-icons/ai'

const ProjectsCTA = () => {
  return (
    <div className='cta-buttons'>
        <a href="#contact" className='btn'>Contact Me</a>
        <a href="#experiences" className='btn btn-primary'><AiOutlineArrowDown /> Experience</a>
    </div>
  )
}

export default ProjectsCTA