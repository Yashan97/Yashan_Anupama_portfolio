import React from 'react'
import './header.css';  

function Header() {
  return (
    <div className='header'>
        <h1>Yashan Anupama</h1>
        <div className='links '>
          <a href="#home" className='link'>Home</a>
          <a href="#about" className='link'>About</a>
          <a href="#skill" className='link'>Skill</a>
          <a href="#project" className='link'>Project</a>
          <a href="contact" className='link'>Contact</a>
        </div>
    </div>
  )
}

export default Header
