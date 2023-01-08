import { Button } from "react-bootstrap"
import StarRating from 'react-bootstrap-star-rating';

export default function SpeakerSection() {
    return (
        <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div style={{ display: "flex", width: "59%", height: "505px", border: "1px solid #B6B6B6", borderRadius: "20px" }}>
                <img src="images/images/speaker.png" alt="speaker" />
                <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
                    <h4 style={{ fontSize: "21px", fontWeight: "600", color: "#003F62" }}>JBL bar 2.1 deep bass</h4>
                    <p style={{ fontSize: "17px", fontWeight: "600", color: "#4A4A4A" }}>$11,70</p>
                    <StarRating
                        defaultValue={5}
                        min={0}
                        max={10}
                        step={0.5} />
                    <Button style={{ display: "flex", justifyContent: "space-around", alignItems: "center", width: "205px", height: "60px", backgroundColor: "#87BCD9", border: "1px solid #87BCD9", borderRadius: "20px", fontSize: "16px", fontWeight: "600", color: "black", textAlign: "start" }}>Add to Cart <div style={{ display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "#EDA415", width: "31px", height: "31px", borderRadius: "50px" }}><img style={{ width: "17px", height: "17px" }} src="images/symbols/truck.png" alt="" /></div></Button>
                </div>
            </div>
            <div style={{ width: "39%" }}>
                <div style={{ display: "flex", height: "241px", border: "1px solid #B6B6B6", borderRadius: "20px" }}>
                    <img src="images/images/game.png" alt="speaker" />
                    <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
                        <h4 style={{ fontSize: "17px", fontWeight: "500", color: "#003F62" }}>Play Game</h4>
                        <p style={{ fontSize: "17px", fontWeight: "500", color: "#4A4A4A" }}>$11,70</p>
                        <StarRating
                            defaultValue={5}
                            min={0}
                            max={10}
                            step={0.5} />
                    </div>
                </div>
                <div style={{ display: "flex", height: "241px", border: "1px solid #B6B6B6", borderRadius: "20px" }}>
                    <img src="images/images/laptop.png" alt="speaker" />
                    <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
                        <h4 style={{ fontSize: "17px", fontWeight: "500", color: "#003F62" }}>Play Game</h4>
                        <p style={{ fontSize: "17px", fontWeight: "500", color: "#4A4A4A" }}>$11,70</p>
                        <StarRating
                            defaultValue={5}
                            min={0}
                            max={10}
                            step={0.5} />
                    </div>
                </div>
            </div>
        </div>
    )
}