import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ReactStars from "react-stars"

function ProductFunc(props) {
    
    function handleUpVote(props){
        console.log(props)
    }
    return (
        <Card style={{ width: "309px", height: "314px", position: "relative", margin: "0 auto", borderRadius: "20px", paddingTop: "10px" }}>
            <img style={{ width: "188px", height: "153px" }} src={props.image} alt="" />
            <Button onClick={() => {handleUpVote(props.id)}} id='smallHeart' style={{ position: "absolute", top: "28px", right: "40px", width: "28px", height: "28px", backgroundColor: "#B3D4E5", borderRadius: "50px", border: "1px solid #B3D4E5", display: 'flex', justifyContent: "center", alignItems: "center" }}><img style={{ width: "12px", height: "11px" }} src="images/symbols/heart.png" alt="heart" /></Button>
            <Card.Body>
                <Card.Title style={{ fontSize: "17px", color: "#003F62", fontWeight: "500" }}>{props.title}</Card.Title>
                <Card.Text style={{ fontWeight: "600", fontSize: "17px" }}>{props.price}</Card.Text>
                <ReactStars
                    count={5}
                    size={24}
                    color2={'#ffd700'} />
                <Button onClick={() => {handleUpVote(props.id)}} id='smallTruck' style={{ position: "absolute", bottom: "29px", right: "17px", width: "45px", height: "42px", backgroundColor: "#EDA415", borderRadius: "50px", border: "1px solid #EDA415", display: 'flex', justifyContent: "center", alignItems: "center" }}><img style={{ width: "17px", height: "17px" }} src="images/symbols/cart.png" alt="" /></Button>
            </Card.Body>
        </Card>

    )
}
export default ProductFunc;