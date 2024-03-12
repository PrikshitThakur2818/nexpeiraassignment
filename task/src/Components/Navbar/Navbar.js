import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
import logo from '../Assests/logo.png';
import cart_icon from '../Assests/cart_icon.png';
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = () => {
  
  const [menu, setMenu] = useState('shop');
  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();

  return (
    <div className = 'navbar'>
      
      <div className='nav-logo'>
        <img src = {logo} alt = ''/>
        <p> SHOPPER </p>
      </div>
        
      <ul className='nav-menu'>
        <li onClick = {()=>{setMenu('shop')}}> 
          <Link style = {{textDecoration: 'none'}} to = '/'> Shop </Link>  {menu === 'shop'? <hr/> : <></>} 
        </li>
        <li onClick = {()=>{setMenu('mens')}}> 
          <Link style = {{textDecoration: 'none'}} to = '/mens'> Men </Link> {menu === 'mens'? <hr/> : <></>} 
        </li>
        <li onClick = {()=>{setMenu('womens')}}> 
          <Link style = {{textDecoration: 'none'}} to = '/womens'> Women </Link> {menu === 'womens'? <hr/> : <></>}
        </li>
        <li onClick = {()=>{setMenu('kids')}}> 
          <Link style = {{textDecoration: 'none'}} to = '/kids'> Kids </Link>  {menu === 'kids'? <hr/> : <></>}
        </li>
      </ul>
      
      <div className='nav-login-cart'>
        {/*<Link style = {{textDecoration: 'none'}} to = '/login'> 
          <button className='nav-login-cart'> Login </button> 
        </Link>*/}
        { isAuthenticated && <p> {user.name}</p>}
        { isAuthenticated ?
           <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>  Log Out </button>
          : <button onClick={() => loginWithRedirect()}>Log In</button> }
        
        
        <Link style = {{textDecoration: 'none'}} to = '/cart'> 
          <img src = {cart_icon} alt = 'cart_icon'/>
        </Link>
        <div className='nav-cart-count'> 0 </div>
      </div>
    
    </div>
  );
}

export default Navbar;
