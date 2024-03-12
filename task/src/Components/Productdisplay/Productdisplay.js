import React, { useContext } from 'react';
import './productdisplay.css';
import start_icon from '../Assests/star_icon.png';
import star_dull_icon from '../Assests/star_dull_icon.png';
import { ShopContext } from '../../Context/ShopContext';

const Productdisplay = (props) => {
    const {product} = props;
    const {addToCart} = useContext(ShopContext);
  return (
    <div className='productdisplay'>
      <div className='productdisplay-left'>
        <div className='productdisplay-img-list'>
            <img src = {product.image} alt = 'product-imag' />
            <img src = {product.image} alt = 'product-imag' />
            <img src = {product.image} alt = 'product-imag' />
            <img src = {product.image} alt = 'product-imag' />
        </div>
        <div className='productdisplay-img'>
            <img className = 'productdispaly-main-img' src = {product.image} alt = 'product-imag'/>
        </div>
      </div>
      <div className='productdisplay-right'>
        <h1>{product.name}</h1>
        <div className='productdisplay-right-star'>
            <img src = {start_icon} alt = 'star-icon-imag'/>
            <img src = {start_icon} alt = 'star-icon-imag'/>
            <img src = {start_icon} alt = 'star-icon-imag'/>
            <img src = {start_icon} alt = 'star-icon-imag'/>
            <img src = {star_dull_icon} alt = 'star-dull-imag'/>
            <p>(122)</p>
        </div>
        <div className='productdispaly-right-prices'>
            <div className='productdisplay-right-price-old'>${product.old_price}</div>
            <div className='productdisplay-right-price-new'>${product.new_price}</div>
        </div>
        <div className='productdispaly-right-description'>
            A lightweight, usually knitted, pullover shirt, close-fitting and with round neckline 
            and short sleeves, worn as an undershirt or outer garment.
        </div>
        <div className='productdisplay-right-size'>
          <h1> Select Size </h1>
          <div className='productdisplay-right-sizes'>
            <div> S </div>
            <div> M </div>
            <div> L </div>
            <div> XL </div>
            <div> XXL </div>
          </div>
        </div>
        <button onClick = {()=>{
          addToCart(product.id)
        }}> ADD TO CART </button>
        <p className='productdisplay-right-category'> <span> Catefgory : </span> Women, T-shirt, Crop Top </p>
        <p className='productdisplay-right-category'> <span> Tags : </span> Modern, Latest </p>
      </div>
    </div>
  )
}

export default Productdisplay;
