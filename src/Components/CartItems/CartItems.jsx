import React, {  useContext } from "react";
import './CartItems.css'
import { ShopContext } from "../Context/ShopContext";
import remove_icon from '../Assets/cart_cross_icon.png'

const CartItems = () =>{
    const{all_product,cartIems,removeFromCart} = useContext(ShopContext)
    return(
        <div className="cartitems">
            <div className="cartitems-format-main">
                <p>Product</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr/>
            {all_product.map((e)=>{
                if(cartIems && cartIems[e.id]>0)
                {
                    return <div>
                                <div className="cartitems-format">
                                    <img src={e.image} alt='' className="carticon-product-icon"/>
                                    <p>{e.name}</p>
                                    <p>${e.new_price}</p>
                                    <button className="cartitems-quantity">{cartIems[e.id]}</button>
                                    <p>{e.new_price*cartIems[e.id]}</p>
                                    <img src={remove_icon} onClick={()=>{removeFromCart(e.id)}} alt='' />
                                </div>
                                <hr/>
                            </div>
                }
            })}
                        
        </div>
    )
}

export default CartItems