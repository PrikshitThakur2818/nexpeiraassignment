import React, { useContext } from 'react';
import './cartitems.css';
import { ShopContext } from '../../Context/ShopContext';
import remove_icon from '../Assests/cart_cross_icon.png';

const CartItems = () => {
    const {all_product, CartItems, removeFromCart } = useContext(ShopContext);
  return (
    <div className='cartitems'>
      <div className='cartitems-format-main'>
        <p> Products  </p>
        <p> Title </p>
        <p> Price </p>
        <p> Quantity </p>
        <p> Total </p>
        <p> Remove </p>
      </div>
      <hr/>
    
      {all_product.map((e)=>{
        if(CartItems[e.id]>0){
           return <div>
                    <div className='cartitem-format cartitems-format-main'>
                      <img src = {e.image} alt = 'imag' className='carticon-product-icon' />
                      <p> {e.name} </p>
                      <p> ${e.new_price }</p>
                      <button className='cartitems-quantity'>{CartItems[e.id]}</button>
                      <p> ${e.new_price * CartItems[e.id]}</p>
                      <img className = 'carticon-remove-icon' src = { remove_icon } onClick = {()=>{removeFromCart()}} alt = 'removeimag'/>
                    </div>
                    <hr/>
                  </div>
        } 
          return null;
      })}
      <div className = 'cartitems-down'>
        <div className = 'cartitems-total'>
          <h1> Cart Total </h1>
          <div> 
            <div className='cartitems-total-item'> 
              <p> Subtotal </p>
              <p> ${0}</p>
            </div>
            <hr/>
            <div className='cartitems-total-item'> 
              <p> Shipping Fee </p>
              <p> Free </p>
            </div>
            <hr/>
            <div className='cartitiems-total-item'>
              <h3> Total </h3>
              <h3> ${0}</h3>
            </div>
          </div>
          <button> PROCCED TO CHECKOUT  </button>
        </div>
        <div className='cartitems-promocode'>
          <p> If you have a promo code, Enter it here  </p>
          <div className='cart'>

          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItems;
