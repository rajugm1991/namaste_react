import { useContext, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {HEADER_IMAGE_URL} from '../utils/constant'
import UserContext from '../utils/UserContext';


const Header =()=>{

    const {user} =useContext(UserContext);

    const cartItems=useSelector(store=>store.cart.items)

    const[isLoggedIn,setIsLoggedIn] =useState(false);

    return (
        <div className="flex justify-between bg-blue-50"   >
          <div className="logo-container">
            <img className="h-24 px-2"  
src={HEADER_IMAGE_URL}
/>
            </div>
          <div className="nav-items">
            <ul className='flex py-10'>
                <li className='px-2'> <Link to='/'>Home </Link></li>
                <li className='px-2'>
                   <Link to='/aboutUs'>About us</Link> </li>
                <li className='px-2'><Link to='/contactUs'>Contact us</Link> </li> 
                <li className='px-2'><Link to='/instamart'>Insta mart</Link> </li> 

                <li className='px-2'>Cart {cartItems.length} iteams</li>
            </ul>
          
          <span className='p-10 text-red-500'> {user.name}</span>

          <span className='p-10 text-red-500'> {user.email}</span>
          
          </div>
        {isLoggedIn 
        ? <button name='logout' className='p-2 m-2 bg-fuchsia-300 rounded-lg' onClick={()=>setIsLoggedIn(false)}> Logout</button>
        :<button className='p-4 m-2 bg-fuchsia-300 rounded-lg'  name='login'  onClick={()=>setIsLoggedIn(true)}> Login</button>}  
        </div>
    )
}

export default Header;