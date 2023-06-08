import { useState } from 'react';
import { Link } from 'react-router-dom';
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
                <li> <Link to='/'>Home </Link></li>
                <li>
                   <Link to='/aboutUs'>About us</Link> </li>
                <li><Link to='/contactUs'>Contact us</Link> </li> 
                <li><Link to='/instamart'>Insta mart</Link> </li> 

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