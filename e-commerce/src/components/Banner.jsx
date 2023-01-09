
export default function Banners(props){
    return(
            <div  style={{display:"flex"}}>
                <div style={{display:"flex"}}>
                    <img style={{width:"67px", height:"67px"}} src={props.image} alt="lol" />
                    <div>
                        <h4>{props.title}</h4>
                        <p>{props.text}</p>
                    </div>
                </div>
            </div>
        )
}