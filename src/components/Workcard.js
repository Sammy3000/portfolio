import './Workcard.css'
import React from 'react'
import worldwide from '../assets/mobile.png'
import { NavLink } from 'react-router-dom'

const Workcard = ()=>{
    return(
        <div className='project-card'>
        <img src={worldwide} alt='Project pic'/>
        <h2 className='project-title'>Project Title</h2>
        <div className='project-details'>
           <p>I love doing react projects.</p> 
        </div>
        <div className='project-btns'>
            <NavLink className='btn' to='url.com'>View</NavLink>
            <NavLink className='btn' to='url.com'>Source</NavLink>
        </div>
    </div>
    )
}
export default Workcard