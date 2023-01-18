import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ReactStars from "react-stars"
import { Link } from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify';

function ProductFunc(props) {
    const [heart, setHeart] = useState(false)
    function handleUpVote(id) {
        setHeart(!heart);
        if (id === props.id) {
            props.setAddWishList([...props.addWishList, { title: props.title, price: props.price, image: props.image}]);
        };

        if(heart){
            toast("Wishlist-ээс амжилттай хасагдлаа.")
        } else {
            toast("Wishlist-рүү амжилттай нэмэгдлээ.")
        }
    }
    return (
        <Card style={{ width: "309px", height: "314px", position: "relative", margin: "0 auto", borderRadius: "20px", paddingTop: "10px" }}>
            <img style={{ width: "188px", height: "153px" }} src={props.image} alt="" />
            <Button onClick={() => { handleUpVote(props.id) }} id='smallHeart' style={{ position: "absolute", top: "28px", right: "40px", width: "28px", height: "28px", backgroundColor: "#B3D4E5", borderRadius: "50px", border: "1px solid #B3D4E5", display: 'flex', justifyContent: "center", alignItems: "center" }}>
                {heart ? <img style={{ width: "12px", height: "11px", backgroundColor: 'red', borderRadius:"50px" }} src="images/symbols/heart.png" alt="heart"/> : <img style={{ width: "12px", height: "11px" }} src="images/symbols/heart.png" alt="heart" />}
            </Button>
            <Card.Body>
                <Card.Title style={{ fontSize: "17px", color: "#003F62", fontWeight: "500" }}>{props.title}</Card.Title>
                <Card.Text style={{ fontWeight: "600", fontSize: "17px" }}>{props.price}</Card.Text>
                <ReactStars
                    count={5}
                    size={24}
                    color2={'#ffd700'} />
                <Link to={"/detail-page"}><Button onClick={() => { handleUpVote(props.id) }} id='smallTruck' style={{ position: "absolute", bottom: "29px", right: "17px", width: "45px", height: "42px", backgroundColor: "#EDA415", borderRadius: "50px", border: "1px solid #EDA415", display: 'flex', justifyContent: "center", alignItems: "center" }}><img style={{ width: "17px", height: "17px" }} src="images/symbols/cart.png" alt="" />
                </Button></Link>
            </Card.Body>
            <ToastContainer/>
        </Card>

    )
}
export default ProductFunc;