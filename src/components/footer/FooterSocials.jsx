import React from 'react'
import { BsLinkedin, BsGithub } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';

const FooterSocials = () => {
  return (
    <div className='footer-socials'> 
      <a href='https://linkedin.com/in/dillonhandyside' target="_blank"><BsLinkedin /> LinkedIn</a>
      <a href='https://github.com/DillonHandyside' target="_blank"><BsGithub /> GitHub</a>
    </div>
  )
}

export default FooterSocials