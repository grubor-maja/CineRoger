import React, { Component } from 'react';
import heroImage from '../img/hero-image.jpg';
import { FaStar } from "react-icons/fa";



function HeroSection({movies}) {
    const featureMovie = movies[1];

    const stars = [];
    for (let i = 0; i < featureMovie.rating; i++) {
        stars.push(<FaStar key={i} size={30} fill='#F2D16B' />);
    }

    return (
        <>
        <div className="hero-section">
            <div className="hero-content">
            <img src={featureMovie.image} alt="Hero" />
            <div className="hero-text">
                <h1>{featureMovie.title}</h1>
                <p>{featureMovie.review}</p>
                <div className="title-rating">
                {stars}
                </div>
            </div>
            </div>
        </div>
        </>
    );
}

export default HeroSection;