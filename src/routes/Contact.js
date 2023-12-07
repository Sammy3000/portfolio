import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HeroImage2 from '../components/HeroImage2'
import { Form } from 'react-router-dom'

const Contact = () => {
  return (
    <div>
      <Navbar/>
      <HeroImage2 heading={"CONTACT"} paragraph={"Let's have a chat"}/>
      <Form/>
      <Footer/>
    </div>
  )
}

export default Contact