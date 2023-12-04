import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HeroImage2 from '../components/HeroImage2'
import Workcard from '../components/Workcard'


const Projects = () => {
  return (
    <div>
      <Navbar/>
      <HeroImage2 heading={"PROJECTS."} paragraph={"Some of my most recent works"}/>
      <Workcard/>
      <Footer/>
    </div>
  )
}

export default Projects