import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from './Header';
import Navbar from './Navbar';
import Footer from './Footer';

function Review() {
    const location = useLocation();
    const { movie } = location.state;

    return (
        <>
            <Header />
            <Navbar />
            <div className="review-container">
                <div className="review-heading">
                    <h1>{movie.title}</h1>
                </div>
                <img src={movie.image} alt={movie.title} className="review-image" />
                <div className="review-content">
                    <p>{movie.review}</p>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Review;
