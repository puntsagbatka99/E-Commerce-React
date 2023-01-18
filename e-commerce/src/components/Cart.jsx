import TopSection from "./AboveHeader";
import Header from "./Header";
import MainMenu from "./MainMenu";
import PiecesFunc from "./Pieces";

export default function Cart() {
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
            <div>
                <div>
                    <div style={{ backgroundColor: "#E2F4FF", display: "flex", justifyContent: "space-around", alignItems: "center", color: "#232323", width: "872px", height: "56px" }}>
                        <div style={{ display: "flex", width: "285px" }}>
                            <p>Product</p>
                            <p></p>
                        </div>
                        <p style={{width:"67px", textAlign:"center"}}>Price</p>
                        <p style={{width:"133px", textAlign:"center"}}>Quantity</p>
                        <p style={{width:"67px", textAlign:"center"}}>Subtotal</p>
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-around",alignItems:"center", width: "872px", height: "119px" }}>
                        <div style={{ width: "285px", height: "119px", display: "flex" }}>
                            <img style={{ width: "136px", height: "119px" }} src="images/images/game2.png" alt="" />
                            <div style={{display:"flex", flexDirection:"column", justifyContent:"space-around"}}>
                                <h2 style={{color:"#003F62", fontWeight:"600", fontSize:"21px"}}>Play Game</h2>
                                <p style={{margin:"0"}}>Color: Green</p>
                                <p style={{margin:"0"}}>Size: 30</p>
                            </div>
                        </div>
                        <p style={{width:"67px", textAlign:"center"}}>$11,70</p>
                        <PiecesFunc />
                        <p style={{width:"67px", textAlign:"center"}}>$11,70</p>
                    </div>
                    <hr style={{width:"872px"}}/>
                    <div style={{ display: "flex", justifyContent: "space-around",alignItems:"center", width: "872px", height: "119px" }}>
                        <div style={{ width: "285px", height: "119px", display: "flex" }}>
                            <img style={{ width: "136px", height: "119px" }} src="images/images/game2.png" alt="" />
                            <div style={{display:"flex", flexDirection:"column", justifyContent:"space-around"}}>
                                <h2 style={{color:"#003F62", fontWeight:"600", fontSize:"21px"}}>Play Game</h2>
                                <p style={{margin:"0"}}>Color: Green</p>
                                <p style={{margin:"0"}}>Size: 30</p>
                            </div>
                        </div>
                        <p style={{width:"67px", textAlign:"center"}}>$11,70</p>
                        <PiecesFunc />
                        <p style={{width:"67px", textAlign:"center"}}>$11,70</p>
                    </div>
                    <hr style={{width:"872px"}}/>
                </div>
                <div></div>
            </div>
        </div>
    )
}