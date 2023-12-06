import { Link } from 'react-router-dom'
import './AboutContentStyles.css'
import React from 'react'

const AboutContent=()=>{
    return(
        <div className='about'>
            <div className='left'>
                <h1>Who am I?</h1>
                <p>I'm a React front end developer. I create responsive secure websites for my clients.</p>
                <Link to='/contact'>
                    <button className='btn'>Contact</button>
                </Link>

            </div>
            <div className='right'>


            </div>
        </div>
    )
}

export default AboutContent