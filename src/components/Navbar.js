import React from 'react'
import './Navbarstyles.css'
import { Link } from 'react-router-dom'
import { FaBars } from 'react-icons/fa'

const Navbar = () => {
  return (
    <div className='header'>
        <Link to='/'>
            <h1>Portfolio</h1>
        </Link>
        <ul className='nav-menu'>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='project'>Projects</Link></li>
            <li><Link to='about'>About</Link></li>
            <li><Link to='contact'>Contact</Link></li>
        </ul>
        <div className='hambuger'>
          <FaBars size={20} style={{color:'#fff'}}/>
/
        </div>

    </div>
  )
}

export default Navbar