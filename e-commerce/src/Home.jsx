import './App.css';
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
import secondSliderData from './data/secondSlider';
import SecondSlider from './components/SecondSlider';
import TopSection from "./components/AboveHeader";
import Header from "./components/Header";
import MainMenu from "./components/MainMenu";


export default function Home({addWishList, setAddWishList}) {
    
    const secondSlider = secondSliderData.map(element => {
        return (
            <SecondSlider image={element.image} title={element.title} items={element.items} />
        )
    })

    const sliderData = sliders.map(item =>
        <Sliders title={item.title} image={item.image} price={item.price} />
    )

    const banners = bannerItems.map(element =>
        <Banners image={element.image} title={element.title} text={element.text} />
    )

    const profileSection = profileData.map(item => {
        return (
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

    const PartnerCompanies = partner.map(item => {
        return (
            <Partners image={item.image} />
        )
    })
    return (
        <div className="container">
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
            <Slider {...settings} className="secondSlider">
                {secondSlider}
            </Slider>
            <div className='PPSection'>
                <PopularProducts addWishList={addWishList} setAddWishList={setAddWishList} />
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
            <LastSliderFull />
            <Footer />
        </div>
    );
}