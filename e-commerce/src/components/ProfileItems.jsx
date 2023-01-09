
export default function ProfileItems(props){
    
    return(
            <div style={{ width:"433px",height:"242px",  border:"1px solid #BABABA", borderRadius:"20px", padding:"17px", display:"flex", flexDirection:"column", justifyContent:"space-around"}}>
                <div style={{display:"flex", alignItems:"center"}}>
                    <img style={{border:"1px dashed #EDA415", borderRadius:"50px", padding:"5px",width:"86px", height:"86px"}} src={props.image} alt="" />
                    <h4 style={{fontSize:"16px", marginLeft:"38px", color:"#003F62"}}>{props.name}</h4>
                </div>
                <p style={{backgroundColor:"#E2F4FF", borderRadius:"20px", fontSize:"13px",fontWeight:"400", color:"#003F62", width:"395px", height:"82px", display:"flex", justifyContent:"center", alignItems:"center", padding:"17px",margin:"0 auto"}}>{props.text}</p>
            </div>
    )
}