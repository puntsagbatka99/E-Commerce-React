
export default function Header() {

  return (
    <header>
      <div className='headerLeftSide'>
        <img src="../images/images/logo1.png" alt="" />
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
          <img className='symbols' src="../images/symbols/heart.png" alt="" />
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