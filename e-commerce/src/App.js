import './App.css';
import DetailPage from './components/Details';
import { Routes, Route } from "react-router-dom"
import Home from './Home';
import TopSection from './components/AboveHeader';
import Header from './components/Header';
import SignUp from './components/SignUp';
import { useState } from 'react';
import Cart from './components/Cart';



function App() {
  const [wishlist, setWishlist] = useState([]);

  return (
    <div className='container'>
      <TopSection />
      <Header wishlist={wishlist} setWishlist={setWishlist} />
      <Routes>
        <Route path='/' element={<Home wishlist={wishlist} setWishlist={setWishlist} />} />
        <Route path="/detail-page" element={<DetailPage />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
    </div>
  )
}

export default App;
