
import PPItems from "../data/popularProductItems"
import PPhead from "../data/PPhead"
import ProductFunc from "./PopularProducts"
import PPheaderRightSide from "./PPheader"


function PopularProducts({addWishList, setAddWishList}) {
    // const PopularProductItemFunc = PPItems.map(element => {
    //     return (
    //         <ProductFunc title={element.title} price={element.price} image={element.image} id={element.id} addWishList={addWishList} setAddWishList={setAddWishList}/>
    //     )
    // })
    const PPheader = PPhead.map(items => {
        return(
        <PPheaderRightSide title={items.title} />
        )
    })

    return (
        <div className="row">
            <div style={{display:"flex", justifyContent:"space-between", marginBottom:"50px"}}>
                <h2 style={{ color: "#1B5A7D", fontSize: "28px", fontWeight: "500" }}>Popular Products</h2>
                <div>
                    {PPheader}
                </div>
            </div>
            <>
            {PPItems.map(element => {
                return (
                    <ProductFunc title={element.title} price={element.price} image={element.image} id={element.id} addWishList={addWishList} setAddWishList={setAddWishList}/>
                )})
            }
            </>
        </div>
    )
}
export default PopularProducts;