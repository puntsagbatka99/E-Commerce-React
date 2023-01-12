import { Button } from "react-bootstrap";

export default function Footer(){
    
    return(
        <footer style={{width:"100%",height:"511px", backgroundColor:"#E2F4FF",display:"flex", flexDirection:"column", alignItems:"center"}}>
            <div style={{width:"90%",height:"139px", display:"flex", justifyContent:"space-around",alignItems:"center", backgroundColor:"white", borderRadius:"20px", marginTop:"42px" }}>
                <h1 style={{color:"#1B5A7D", fontSize:"29px", fontWeight:"700"}}>Subscribe newsletter</h1>
                <div style={{display:"flex",justifyContent:"space-between", width:"388px", height:"63px", backgroundColor:"#EDA415", borderRadius:"20px"}}>
                    <input style={{width:"100%", borderRadius:"20px",color:"white", backgroundColor:"#EDA415", border:"1px solid #EDA415"}} type="text" placeholder="Email Address" />
                    <Button style={{backgroundColor:"#EDA415", borderRadius:"20px", border:"1px solid #EDA415"}}><img src="images/symbols/send.png" alt=""/></Button>
                </div>
                <div style={{display:"flex", alignItems:"center"}}>
                    <img style={{width:"38px", height:"38px", marginRight:"24px"}} src="images/symbols/headphone.png" alt="" />
                    <p style={{width:"132px", color:"#606060", fontSize:"14px", fontWeight:"600",margin:"0 auto"}}>Call us 24/7 : (+62) 0123 567 789</p>
                </div>
            </div>
            <div style={{display:"flex", justifyContent:"space-around", width:"90%", height:"247px", marginTop:"41px"}}>
                <div>
                    <img src="images/images/logo2.png" alt="" />
                    <p style={{width:"183px", color:"#1B5A7D", fontSize:"16px", marginTop:"41px", marginBottom:"30px"}}>64 st james boulevard hoswick , ze2 7zj</p>
                    <hr />
                    <div style={{display:"flex",justifyContent:"space-around"}}>
                        <img src="images/symbols/google.png" alt="" />
                        <img src="images/symbols/facebook.png" alt="" />
                        <img src="images/symbols/whatsup.png" alt="" />
                    </div>
                </div>
                <div>
                    <h1 style={{color:"#1B5A7D", fontSize:"20px", fontWeight:"600"}}>Find Products</h1>
                    <ul>
                        <li style={{color:"#1B5A7D", fontSize:"20px", fontWeight:"400"}}>Brownze arnold</li>
                        <li style={{color:"#1B5A7D", fontSize:"20px", fontWeight:"400"}}>Chronograph blue</li>
                        <li style={{color:"#1B5A7D", fontSize:"20px", fontWeight:"400"}}>Smart phones</li>
                        <li style={{color:"#1B5A7D", fontSize:"20px", fontWeight:"400"}}>Automatic watch</li>
                        <li style={{color:"#1B5A7D", fontSize:"20px", fontWeight:"400"}}>Hair straighteners</li>
                    </ul>
                </div>
                <div>
                    <h1 style={{color:"#1B5A7D", fontSize:"20px", fontWeight:"600"}}>Get help</h1>
                    <ul>
                        <li style={{color:"#1B5A7D", fontSize:"20px", fontWeight:"400"}}>Brownze arnold</li>
                        <li style={{color:"#1B5A7D", fontSize:"20px", fontWeight:"400"}}>Chronograph blue</li>
                        <li style={{color:"#1B5A7D", fontSize:"20px", fontWeight:"400"}}>Smart phones</li>
                        <li style={{color:"#1B5A7D", fontSize:"20px", fontWeight:"400"}}>Automatic watch</li>
                        <li style={{color:"#1B5A7D", fontSize:"20px", fontWeight:"400"}}>Hair straighteners</li>
                    </ul></div>
                <div>
                <h1 style={{color:"#1B5A7D", fontSize:"20px", fontWeight:"600"}}>About us</h1>
                    <ul>
                        <li style={{color:"#1B5A7D", fontSize:"20px", fontWeight:"400"}}>Brownze arnold</li>
                        <li style={{color:"#1B5A7D", fontSize:"20px", fontWeight:"400"}}>Chronograph blue</li>
                        <li style={{color:"#1B5A7D", fontSize:"20px", fontWeight:"400"}}>Smart phones</li>
                        <li style={{color:"#1B5A7D", fontSize:"20px", fontWeight:"400"}}>Automatic watch</li>
                        <li style={{color:"#1B5A7D", fontSize:"20px", fontWeight:"400"}}>Hair straighteners</li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}