
import { Button } from 'react-bootstrap';

function Sliders(props) {
    return (
        
        <div className='slider'>
            <div className='sliderLeftSide'>
                <h1 style={{color: "#1B5A7D", fontSize: "43px", fontWeight: "700", width:"200px"}}>{props.title}</h1>
                <div className='sliderBtn'>
                    <Button style={{ color: "white", backgroundColor: "#eda415", border: "1px solid #eda415", borderRadius: "20px", width: "144px", height: "61px" }}>Shop Now</Button>
                    <Button style={{ color: "#003f62", backgroundColor: "white", border: "1px solid #003f62", borderRadius: "20px", width: "144px", height: "61px" }}>View More</Button>
                </div>
            </div>
            <div className='sliderRightSide'>
                {/* <div className='sliderIMG'></div> */}
                <img src={props.image} alt="product" />
                <div className='price' style={{ color: "white", backgroundColor: "#eda415", border: "1px solid #eda415", borderRadius: "60px", width: "115px", height: "115px" }}>{props.price}</div>
            </div>
        </div>
    )
}

export default Sliders;