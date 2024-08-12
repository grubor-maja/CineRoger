import React, { Component } from 'react';
import heroImage from '../img/hero-image.jpg';
import { FaStar } from "react-icons/fa";



function HeroSection({ movies }) {
    const featureMovie = movies[1];

    if (!featureMovie) {
        return <p>Loading...</p>; 
    }

    return ( 
        <>
            <div className="hero-section">
                <div className="hero-content">
                    <img src={heroImage} alt="Hero" />
                    <div className="hero-text">
                        <h1>{featureMovie.title}</h1>
                        <p>{featureMovie.review}</p>
                        <div className="title-rating">
                            {[...Array(featureMovie.rating)].map((_, index) => (
                                <FaStar key={index} size={30} fill='#F2D16B'/>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default HeroSection;