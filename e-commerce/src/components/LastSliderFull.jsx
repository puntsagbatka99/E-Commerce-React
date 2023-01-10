import Slider from "react-slick";
import lastSliderItems from "../data/lastSlider"
import LastSlider from "./LastSlider"

export default function LastSliderFull(){
    const lastSliderFull = lastSliderItems.map(items =>{
        return(
            <LastSlider image={items.image} date={items.date} title={items.title} text={items.text}/>
        )
    })
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2
      };

    return(
        <div style={{marginTop:"100px",marginBottom:"80px"}}>
            <div style={{display:"flex", justifyContent:"space-between",marginBottom:"50px"}}>
                <h1 style={{fontSize:"25px", fontWeight:"600", color:"#1B5A7D"}}>Latest News</h1>
                <h3 style={{fontSize:"20px", fontWeight:"500", color:"#1B5A7D"}}>View All</h3>
            </div>
            <Slider {...settings}>
                {lastSliderFull}
            </Slider>
        </div>
    )
}