import { useState } from "react";
import { Link } from "react-router-dom";
export default function Header() {
  const [show, SetShow] = useState(false);

  return (
    <header>
      <div className='headerLeftSide'>
        <Link to={"/"}><img src="../images/images/logo1.png" alt="" /></Link>
        <div className='search'>
          <input type="text" placeholder='Search anything here' />
          <button id='searchBtn'>Search</button>
        </div>
      </div>
      <div className='headerRightSide'>
        <a className='signIn'>
          <img className='symbols' src="../images/symbols/profile.png" alt="" />
          <a href='#'>Sign In</a>
        </a>
        <a href='#' className='signIn'>
          <img className='symbols' src="../images/symbols/heart.png" alt="" 
            onClick={() => SetShow(!show)}/>
            {show ? 
            <div id="wishlist">
              <h5>Wishlist</h5>
              <hr />
              <div></div>
            </div> : ""
            }
          <div>0</div>
        </a>
        <a href='#' className='signIn'>
          <img className='symbols' src="../images/symbols/cart.png" alt="" />
          <div>0</div>
        </a>
      </div>
    </header>
  )
}