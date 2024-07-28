import React from "react";
import "./Offers.css"
import exculsive_image from "/Users/reshu/Desktop/Dev/E-Commerce/frontend/src/Components/Assets/exclusive_image.png"

const Offers = () =>{
    return(
        <div className="offers">
            <div className="offers-left">
                <h1>Exclusive</h1>
                <h1>Offers For You</h1>
                <p>ONLY ON BEST SELLERS PRODUCTS</p>
                <button>Check Now</button>
            </div>
            <div className="offers-right">
                <img src = {exculsive_image} alt = ''></img>
            </div>
            
        </div>
    )
}

export default Offers