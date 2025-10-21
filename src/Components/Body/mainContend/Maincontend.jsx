import React from 'react'
import './maincontend.css';
import {FaInstagram ,FaGithub ,FaFacebook, FaLinkedin} from "react-icons/fa";
 
function Maincontend() {
  return (
    <div className='mainTopic'>
        <h1 className='helloTag'>Hello</h1>
        <h1 className='mainName'>I'm Yashan</h1>
        <h2>"Aspiring Software Engineer "</h2>
        <p>I am passionate about building innovative software solutions and <br /> crafting modern, user-friendly websites.
         Always eager to learn new <br /> technologies,
           solve real-world problems, and grow as a developer.</p>
           <div className="main_icon">
            <a href="https://github.com/Yashan97" className='git'><FaGithub/></a>
            <a href="https://www.linkedin.com/in/yashan-anupama-980b95206"><FaLinkedin/></a>
            <a href="facebook"><FaFacebook/></a>
            <a href="instagram"><FaInstagram/></a>
           </div>
           <div className="aboutBtn">
            <button className='btn'>About Me</button>
           </div>
    </div>
  )
}

export default Maincontend