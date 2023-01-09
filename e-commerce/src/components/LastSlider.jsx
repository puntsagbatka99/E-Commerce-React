export default function LastSlider(props) {
    return (
        <div style={{display:"flex"}}>
            <div style={{width:"650px", height:"369px", display: "flex", justifyContent: "space-between", alignItems: "center", border: '1px solid #C8C8C8', borderRadius: "20px", padding:"40px 17px" }}>
                <img src={props.image} alt="" />
                <div style={{width:"265px"}}>
                    <div style={{ width: '147px', height: "41p", border: "1px solid #C8C8C8", borderRadius: "20px", color: "#1B5A7D", fontSize: "20px", display:"flex", justifyContent:"center", alignItems:"center" }}>{props.date}</div>
                    <h4 style={{ color: "#1B5A7D", fontSize: "23px", fontWeight: "600" }}>{props.title}</h4>
                    <p style={{ color: "#003F62", fontSize: "13px", fontWeight: "400" }}>{props.text}</p>
                    <p style={{ color: "#003F62", fontSize: "13px", fontWeight: "400" }}>By spacing tech</p>
                </div>
            </div>
        </div>
    )
}