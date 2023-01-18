import './App.css';
import DetailPage from './components/Details';
import { Routes, Route } from "react-router-dom"
import Home from './Home';
import TopSection from './components/AboveHeader';
import Header from './components/Header';
import MainMenu from './components/MainMenu';
import SignUp from './components/SignUp';
import { useState } from 'react';



function App() {
  const [addWishList, setAddWishList] = useState([]);
  console.log("addWishList", addWishList)
  return (
    <div className='container'>
      <TopSection />
      <Header />
      <div className='menu-container'>
        <MainMenu />
      </div>
      <Routes>
        <Route path='/' element={<Home addWishList={addWishList} setAddWishList={setAddWishList} />} />
        <Route path="/detail-page" element={<DetailPage />} />
        <Route path='/sign-up' element={<SignUp />} />
      </Routes>
    </div>
  )
}

export default App;
