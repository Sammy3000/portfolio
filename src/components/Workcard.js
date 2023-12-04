import './Workcard.css'
import React from 'react'
import worldwide from '../assets/mobile.png'
import { NavLink } from 'react-router-dom'

const Workcard = ()=>{
    return(
        <div className='work-container'>
            <h1 className='projects-heading'>Projects.</h1>
            <div className='project-container'>
                <div className='project-card'>
                    <img src={worldwide} alt='Project Image'/>
                    <h2 className='project-title'>Project Title</h2>
                    <div className='project-details'>
                        I love doing react projects.
                    </div>
                    <div className='project-btns'>
                        <NavLink className='btn' to='url.com'>View</NavLink>
                        <NavLink className='btn' to='url.com'>Source</NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Workcard