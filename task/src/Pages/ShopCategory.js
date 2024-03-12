import React, { useContext } from 'react';
import './CSS/shopcatogry.css';
import { ShopContext } from '../Context/ShopContext.js';
import dropdown_icon from '../Components/Assests/dropdown_icon.png';
import Items from '../Components/Item/Items.js'; 

const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);
  return (
    <div className='shop-catogry'>
      <img className = 'shop-catogary-banner' src = {props.banner} alt = 'men-banner'/>
      <div className = 'shopcatogryp-indexSort'>
        <p>
          <span> Showing 1-12 </span> out of 36 Products
        </p>
        <div className = 'shopcatogry-sort'>
          Sort by <img src = {dropdown_icon} alt = 'sortproducts-imag'/>
        </div>
      </div>
      <div className = 'shopcategory-products'>
        {all_product.map((item, i)=>{
          if(props.category === item.category){
            return <Items 
                   key = {i} 
                   id = {item.id} 
                   name = {item.name} 
                   image = {item.image} 
                   new = {item.new_price} 
                   old = {item.old_price}
                  />
          }else{
            return null;
          }
        })}
      </div>
      <div className='shopcatrgory-loadmore'>
        Explore More
      </div>
    </div>
  );
}

export default ShopCategory;
