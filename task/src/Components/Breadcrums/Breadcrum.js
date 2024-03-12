import React from 'react';
import './breadcrum.css';
import arrow_icon from '../Assests/breadcrum_arrow.png';

const Breadcrum = (props) => {
    const {product} = props;
  return (
    <div className='breadcrum'>
      HOME <img src = {arrow_icon} alt = 'breadcum-icon'/> SHOP <img src = {arrow_icon} alt = 'breadcrum-icon' />
      {product.category} <img src = {arrow_icon} alt = 'breadcrum-icon' />
      {product.name}
    </div>
  )
}

export default Breadcrum;
