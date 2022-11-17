import React from 'react'
import { BsLinkedin, BsGithub } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';
import ReactGA from 'react-ga';

const HeaderSocials = () => {
  return (
    <div className='header-socials'>
        <a onClick={()=> ReactGA.event({ category: 'Social', action: 'LinkedIn'})} 
        href="https://linkedin.com/in/dillonhandyside" target="_blank"><BsLinkedin /></a>
        <a onClick={()=> ReactGA.event({ category: 'Social', action: 'GitHub'})} 
        href="https://github.com/DillonHandyside" target="_blank"><BsGithub /></a>
        <a onClick={()=> ReactGA.event({ category: 'Social', action: 'Email'})} 
        href="mailto:dj_handyside@hotmail.com" target="_blank"><MdEmail /></a>
    </div>
  )
}

export default HeaderSocials