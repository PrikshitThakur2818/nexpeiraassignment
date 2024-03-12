import React from 'react';
import './hero.css';
import hand_icon from '../Assests/hand_icon.png';
import arrow_icon from '../Assests/arrow.png';
import hero_imag from '../Assests/hero_image.png';

const Hero = () => {
  return (
    <div className='hero'>
      <div className='hero-left'>
        <h2> NEW ARRIVLAS ONLY</h2>
        <div>
          <div className='hero-hand-icon'>
            <p> new </p>
            <img src = {hand_icon} alt = 'hand-icon'/>
          </div>
          <p> collection </p>
          <p> for everyone </p>
        </div>
        <div className='hero-latest-button'>
          <div> latest collection </div>
          <img src = {arrow_icon} alt = 'arrow-icon'/>
        </div>
      </div>

      <div className='hero-right'>
        <img src = {hero_imag} alt = 'hero-img'/>
      </div>
    </div>
  )
}

export default Hero;