import React from 'react'
import { BsLinkedin, BsGithub } from 'react-icons/bs';
import ReactGA from 'react-ga';

const FooterSocials = () => {
  return (
    <div className='footer-socials'> 
      <a onClick={()=> ReactGA.event({ category: 'Social', action: 'LinkedIn'})}
      href='https://linkedin.com/in/dillonhandyside' target="_blank"><BsLinkedin /> LinkedIn</a>
      <a onClick={()=> ReactGA.event({ category: 'Social', action: 'GitHub'})}
      href='https://github.com/DillonHandyside' target="_blank"><BsGithub /> GitHub</a>
    </div>
  )
}

export default FooterSocials