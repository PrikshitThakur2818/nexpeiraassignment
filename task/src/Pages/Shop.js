import React from 'react';
import Hero from '../Components/Hero/Hero.js';
import Popular from '../Components/Popular/Popular.js';
import Offers from '../Components/Offers/Offers.js';
import NewCollection from '../Components/NewCollection/NewCollection.js';
import NewsLetter from '../Components/NewsLetter/NewsLetter.js';

const Shop = () => {
  return (
    <div>
      <Hero/>
      <Popular/>
      <Offers/>
      <NewCollection/>
      <NewsLetter/>
    </div>
  )
}

export default Shop;
