
import './App.css';
import MainMenu from './components/MainMenu';
import Slider from './components/Slider';


function App() {
  return (
    <div className="container">
      <div className="topSection">
        <p>Need help? Call us (+98) 0234 456 789</p>
        <div className="TSRightSide">
          <div className='TSRSitems'>
            <img className='symbols' src="../images/symbols/location.png" alt="" />
            <p>Our store</p>
          </div>
          <div className='TSRSitems'>
            <img className='symbols' src="../images/symbols/truck.png" alt="" />
            <p>Track your order</p>
          </div>
        </div>
      </div>
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
      <div className='menu-container'>
        <MainMenu />
      </div>
      <div>
        <Slider />
      </div>
    </div>
  );
}

export default App;
