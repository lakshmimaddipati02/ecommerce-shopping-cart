import React from "react";
import hand_icon from '/Users/reshu/Desktop/Dev/E-Commerce/frontend/src/Components/Assets/hand_icon.png'
import arrow_icon from '/Users/reshu/Desktop/Dev/E-Commerce/frontend/src/Components/Assets/arrow.png'
import hero_image from '/Users/reshu/Desktop/Dev/E-Commerce/frontend/src/Components/Assets/hero_image.png'
import  './Hero.css'

const Hero = () =>{
    return(
        <div className="hero" >
            <div className="hero-left">
                <h2>NEW ARRIVALS ONLY</h2>
                <div>
                    <div className="hero-hand-icon">
                       <p>new</p>
                       <img src ={hand_icon} alt =""></img>
                    </div>
                
                     <p>collections</p>
                     <p>for everyone</p>
                </div>
                <div className="hero-latest-btn">
                   <div>Latest Collection</div>
                   <img src = {arrow_icon} alt =''></img>
                </div>
            </div>
            
            <div className="hero-right">
                <img src = {hero_image} alt =''></img>
            </div>
            
        </div>
    )
}

export default Hero