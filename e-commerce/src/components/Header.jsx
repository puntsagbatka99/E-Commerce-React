import { useState } from "react";
import { Link } from "react-router-dom";
import Dropdown from 'react-bootstrap/Dropdown';


export default function Header(props) {
  console.log(props)

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

          <Dropdown>
            <Dropdown.Toggle id="dropdown-basic" style={{ backgroundColor: "#003F62", border: "1px solid #003F62", display: "flex", alignItems: "center" }}>
              <img className='symbols' src="../images/symbols/heart.png" alt="" style={{ width: "20px", height: "18px" }} />
              <div>{props.wishlist.length}</div>
            </Dropdown.Toggle>

            <Dropdown.Menu style={{ backgroundColor: "white", width: "200px" }}>
              {
                props.wishlist.map((w, index) => {
                  return (
                    <div style={{ display: "flex" }}>
                      <div className="item">{w.title}</div>
                      <button
                        onClick={() => {
                          console.log("remove from wishlist")
                          props.setWishlist(
                            props.wishlist.filter(wish => wish.id !== w.id)
                          )
                        }}
                      >
                        X
                      </button>
                    </div>
                  )
                })
              }
            </Dropdown.Menu>
          </Dropdown>
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