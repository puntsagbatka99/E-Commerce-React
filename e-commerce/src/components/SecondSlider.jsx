export default function SecondSlider(props){
    return(
            <div style={{display:"flex", justifyContent:"space-around", height:"147px", border:"1px solid #A5A5A5", borderRadius:"20px", margin:"10px"}}>
                <img src={props.image} alt="" />
                <div style={{display:"flex", flexDirection:"column", justifyContent:"center"}}>
                    <h1 style={{color:"#1B5A7D", fontSize:"23px", fontWeight:"600"}}>{props.title}</h1>
                    <p style={{color:"#1B5A7D", fontSize:"19px", fontWeight:"500"}}>{props.items}</p>
                </div>
            </div>
    )
}