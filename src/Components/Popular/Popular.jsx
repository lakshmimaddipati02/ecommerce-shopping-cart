import React from "react";
import "./Popular.css"
import data_product from "/Users/reshu/Desktop/Dev/E-Commerce/frontend/src/Components/Assets/data.js"
import Item from "/Users/reshu/Desktop/Dev/E-Commerce/frontend/src/Components/Item/Item.jsx"
const Popular = () =>{
    return(
        <div className="popular">
            <h1>POPULAR IN WOMEN</h1>
            <hr/>
            <div className="popular-item">
                {data_product.map((item, i)=>{
                return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
                })}
            </div>
            
        </div>
    )
}

export default Popular