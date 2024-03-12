import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../Context/ShopContext.js';
import Breadcrum from '../Components/Breadcrums/Breadcrum.js';
import Productdisplay from '../Components/Productdisplay/Productdisplay.js';
import DescriptionBox from '../Components/DescriptionBox/DescriptionBox.js';
import RelatedProducts from '../Components/RelatedProducts/RelatedProducts.js';

const Product = () => {
  const {all_product} = useContext(ShopContext);
  const {productId} = useParams();
  const product = all_product.find((e)=> e.id === Number(productId));
  return (
    <div>
      <Breadcrum product = {product}/>
      <Productdisplay product = {product}/>
      <DescriptionBox />
      <RelatedProducts />
    </div>
  )
}

export default Product;
