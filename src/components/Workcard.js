import './Workcard.css'
import React from 'react'
import worldwide from '../assets/mobile.png'

const Workcard = ()=>{
    return(
        <div className='work-container'>
            <h1 className='projects-heading'>Projects.</h1>
            <div className='project-container'>
                <div className='project-card'>
                    <img src={worldwide} alt='Project Image'/>

                </div>
            </div>
        </div>
    )
}
export default Workcard