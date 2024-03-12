import React from 'react';
import './descriptionbox.css';

const DescriptionBox = () => {
  return (
    <div className='description-box'>
      <div className='description-box-navigator'>
        <div className='decrition-box-navbox'>Description</div>
        <div className='decrition-box-navbox fade'> Reviews (122) </div>
      </div>
      <div className='decriptionbox-decription'>
        <p>An B2B website is an platfrom that facilitates buying and
           selling of products or services over the internet serves as a virtual
           marketplace where businesses showcases their products, interact with other
           businesses and conduct transaction without the need for a physical presence.
        </p>
        <p>
            B2B websites typically display products or services along with detailed description,
            images, prices and any avilable variations (e.g size, colors). Each product usually
            has its own dedicated page with relevant information.
        </p>
      </div>
    </div>
  );
}

export default DescriptionBox;
