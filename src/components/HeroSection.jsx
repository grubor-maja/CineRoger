import React, { Component } from 'react';
import heroImage from '../img/hero-image.jpg';
import { FaStar } from "react-icons/fa";



function HeroSection() {
    return ( <>
    <div className="hero-section">
        <div className="hero-content">
            <img src={heroImage} alt="Hero" />
            <div className="hero-text">
                <h1>Featured movie</h1>
                <p>Sed suscipit luctus massa, nec pulvinar velit auctor rhoncus. Cras consectetur lacus ultrices odio pretium tempor sed volutpat neque. Morbi posuere tincidunt convallis. Nulla bibendum sapien nisi, eu interdum massa blandit sit amet. Nunc tristique, ex quis dignissim sagittis, urna dui porta nisi, n erat..</p>
                <div className="title-rating">
                    <FaStar size={30} fill='#F2D16B'/>
                    <FaStar size={30} fill='#F2D16B'/>
                    <FaStar size={30} fill='#F2D16B'/>
                    <FaStar size={30} fill='#F2D16B'/>
                </div>
            </div>

        </div>
    </div>
    </> );
}

export default HeroSection;