import React from 'react'
import { BsLinkedin, BsGithub } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';

const HeaderSocials = () => {
  return (
    <div className='header-socials'>
        <a href="https://linkedin.com/in/dillonhandyside" target="_blank"><BsLinkedin /></a>
        <a href="https://github.com/DillonHandyside" target="_blank"><BsGithub /></a>
        <a href="mailto:dj_handyside@hotmail.com" target="_blank"><MdEmail /></a>
    </div>
  )
}

export default HeaderSocials