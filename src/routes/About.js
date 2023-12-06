import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HeroImage2 from '../components/HeroImage2'
import AboutContent from '../components/AboutContent'

const About = () => {
  return (
    <div>
      <Navbar/>
      <HeroImage2 heading={"ABOUT ME."} paragraph={"I am a Frontend Web Developer with passion and experience building the best User Interface with smooth interraction for users using React Js."}/>
      <AboutContent/>
      <Footer/>
    </div>
  )
}

export default About