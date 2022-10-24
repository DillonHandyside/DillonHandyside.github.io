import React from 'react'
import './footer.css'
import FooterSocials from './FooterSocials'

const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer-logo'>Dillon Handyside</a>
      <ul className='footer-permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About Me</a></li>
        <li><a href='#projects'>Projects</a></li>
        <li><a href='#experiences'>Experience</a></li>
        <li><a href='#skills'>Skills</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>
      <FooterSocials />

      <div className='footer-copyright'>
        <small>&copy; Page designed by Dillon Handyside. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer