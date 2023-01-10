
import './App.css';
import MainMenu from './components/MainMenu';
import Sliders from './components/Slider';
import sliders from './data/slider';
import AliceCarousel from 'react-alice-carousel'
import PopularProducts from "./components/PPSection"
import SalePic from './components/SalePicture';
import SpeakerSection from './components/Speaker';
import bannerItems from './data/banner';
import Banners from './components/Banner';
import profileData from './data/profileItems';
import ProfileItems from './components/ProfileItems';
import Slider from 'react-slick';
import Partners from './components/Partners';
import partner from './data/partners';
import LastSliderFull from './components/LastSliderFull';
import Footer from './components/Footer';



function App() {
  const sliderData = sliders.map(item =>
    <Sliders title={item.title} image={item.image} price={item.price} />
  )

  const banners = bannerItems.map(element =>
    <Banners image={element.image} title={element.title} text={element.text} />
  )

  const profileSection = profileData.map(item => {
    return(
    <ProfileItems image={item.image} name={item.name} text={item.text} />
    )
  })
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3
  };

  const PartnerCompanies = partner.map(item =>{
    return(
      <Partners image={item.image}/>
    )
  })
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
      <div className='bigSlider'>
        <AliceCarousel
          autoPlay={true}
          autoPlayInterval={5000}
          infinite={true}
          disableButtonsControls>
          {sliderData}
        </AliceCarousel>
      </div>
      <div className='PPSection'>
        <PopularProducts />
      </div>
      <div className='salePic'>
        <SalePic />
      </div>
      <SpeakerSection />
      <div className='bannerSection'>{banners}</div>
      <Slider {...settings} className="profileSlider">
        {profileSection}
      </Slider>
      <div className='Partners'>
        {PartnerCompanies}
      </div>
      <LastSliderFull/>
      <Footer/>
    </div>
  );
}

export default App;
