import { useState } from "react";

export default function PiecesFunc() {
    const [number, setNumber] = useState(1);

    function AddPieces() {
        setNumber(number + 1)
    }
    function MinusPieces() {
        setNumber(number - 1)
    }
    return (

        <div style={{ display: "flex" }}>
            <p style={{ marginRight: "20px" }}>Quantity :</p>
            <div style={{ display: "flex" }}>
                <button style={{ border: "1px solid gray", width: "35px", height: "32px" }} onClick={() => MinusPieces()}>-</button>
                <p style={{ display: "flex", justifyContent: "center", alignItems: "center", border: "1px solid #434343", width: "63px", height: "32px", fontSize: "18px", backgroundColor: "#EEEEEE" }}>{number}</p>
                <button onClick={() => AddPieces()} style={{ border: "1px solid gray", width: "35px", height: "32px" }}>+</button>
            </div>
        </div>
    )
}