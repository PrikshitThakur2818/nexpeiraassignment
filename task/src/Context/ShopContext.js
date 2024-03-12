import React, { useState, createContext } from 'react';
import all_product from '../Components/Assests/all_product';

export const ShopContext = createContext(null);

const getDefaultCat = ()=>{
  let cart = {};
  
  for(let i = 0; i < all_product.length+1; i++){
    cart[i] = 0;
  }
  return cart;
}

const ShopContextProvider = (props)=>{
  const [cartItem, setcartItem] = useState(getDefaultCat());
  
  const addToCart = (itemId) =>{
    setcartItem((prv)=>({...prv, [itemId]: prv[itemId]+1 }))
  }

  const removeFromCart = (itemId) =>{
    setcartItem((prv)=>({...prv, [itemId]: prv[itemId]-1 }))
  }

  const contextValue = {all_product, cartItem,addToCart, removeFromCart};

  return(
    <ShopContext.Provider value = { contextValue } >
        {props.children}
    </ShopContext.Provider>
  );
}

export default ShopContextProvider;