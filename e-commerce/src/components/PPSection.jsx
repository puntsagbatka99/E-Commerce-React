import PPItems from "../data/popularProductItems";
import PopularProducts from "./PopularProducts";


export default function PPSection() {
    const PPItem = PPItems.map(items =>{
        console.log(PPItem)
        return(
            <PopularProducts image={items.image} title={items.title} price={items.price}/>
        )
    })

    return(
        {PPItem}
    )
}