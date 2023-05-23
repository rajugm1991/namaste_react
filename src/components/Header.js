import {HEADER_IMAGE_URL} from '../utils/constant'

const Header =()=>{
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
        </div>
    )
}

export default Header;