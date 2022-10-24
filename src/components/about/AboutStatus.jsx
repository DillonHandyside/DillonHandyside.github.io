import React from 'react'
import Selfie from '../../assets/DillonHandyside_Selfie.jpg'
import Skill from '../skills/Skill'
import { RiMessage2Fill } from 'react-icons/ri'
import { GiNotebook } from 'react-icons/gi'
import { BsExclamationLg } from 'react-icons/bs'

const AboutStatus = () => {
  return (
    <div class='about-status-container'>
        <div className='about-selfie'>
          <img src={Selfie} />
        </div>
        <div>
            <h3>Dillon Joel Handyside</h3>
            <h5>(He/Him) - 24y.o.</h5>
            <div className='about-status'>
                <a href="#contact">
                    <b><BsExclamationLg /> Looking For Work</b>
                </a>
                <div className='about-status-content'>
                    <Skill skillName='Full Time' /> 
                    <Skill skillName='Part Time' />
                </div>
            </div>
            <div className='about-status'>
                <GiNotebook /> Currently Studying 
                <div className='about-status-content'>
                    <Skill skillName='End Oct 2023' /> 
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutStatus