import React from 'react'
import './cv.css'
import LightCV from '../../assets/CV_DillonHandyside_Light.pdf'
import DarkCV from '../../assets/CV_DillonHandyside_Dark.pdf'
import LightThumbnail from '../../assets/CV_Thumbnail_Light.jpg'
import DarkThumbnail from '../../assets/CV_Thumbnail_Dark.jpg'
import { FiDownload } from 'react-icons/fi'
import ReactGA from 'react-ga'

const CV = () => {
  return (
    <div id='cv'>
        <div className='cv-button-group'>
            <div className='cv-button'>
                <img src={DarkThumbnail} alt='CV Dark'/>
                <a onClick={()=> ReactGA.event({ category: 'CV', action: 'Dark'})} 
                href={DarkCV} download className='btn'><FiDownload /> CV (Dark)</a>
            </div>
            <div className='cv-button'>
                <img src={LightThumbnail} alt='CV Light'/>
                <a onClick={()=> ReactGA.event({ category: 'CV', action: 'Light'})}
                href={LightCV} download className='btn'><FiDownload /> CV (Light)</a>
            </div>
        </div>
    </div>
  )
}

export default CV