import React from 'react'
import './header.css'
import HeaderSocials from './HeaderSocials'
import HeaderButtons from './HeaderButtons'
import CV from '../cv/cv'
import Selfie from '../../assets/DillonHandyside_Selfie.jpg'

const Header = () => {
  return (
    <header>
        <div className='container header-container'>
            <div className='selfie'>
              <img src={Selfie} />
            </div>
            <h1>Dillon Handyside</h1>
            <h5 className='text-light'>Software Developer, Computer Science Student</h5>
            <HeaderSocials />
            <CV />
            <HeaderButtons />
        </div>
    </header>
  )
}

export default Header