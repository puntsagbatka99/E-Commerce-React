import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form"
import Footer from "./Footer";
import MainMenu from "./MainMenu";
import PiecesFunc from "./Pieces";

export default function Cart() {
    return (
        <div>
            <div className='menu-container'>
                <MainMenu />
            </div>
            <div style={{ display: "flex", alignItems: "center", height: "76px",marginBottom:"40px" }}>
                <h1 style={{ color: "#3A3A3A", fontSize: "16px", margin: "0" }}>Home</h1>
                <img style={{ widht: "24px", height: "24px", margin: "0 20px" }} src="images/symbols/rightArrow.png" alt="" />
                <h1 style={{ color: "#3A3A3A", fontSize: "16px", margin: "0" }}>All Categories</h1>
                <img style={{ widht: "24px", height: "24px", margin: "0 20px" }} src="images/symbols/rightArrow.png" alt="" />
            </div>
            <div style={{ display: "flex", justifyContent: "space-between" , marginBottom:"100px"}}>
                <div style={{ width: "865px", height: "500px" }}>
                    <div style={{ backgroundColor: "#E2F4FF", display: "flex", justifyContent: "space-around", alignItems: "center", color: "#232323", height: "56px" }}>
                        <div style={{ display: "flex", width: "285px", margin: "0" }}>
                            <p style={{ margin: "0" }}>Product</p>
                            <p></p>
                        </div>
                        <p style={{ width: "67px", textAlign: "center", margin: "0" }}>Price</p>
                        <p style={{ width: "133px", textAlign: "center", margin: "0" }}>Quantity</p>
                        <p style={{ width: "67px", textAlign: "center", margin: "0" }}>Subtotal</p>
                    </div>
                    <div style={{height:"444px" ,display:"flex", flexDirection:"column", justifyContent:"space-around"}}>
                        <div style={{ display: "flex", justifyContent: "space-around", alignItems: "center", height: "119px" }}>
                            <div style={{ width: "285px", height: "119px", display: "flex" }}>
                                <img style={{ width: "136px", height: "119px" }} src="images/images/game2.png" alt="" />
                                <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-around" }}>
                                    <h2 style={{ color: "#003F62", fontWeight: "600", fontSize: "21px" }}>Play Game</h2>
                                    <p style={{ margin: "0" }}>Color: Green</p>
                                    <p style={{ margin: "0" }}>Size: 30</p>
                                </div>
                            </div>
                            <p style={{ width: "67px", textAlign: "center" }}>$11,70</p>
                            <PiecesFunc />
                            <p style={{ width: "67px", textAlign: "center" }}>$11,70</p>
                        </div>
                        <hr style={{ width: "870px" }} />
                        <div style={{ display: "flex", justifyContent: "space-around", alignItems: "center", height: "119px" }}>
                            <div style={{ width: "285px", height: "119px", display: "flex" }}>
                                <img style={{ width: "136px", height: "119px" }} src="images/images/game2.png" alt="" />
                                <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-around" }}>
                                    <h2 style={{ color: "#003F62", fontWeight: "600", fontSize: "21px" }}>Play Game</h2>
                                    <p style={{ margin: "0" }}>Color: Green</p>
                                    <p style={{ margin: "0" }}>Size: 30</p>
                                </div>
                            </div>
                            <p style={{ width: "67px", textAlign: "center" }}>$11,70</p>
                            <PiecesFunc />
                            <p style={{ width: "67px", textAlign: "center" }}>$11,70</p>
                        </div>
                        <hr style={{ width: "870px" }} />
                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                            <button style={{ width: '295px', height: "73px", backgroundColor: "#EDA415", border: '1px solid #EDA415', borderRadius: "30px", fontSize: "23px", fontWeight: "600", color: "white" }}>Continue shopping</button>
                            <button style={{ width: '223px', height: "73px", backgroundColor: "white", border: '1px solid #A9A9A9', borderRadius: "30px", fontSize: "23px", fontWeight: "600", color: "#797979" }}>Update cart</button>
                            <button style={{ width: '223px', height: "73px", backgroundColor: "white", border: '1px solid #C33131', borderRadius: "30px", fontSize: "23px", fontWeight: "600", color: "#C33131" }}>Clear cart</button>
                        </div>
                    </div>
                </div>
                <div style={{ width: "415px", height: "500px", border: "1px solid #C3C3C3" }}>

                    <div style={{ backgroundColor: "#E2F4FF", display: "flex", justifyContent: "center", alignItems: "center", color: "#232323", height: "56px" }}>
                        Cart tool
                    </div>
                    <div style={{ height: "444px", display: "flex", flexDirection: "column", justifyContent: "space-around" }}>
                        <div style={{ display: "flex", justifyContent: "space-between", width: '333px', margin: "0 auto" }}>
                            <p style={{ margin: "0" }}>Subtotal</p>
                            <p style={{ margin: "0" }}>$23,20</p>
                        </div>
                        <hr style={{ width: "333px", margin: "0 auto" }} />
                        <div style={{ display: "flex", justifyContent: "space-between", height: "54px", backgroundColor: "white", borderRadius: "20px", border: "1px solid #DFDFDF", width: '333px', margin: "0 auto" }}>
                            <input style={{ width: "100%", borderRadius: "20px", color: "white", backgroundColor: "white", border: "1px solid white" }} type="text" placeholder="Enter coupon code" />
                            <Button style={{ backgroundColor: "white", borderRadius: "20px", border: "1px solid white", color: "#003F62" }}>Apply</Button>
                        </div>
                        <hr style={{ width: "333px", margin: "0 auto" }} />
                        <Form.Select style={{ height: "54px", backgroundColor: "white", borderRadius: "20px", border: "1px solid #DFDFDF", width: '333px', margin: "0 auto" }}>
                            <option>Country</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </Form.Select>

                        <div style={{ display: "flex", justifyContent: "space-between", width: '333px', margin: "0 auto" }}>
                            <p>Total amount</p>
                            <p>$23,20</p>
                        </div>
                        <button style={{ width: '339px', height: "52px", backgroundColor: "#EDA415", border: '1px solid #EDA415', borderRadius: "30px", fontSize: "21px", fontWeight: "600", color: "white", width: '333px', margin: "0 auto" }}>Proceed to checkout</button>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}