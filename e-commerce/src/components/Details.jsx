
import { Button } from "react-bootstrap";
import TopSection from "./AboveHeader";
import Header from "./Header";
import MainMenu from "./MainMenu";
import ReactStars from "react-stars";
import CheckInlineExample from "./DetailsChecker";
import PiecesFunc from "./Pieces";
import { Card } from "react-bootstrap";
import Footer from "./Footer";

export default function DetailPage() {
    return (
        <div>
            <TopSection />
            <Header />
            <div className='menu-container'>
                <MainMenu />
            </div>
            <div style={{ display: "flex", alignItems: "center", height: "76px" }}>
                <h1 style={{ color: "#3A3A3A", fontSize: "16px", margin: "0" }}>Home</h1>
                <img style={{ widht: "24px", height: "24px", margin: "0 20px" }} src="images/symbols/rightArrow.png" alt="" />
                <h1 style={{ color: "#3A3A3A", fontSize: "16px", margin: "0" }}>All Categories</h1>
                <img style={{ widht: "24px", height: "24px", margin: "0 20px" }} src="images/symbols/rightArrow.png" alt="" />
            </div>
            <div style={{ display: "flex", justifyContent: 'space-between' }}>
                <div style={{ width: "47%" }}>
                    <img style={{ width: "647px", height: "561px" }} src="images/images/game2.png" alt="" />
                    <div style={{ display: "flex", justifyContent: "space-between", width: "647px", marginTop: "20px" }}>
                        <img src="images/images/game3.png" alt="" />
                        <img src="images/images/game3.png" alt="" />
                    </div>
                </div>
                <div style={{ width: "47%", height: "740px", display: "flex", justifyContent: "space-between", flexDirection: "column" }}>
                    <h1 style={{ color: "#003F62", fontSize: "30px" }}>Play Game</h1>
                    <p style={{ color: "#4A4A4A", fontSize: "30px" }}>$11,70</p>
                    <ReactStars
                        count={5}
                        size={21}
                        color2={'#ffd700'} />
                    <div style={{ display: "flex" }}>
                        <p style={{ margin: "0" }}>Availability:</p>
                        <div style={{ display: "flex", alignItems: "center" }}>
                            <img style={{ width: "20px", height: "14px", margin: "0 15px" }} src="images/symbols/correct.png" alt="" />
                            <p style={{ color: "#30BD57", margin: "0" }}>In stock</p>
                        </div>
                    </div>
                    <p style={{ color: "#5D5D5D" }}>Hurry up! only 34 product left in stock! dfasdfasdfasdfsadf</p>
                    <hr />
                    <div style={{ display: "flex", alignItems: "center" }}>
                        <p style={{ margin: "0", marginRight: "20px" }}>Color :</p>
                        <CheckInlineExample />
                    </div>
                    <div style={{ display: "flex", alignItems: "center" }}>
                        <p style={{ margin: "0", marginRight: "15px" }}>Size :</p>
                        <button style={{ color: "black", border: "1px solid gray", width: "63px", height: "32px", fontSize: "18px", marginRight: "15px" }}>30</button>
                        <button style={{ color: "black", border: "1px solid #EEEEEE", width: "63px", height: "32px", fontSize: "18px", marginRight: "15px" }}>42</button>
                        <button style={{ color: "black", border: "1px solid #EEEEEE", width: "63px", height: "32px", fontSize: "18px", marginRight: "15px" }}>48</button>
                        <button style={{ color: "black", border: "1px solid #EEEEEE", width: "63px", height: "32px", fontSize: "18px", marginRight: "15px" }}>56</button>
                    </div>
                    <div>
                        <PiecesFunc />
                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                            <Button style={{ color: "white", backgroundColor: "#eda415", border: "1px solid #eda415", borderRadius: "50px", width: "241px", height: "73px", fontSize: "23px", fontWeight: "600" }}>Add to cart</Button>
                            <Button style={{ color: "white", backgroundColor: "#eda415", border: "1px solid #eda415", borderRadius: "50px", width: "241px", height: "73px", fontSize: "23px", fontWeight: "600" }}>Buy it now</Button>
                            <Button style={{ backgroundColor: "#EEEEEE", width: "74px", height: "73px", borderRadius: "50px", border: "1px solid #eeeeee" }}><img style={{ width: "30px", height: "27px" }} src="images/symbols/heart2.png" alt="" /></Button>
                        </div>
                    </div>
                    <hr />
                    <div>
                        <div style={{ display: "flex" }}>
                            <p style={{ margin: "0", marginRight: "20px", fontSize: "18px", color: "#232323" }}>Sku : </p>
                            <p>01133-9-9</p>
                        </div>
                        <div style={{ display: "flex" }}>
                            <p style={{ margin: "0", marginRight: "20px", fontSize: "18px", color: "#232323" }}>Category : </p>
                            <p style={{ fontSize: "#13px", color: "#434343", fontWeight: "400" }}>20% off,  49% off,  Alex remote</p>
                        </div>
                        <div style={{ display: "flex", alignItems: "center" }}>
                            <p style={{ margin: "0", marginRight: "20px", fontSize: "18px", color: "#232323" }}>Share : </p>
                            <div style={{ display: "flex", justifyContent: "space-around" }}>
                                <img style={{ width: "20px", height: "20px", marginRight: "30px" }} src="images/symbols/google.png" alt="" />
                                <img style={{ width: "20px", height: "20px", marginRight: "30px" }} src="images/symbols/facebook.png" alt="" />
                                <img style={{ width: "20px", height: "20px", marginRight: "30px" }} src="images/symbols/whatsup.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{ display: "flex", justifyContent: "center", marginTop: "70px", marginBottom: "40px" }}>
                <Button style={{ color: "#373737", backgroundColor: "white", border: "1px solid #1E1E1E", borderRadius: "20px", width: "187px", height: "60px", fontSize: "21px", fontWeight: "500", marginRight: "8px" }}>Description</Button>
                <Button style={{ color: "white", backgroundColor: "#003F62", border: "1px solid #003F62", borderRadius: "20px", width: "187px", height: "60px", fontSize: "21px", fontWeight: "500", marginLeft: "8px" }}>Reviews</Button>
            </div>
            <div style={{ borderRadius: "20px", border: "1px solid #1E1E1E", height: "223px", display: "flex", flexDirection: "column", justifyContent: "center", paddingLeft: "40px" }}>
                <h1 style={{ fontSize: "23px", fontWeight: "600", color: "#003F62" }}>Customer reviews</h1>
                <p style={{ color: "#4F4F4F", fontSize: "19.5px" }}>No reviews yet</p>
                <div style={{ backgroundColor: "#003f62", width: "196px", height: "40px", display: "flex", justifyContent: "center", alignItems: "center" }} ><a style={{ backgroundColor: "#003F62", color: "white" }} href="#">Write a review</a></div>
            </div>
            <h1 style={{ color: "#1B5A7D", fontSize: "27px", fontWeight: "600", margin: "70px 0px" }}>Related product</h1>
            <div style={{display:"flex", marginBottom:"100px"}}>
                <Card style={{ width: "309px", height: "314px", position: "relative", margin: "0 auto", borderRadius: "20px", paddingTop: "10px" }}>
                    <img style={{ width: "188px", height: "170px", margin:"0 auto" }} src="images/images/camera2.png" alt="" />
                    <Button id='smallHeart' style={{ position: "absolute", top: "28px", right: "40px", width: "28px", height: "28px", backgroundColor: "#B3D4E5", borderRadius: "50px", border: "1px solid #B3D4E5", display: 'flex', justifyContent: "center", alignItems: "center" }}><img style={{ width: "12px", height: "11px" }} src="images/symbols/heart.png" alt="heart" /></Button>
                    <div style={{display:"flex", justifyContent:"space-around", marginTop:"50px"}}>
                        <Button style={{ display: "flex", justifyContent: "space-around", alignItems: "center", width: "205px", height: "60px", backgroundColor: "#87BCD9", border: "1px solid #87BCD9", borderRadius: "20px", fontSize: "16px", fontWeight: "600", color: "black", textAlign: "start" }}>Add to Cart <div style={{ display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "#EDA415", width: "31px", height: "31px", borderRadius: "50px" }}><img style={{ width: "17px", height: "17px" }} src="images/symbols/truck.png" alt="" /></div></Button>
                        <Button style={{display:"flex", justifyContent:"center", alignItems:"center", width:"71px", height:"60px", backgroundColor:"#87BCD9", border:"1px solid #87bcd9", borderRadius:"20px"}}><img src="images/symbols/eyes.png" alt="" /></Button>
                    </div>
                </Card>
                <Card style={{ width: "309px", height: "314px", position: "relative", margin: "0 auto", borderRadius: "20px", paddingTop: "10px" }}>
                    <img style={{ width: "188px", height: "170px", margin:"0 auto" }} src="images/images/laptop.png" alt="" />
                    <Button id='smallHeart' style={{ position: "absolute", top: "28px", right: "40px", width: "28px", height: "28px", backgroundColor: "#B3D4E5", borderRadius: "50px", border: "1px solid #B3D4E5", display: 'flex', justifyContent: "center", alignItems: "center" }}><img style={{ width: "12px", height: "11px" }} src="images/symbols/heart.png" alt="heart" /></Button>
                    <Card.Body>
                        <Card.Title style={{ fontSize: "17px", color: "#003F62", fontWeight: "500" }}>Notebook</Card.Title>
                        <Card.Text style={{ fontWeight: "600", fontSize: "17px" }}>$11,70</Card.Text>
                        <ReactStars
                            count={5}
                            size={24}
                            color2={'#ffd700'} />
                    </Card.Body>
                </Card>
                <Card style={{ width: "309px", height: "314px", position: "relative", margin: "0 auto", borderRadius: "20px", paddingTop: "10px" }}>
                    <img style={{ width: "188px", height: "170px", margin:"0 auto" }} src="images/images/headphones.png" alt="" />
                    <Button id='smallHeart' style={{ position: "absolute", top: "28px", right: "40px", width: "28px", height: "28px", backgroundColor: "#B3D4E5", borderRadius: "50px", border: "1px solid #B3D4E5", display: 'flex', justifyContent: "center", alignItems: "center" }}><img style={{ width: "12px", height: "11px" }} src="images/symbols/heart.png" alt="heart" /></Button>
                    <Card.Body>
                        <Card.Title style={{ fontSize: "17px", color: "#003F62", fontWeight: "500" }}>Wireless headphones</Card.Title>
                        <Card.Text style={{ fontWeight: "600", fontSize: "17px" }}>$11,70</Card.Text>
                        <ReactStars
                            count={5}
                            size={24}
                            color2={'#ffd700'} />
                    </Card.Body>
                </Card>
                <Card style={{ width: "309px", height: "314px", position: "relative", margin: "0 auto", borderRadius: "20px", paddingTop: "10px" }}>
                    <img style={{ width: "188px", height: "170px", margin:"0 auto" }} src="images/images/game.png" alt="" />
                    <Button id='smallHeart' style={{ position: "absolute", top: "28px", right: "40px", width: "28px", height: "28px", backgroundColor: "#B3D4E5", borderRadius: "50px", border: "1px solid #B3D4E5", display: 'flex', justifyContent: "center", alignItems: "center" }}><img style={{ width: "12px", height: "11px" }} src="images/symbols/heart.png" alt="heart" /></Button>
                    <Card.Body>
                        <Card.Title style={{ fontSize: "17px", color: "#003F62", fontWeight: "500" }}>Controller</Card.Title>
                        <Card.Text style={{ fontWeight: "600", fontSize: "17px" }}>$11,70</Card.Text>
                        <ReactStars
                            count={5}
                            size={24}
                            color2={'#ffd700'} />
                    </Card.Body>
                </Card>
            </div>
            <Footer/>
        </div>
    )
}