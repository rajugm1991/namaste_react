import { useState } from 'react';
import {HEADER_IMAGE_URL} from '../utils/constant'

const Header =()=>{

    const[isLoggedIn,setIsLoggedIn] =useState(false);

    return (
        <div className="header">
          <div className="logo-container">
            <img className="logo" 
src={HEADER_IMAGE_URL}
/>
            </div>
          <div className="nav-items">
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Contact us</li> 
                <li>Cart</li>
            </ul>
          
          </div>
        
        {isLoggedIn 
        ? <button name='logout' onClick={()=>setIsLoggedIn(false)}> Logout</button>
        :<button name='login'  onClick={()=>setIsLoggedIn(true)}> Login</button>}  
        
   
         
        </div>
    )
}

export default Header;