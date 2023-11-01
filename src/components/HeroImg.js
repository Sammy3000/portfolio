import React from 'react';
import './HeroImgStyle.css';
import ImageOne from '../assets/code1.jpg';
import {Link} from 'react-router-dom';

const HeroImg = () => {
  return (
    <div className='hero'>
      <div className='mask'>
        <img className='intro-image' src={ImageOne} alt='IntroImage'/>
      </div>
      <div className='content'>
        <p>Hi I'm a Developer</p>
        <h1>React Developer</h1>
        <div>
          <Link to='project'></Link>
          <Link to='contact'></Link>
        </div>
        
      </div>
    </div>
  )
}

export default HeroImg
