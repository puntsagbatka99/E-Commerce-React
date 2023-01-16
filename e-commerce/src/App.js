import './App.css';
import DetailPage from './components/Details';
import { Routes, Route } from "react-router-dom"
import Home from './Home';
import TopSection from './components/AboveHeader';
import Header from './components/Header';
import MainMenu from './components/MainMenu';



function App() {
  return (
    <div className='container'>
      <TopSection />
            <Header />
            <div className='menu-container'>
                <MainMenu />
            </div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/detail-page" element={<DetailPage />} />
      </Routes>
    </div>
  )
}

export default App;
