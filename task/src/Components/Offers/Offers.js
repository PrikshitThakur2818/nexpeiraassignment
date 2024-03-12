import React from 'react';
import './offers.css';
import exclusive_image from '../Assests/exclusive_image.png';

const Offers = () => {
  return (
    <div className='offers'>
      <div className='offers-left'>
        <h1> Exclusive</h1>
        <h1> Offers For You </h1>
        <p> ONLY FOR THE BEST SELLERS PRODUCTS </p>
        <button> Check Now </button>
      </div>
      <div className='offers-right'> 
        <img src = {exclusive_image} alt = 'ex-imag'/>
      </div>
    </div>
  )
}

export default Offers;
