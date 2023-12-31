import { Link } from 'react-router-dom'
import './AboutContentStyles.css'
import React from 'react'
import React1 from '../assets/image4.jpg'
import React2 from '../assets/Image3.jpg'

const AboutContent=()=>{
    return(
        <div className='about'>
            <div className='left'>
                <h1>Who am I?</h1>
                <p>I'm a React front end developer. I build the best User Interraction for my clients for my clients.
                </p>
                <Link to='/contact'>
                    <button className='btn'>Contact</button>
                </Link>

            </div>
            <div className='right'>
                <div className='img-container'>
                    <div className='img-stack top'>
                        <img src={React1} className='img' alt='Top pic'/>
                    </div>
                    <div className='img-stack bottom'>
                        <img src={React2} className='img' alt='Bottom pic'/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutContent