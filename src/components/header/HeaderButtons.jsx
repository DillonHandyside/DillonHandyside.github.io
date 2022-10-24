import React from 'react'
import { AiOutlineArrowDown } from 'react-icons/ai'

const HeaderButtons = () => {
  return (
    <div className='header-buttons'>
        <a href="mailto:dj_handyside@hotmail.com" className='btn'>Contact Me</a>
        <a href="#about" className='btn btn-primary'><AiOutlineArrowDown /> View Portfolio</a>
    </div>
  )
}

export default HeaderButtons