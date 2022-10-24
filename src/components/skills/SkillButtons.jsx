import React from 'react'
import { AiOutlineArrowDown } from 'react-icons/ai'
import { BsLinkedin } from 'react-icons/bs'

const SkillButtons = () => {
  return (
    <div className='cta-buttons'>
        <a href="https://www.linkedin.com/in/dillonhandyside/" className='btn' target='_blank'><BsLinkedin /> Endorse</a>
        <a href="#contact" className='btn btn-primary'><AiOutlineArrowDown /> Contact Me</a>
    </div>
  )
}

export default SkillButtons