import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="container">
      <div className="topSection">
        <p>Need help? Call us (+98) 0234 456 789</p>
        <div className="TSRightSide">
          <div className='TSRSitems'>
            <img src="../public/images/symbols/location.png" alt="" />
            <p>Our store</p>
          </div>
          <div className='TSRSitems'>
            <img src="#" alt="" />
            <p>Track your order</p>
          </div>
        </div>
      </div>
      <header></header>
    </div>
  );
}

export default App;
