
const subPPItem = ((props) => {
    return (
        <div>
            <div className="smallHeart"><img src="" alt="" /></div>
            <div className="smallTruck"><img src="" alt="" /></div>
            <img src={props.image} alt="" />
            <h4>{props.title}</h4>;
            <p>{props.price}</p>;
        </div>
    )
})

export default subPPItem;
