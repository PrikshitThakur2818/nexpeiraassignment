import React from 'react';
import './relatedproducts.css';
import data_products from '../Assests/data';
import Items from '../Item/Items.js';

const RelatedProducts = () => {
  return (
    <div className='related-products'>
      <h1> Related Products </h1>
      <hr/>
      <div className='relatedproducts-items'>
        {data_products.map((item, i)=>{
          return <Items
            key = {i} 
            id = {item.id} 
            name = {item.name} 
            image = {item.image} 
            new = {item.new_price} 
            old = {item.old_price}
          />
        })}
      </div>
    </div>
  )
}

export default RelatedProducts;
