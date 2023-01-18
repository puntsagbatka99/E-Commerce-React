import './App.css';
import DetailPage from './components/Details';
import { Routes, Route } from "react-router-dom"
import Home from './Home';
import TopSection from './components/AboveHeader';
import Header from './components/Header';
import MainMenu from './components/MainMenu';
import SignUp from './components/SignUp';
import { useState } from 'react';
import Cart from './components/Cart';



function App() {
  const [addWishList, setAddWishList] = useState([]);
  console.log("addWishList", addWishList)
  return (
    <div className='container'>
      
      <Routes>
        <Route path='/' element={<Home addWishList={addWishList} setAddWishList={setAddWishList} />} />
        <Route path="/detail-page" element={<DetailPage />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
    </div>
  )
}

export default App;
