import React from "react";
import './DescriptionBox.css'

const DescriptionBox =()=>{
    return(
        <div className="descriptionbox">
            <div className="descriptionbox-navigator">
                <div className="descriptionbox-nav-box">Description</div>
                <div className="descriptionbox-nav-box fade">Reviews (122)</div>
            </div>
            <div className="decriptionbox-descrition">
                <p>An ecommerce website is an online store where customers can 
                    find products, browse offerings, and place purchases online. 
                    It facilitates the transaction between a buyer and seller. 
                    A digital storefront can serve as the virtual equivalent of the 
                    product shelves, sales staff, and cash register of a physical shop.
                </p>
                <p>
                At its core, electronic commerce or e-commerce is simply the buying and 
                selling of goods and services using the internet, when shopping online. 
                However, the term is often used to describe all of a seller's efforts, 
                when selling products directly to consumers.
                </p>
            </div>

        </div>
    )
}

export default DescriptionBox