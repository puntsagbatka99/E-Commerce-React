import AliceCarousel from "react-alice-carousel";
import { Carousel } from "react-bootstrap";
import PPItems from "../data/popularProductItems";
import subPPItem from "./PopularProducts";


export default function PPSection() {
    const PPItem = PPItems.map(items =>{
        
        return(
            <subPPItem image={items.image} title={items.title} price={items.price}/>
        )
        console.log(PPItem)
    })

    return(
        <div>{PPItem}</div>
    )
}
