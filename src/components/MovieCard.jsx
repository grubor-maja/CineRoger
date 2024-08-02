import React from 'react';
import { FaStar } from 'react-icons/fa';

function MovieCard({ movie }) {

    const stars =[];
    for(let i=0;i<movie.rating;i++) {
        stars.push(<FaStar size={15} fill='#F2D16B'/>)
    }
    return (
        <div className="movie-card">
            <img src={movie.image} alt={movie.title} className="movie-image" />
            <div className="movie-info">
                <h3 className="movie-title">{movie.title}</h3>
                <p className="movie-rating">{stars}</p>
            </div>
        </div>
    );
}

export default MovieCard;
