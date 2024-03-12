import React from 'react';
import './popular.css';
import data_product from '../Assests/data';
import Items from '../Item/Items.js';


const Popular = () => {
  return (
    <div className='popular'>
      <h1>POPULAR IN WOMEN</h1>
      <hr/>
      <div className='popular-item'>
        {data_product.map((item,i)=>{
          return <Items 
          key = {i} 
          id = {item.id} 
          name = {item.name} 
          image = {item.image} 
          new = {item.new_price} 
          old = {item.old_price} />
        })}
      </div>
    </div>
  )
}

export default Popular;
