import React from 'react';
import './items.css';
import { Link } from 'react-router-dom';

const Items = (props) => {
  return (
    <div className='item'>
      <Link to = {`/product/${props.id}`}> <img onClick = {window.scrollTo(0,0)} src = {props.image} alt = 'imag'/> </Link>
      <p> {props.name} </p>
      <div className='item-price'>
        <div className='item-price-new'>
          ${props.new}
        </div>
        <div className='item-price-old'>
          ${props.old}
        </div>
      </div>
    </div>
  );
}

export default Items;
