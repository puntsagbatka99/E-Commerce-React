import { Button } from "react-bootstrap";

export default function PPheaderRightSide(props){
    return(
        <Button style={{ width:"139px", heigth:"45px", borderRadius:"20px", backgroundColor:"white",border:"1px solid #003F62", fontSize:"16px", color:"black"}}>{props.title}</Button>
    )
}