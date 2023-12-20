import React from 'react'
import './Hero.css'

import hero_image from '../assets/Assets/hero_image.png'
import arrow from '../assets/Assets/arrow.png'


const Hero = () => {
    return (
        <div className='hero'>
            <div className="hero-left">
                <h2>New Arrivals Only!!!</h2>
                <div>
                    <div className="hero-hand-icon">
                        <p>New</p>
                    </div>
                    <p>collectoins</p>
                    <p>For Everyone</p>
                    <div className="hero-latest-btn">
                        <div>
                        <span>Latest Collection     &nbsp;&nbsp;</span>
                            <img src={arrow} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="hero-right">
                <img src={hero_image} alt="" />
            </div>


        </div>
    )
}

export default Hero