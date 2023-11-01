import React from 'react';
import './HeroImgStyle.css';
import ImageOne from '../assets/code1.jpg';

const HeroImg = () => {
  return (
    <div className='hero'>
      <div className='mask'>
        <img className='intro-image' src={ImageOne} alt='IntroImage'/>
      </div>

    </div>
  )
}

export default HeroImg
