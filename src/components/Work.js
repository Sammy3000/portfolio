import './Workcard.css'
import React from 'react'
import Workcard from './Workcard'
import WorkCardData from './WorkCardData'

const Work = ()=>{
    return(
        <div className='work-container'>
            <h1 className='projects-heading'>Projects.</h1>
            <div className='project-container'>
              {
                WorkCardData.map((val,index)=>{
                    return(
                        <Workcard
                        key={index}
                        imgsrc={val.imgsrc}
                        title={val.title}
                        text={val.text}
                        view={val.view}
                        />
                    )
                })
              }
            </div>
        </div>
    )
}
export default Work