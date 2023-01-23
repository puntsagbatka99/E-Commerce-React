import { useState } from 'react';
import { useParams } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ReactStars from "react-stars"
import { Link } from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify';
import PPItems from '../data/popularProductItems';
import { Heart, HeartFill } from "react-bootstrap-icons";

function ProductFunc(props) {
    const { id } = useParams();
    let foundProduct = {};
    if (id) {
        foundProduct = PPItems.filter((product) => {
            if (product.id == id) {
                return product;
            }
        })[0];
    }
    if (Object.keys(props).length > 0) {
        foundProduct = props.product;
    }

    const product = foundProduct;

    const liked = props.wishlist.filter(wish => wish.id === product.id)[0];

    return (
        <Card style={{ width: "309px", height: "314px", position: "relative", margin: "0 auto", borderRadius: "20px", paddingTop: "10px" }}>
            <img style={{ width: "188px", height: "153px" }} src={props.image} alt="" />
            <Button onClick={() => {
                console.log("heart clicked");
                // setLiked(!liked)
                if (!liked) {
                    props.setWishlist([...props.wishlist, product])
                } else {
                    props.setWishlist(
                        props.wishlist.filter(w => w.id !== product.id)
                    );
                }
            }} id='smallHeart' style={{ position: "absolute", top: "28px", right: "40px", width: "28px", height: "28px", backgroundColor: "#B3D4E5", borderRadius: "50px", border: "1px solid #B3D4E5", display: 'flex', justifyContent: "center", alignItems: "center" }}>
                {liked ? <i style={{width:"18px", height:"18px", color:"red"}}><HeartFill/></i> :  <i style={{width:"18px", height:"18px"}}><Heart/></i> }
            </Button>
            <Card.Body>
                <Card.Title style={{ fontSize: "17px", color: "#003F62", fontWeight: "500" }}>{props.title}</Card.Title>
                <Card.Text style={{ fontWeight: "600", fontSize: "17px" }}>{props.price}</Card.Text>
                <ReactStars
                    count={5}
                    size={24}
                    color2={'#ffd700'} />
                <Link to={"/detail-page"}><Button id='smallTruck' style={{ position: "absolute", bottom: "29px", right: "17px", width: "45px", height: "42px", backgroundColor: "#EDA415", borderRadius: "50px", border: "1px solid #EDA415", display: 'flex', justifyContent: "center", alignItems: "center" }}><img style={{ width: "17px", height: "17px" }} src="images/symbols/cart.png" alt="" />
                </Button></Link>
            </Card.Body>
            <ToastContainer />
        </Card>

    )
}
export default ProductFunc;