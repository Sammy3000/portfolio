import './Workcard.css'
import React from 'react'
import worldwide from '../assets/mobile.png'
import { NavLink } from 'react-router-dom'

const Workcard = ({imgsrc,title,text,view,source})=>{ 
    return(
        <div className='project-card'>
        <img src={imgsrc} alt='Project pic'/>
        <h2 className='project-title'>{title}</h2>
        <div className='project-details'>
           <p>{text}</p> 
        </div>
        <div className='project-btns'>
            <NavLink className='btn' to={view}>View</NavLink>
            <NavLink className='btn' to={source}>Source</NavLink>
        </div>
    </div>
    )
}
export default Workcard