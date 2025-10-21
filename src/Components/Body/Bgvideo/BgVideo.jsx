import React from 'react'
import './bgvideo.css';
import bgvideo from '../../../assets/bgvideo.mp4';
function BgVideo() {
  return (
    <div className='vieoContainer'>
        <video autoPlay loop muted playsInline className='bgVideo'>
            <source src={bgvideo} type="video/mp4" />
        </video>
    </div>
  )
}

export default BgVideo