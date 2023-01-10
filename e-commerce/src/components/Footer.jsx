import { Button } from "react-bootstrap";

export default function Footer(){
    
    return(
        <footer style={{width:"100%",height:"511px", backgroundColor:"#E2F4FF",display:"flex", flexDirection:"column", alignItems:"center"}}>
            <div style={{width:"90%",height:"139px", display:"flex", justifyContent:"space-around",alignItems:"center", backgroundColor:"white", borderRadius:"20px", marginTop:"42px" }}>
                <h1 style={{color:"#1B5A7D", fontSize:"29px", fontWeight:"700"}}>Subscribe newsletter</h1>
                <div style={{display:"flex", width:"388px", height:"63px", backgroundColor:"#EDA415"}}>
                    <input type="text" placeholder="Email Address" />
                    <Button><img src="images/symbols/send.png" alt=""/></Button>
                </div>
                <div style={{display:"flex", alignItems:"center"}}>
                    <img style={{width:"38px", height:"38px", marginRight:"24px"}} src="images/symbols/headphone.png" alt="" />
                    <p style={{width:"132px", color:"#606060", fontSize:"14px", fontWeight:"600",margin:"0 auto"}}>Call us 24/7 : (+62) 0123 567 789</p>
                </div>
            </div>
            <div>
            </div>
        </footer>
    )
}