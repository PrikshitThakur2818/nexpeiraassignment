import React from 'react';
import './newcollection.css';
import new_collection from '../Assests/new_collections';
import Items from '../Item/Items.js';

const NewCollection = () => {
  return (
    <div className='new-collection'>
      <h1> NEW COLLECTIONS </h1>
      <hr/>
      <div className='collections'>
        {new_collection.map((item, i)=>{
          return <Items 
          key = {i} 
          id = {item.id} 
          name = {item.name} 
          image = {item.image} 
          new = {item.new_price} 
          old = {item.old_price}/>
        })}
      </div>
    </div>
  )
}

export default NewCollection;
