import React from 'react'
import './Hero.css'
// import './Hero.js'
import { mainimg, MainImg } from '../../assets/';
import { mainHeading } from "../../constants";

const Hero = () => {
  return (
    <div className='hero'>
      {/* <img src={mainimg} alt="" /> */}
      <div className="hero_main">
        <div className="hmain">
          <div className="hmain1">
            Artifloric
            <h1>{mainHeading}</h1>
            <button><a href="#contact">Hire Us</a></button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero