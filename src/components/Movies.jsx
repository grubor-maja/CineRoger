import React, { Component } from 'react';
import { useState } from 'react';
import Navbar from './Navbar.jsx';
import SearchBar from './SearchBar.jsx';
import MovieGrid from './MovieGrid.jsx';
import Footer from './Footer.jsx';
import Header from './Header.jsx';
import heroImage from '../img/hero-image.jpg';

function Movies() {

    const allMovies = [
        { id: 1, title: 'Movie 1', rating: 4, image: heroImage },
        { id: 2, title: 'Movie 2', rating: 5, image: heroImage },
        { id: 3, title: 'Movie 3', rating: 3, image: heroImage },
        { id: 4, title: 'Movie 4', rating: 4, image: heroImage },
        { id: 5, title: 'Movie 5', rating: 4, image: heroImage },
        { id: 6, title: 'Movie 6', rating: 5, image: heroImage },
        { id: 7, title: 'Movie 7', rating: 3, image: heroImage },
        { id: 8, title: 'Movie 8', rating: 4, image: heroImage },
        { id: 9, title: 'Movie 9', rating: 4, image: heroImage },
        { id: 10, title: 'Movie 10', rating: 5, image: heroImage },
        { id: 11, title: 'Movie 11', rating: 3, image: heroImage },
        { id: 12, title: 'Movie 12', rating: 4, image: heroImage },
        { id: 13, title: 'Movie 13', rating: 3, image: heroImage },
        { id: 14, title: 'Movie 14', rating: 4, image: heroImage }
    ];

    const [currentPage, setCurrentPage] = useState(1);
    const moviesPerPage = 8;

    const indexOfLastMovie = currentPage*moviesPerPage;
    const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
    const currentMovies = allMovies.slice(indexOfFirstMovie,indexOfLastMovie);
    
    const paginate = (pageNumber) => setCurrentPage(pageNumber);
    return ( <>
                <Header />
            <Navbar />
            <SearchBar />
            <div className="page-title">
                <h2>Movie Reviews</h2>
            </div>
            <MovieGrid movies={currentMovies} />
            <div className="pagination">
                <button 
                    onClick={() => paginate(currentPage - 1)} 
                    disabled={currentPage === 1}
                >
                    Previous
                </button>
                <button 
                    onClick={() => paginate(currentPage + 1)} 
                    disabled={indexOfLastMovie >= allMovies.length}
                >
                    Next
                </button>
            </div>
            <Footer />
    </> );
}

export default Movies;