import './HeroImage2Styles.css'
import React from 'react'

const HeroImage2=({heading,paragraph})=>{
    return(
        <div className='heroimg'>
            <div className='heading'>
                <h1>{heading}</h1>
                <p>{paragraph}</p>

            </div>
            
        </div>
    )
}
export default HeroImage2