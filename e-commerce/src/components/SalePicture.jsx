import { Button } from "react-bootstrap"

export default function SalePic(){
    return(
        <div className="salePicture">
            <div style={{width:"50%",display:"flex", flexDirection:"column", justifyContent:"space-around", alignItems:"center", padding:"70px 0"}} className="saleText">
                <Button style={{width: '134px', heigth:'45px', borderRadius:"20px", backgroundColor:"#EDA415", border:"1px solid #EDA415", color: "white", fontSize:"14px"}} >New Laptop</Button>
                <h1 style={{fontSize: "41px", fontWeight:"700", color:"#2E8FC5", }}>Sale up to 50% off</h1>
                <p style={{fontSize: "18px", fontWeight:"500", color:"white", }}>12 inch hd display</p>
                <Button style={{width: '134px', heigth:'45px', borderRadius:"20px", backgroundColor:"#EDA415", border:"1px solid #EDA415", color: "white", fontSize:"14px"}}>Shop Now</Button>
            </div>
        </div>
    )
}