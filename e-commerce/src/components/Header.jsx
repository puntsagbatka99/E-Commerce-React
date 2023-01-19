import { useState } from "react";
import { Link } from "react-router-dom";

export default function Header(props) {
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
        <Link to={"/sign-up"}>
          <a className='signIn'>
            <img className='symbols' src="../images/symbols/profile.png" alt="" />
            <a style={{ textDecoration: "none" }} href='#'>Sign In</a>
          </a>
        </Link>
        <a href='#' className='signIn'>
          <img className='symbols' src="../images/symbols/heart.png" alt=""
            onClick={() => SetShow(!show)} />
          <div>{props.wishlist.length}</div>
        </a>
        <Link to={"/cart"}>
          <a href='#' className='signIn'>
            <img className='symbols' src="../images/symbols/cart.png" alt="" />
            <div>0</div>
          </a>
        </Link>
      </div>
    </header>
  )
}