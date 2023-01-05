import Carousel from 'react-bootstrap/Carousel';
import { Button } from 'react-bootstrap';
import sliders from '../data/slider';

function Slider() {
    const slider = sliders.map((element) => {
        return (
            <div className='slider'>
                <div className='sliderLeftSide'>
                    <h1>{element.title}</h1>
                    <div>
                        <Button style={{ color: "white", backgroundColor: "#eda415", border: "1px solid #eda415", borderRadius: "20px", width: "144px", height: "61px" }}>Shop Now</Button>
                        <Button style={{ color: "#003f62", backgroundColor: "white", border: "1px solid #003f62", borderRadius: "20px", width: "144px", height: "61px" }}>View More</Button>
                    </div>
                </div>
                <div className='sliderRightSide'>
                    <div className='sliderIMG'></div>
                    {/* <img src={element.image} alt="product" /> */}
                    <div className='price' style={{ color: "white", backgroundColor: "#eda415", border: "1px solid #eda415", borderRadius: "60px", width: "115px", height: "115px" }}>{element.price}</div>
                </div>
            </div>
        )
    })
    return (
        <Carousel> {slider} </Carousel>
        // <Carousel>
        //   <Carousel.Item>
        //     <img
        //       className="d-block w-100"
        //       src=".././images/images/camera.png"
        //       alt="First slide"
        //     />
        //     <Carousel.Caption>
        //       <h3>First slide label</h3>
        //       <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        //     </Carousel.Caption>
        //   </Carousel.Item>

        // </Carousel>
    );
}

export default Slider;