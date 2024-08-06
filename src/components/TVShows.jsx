import React, { Component } from 'react';
import { useState } from 'react';
import Navbar from './Navbar.jsx';
import SearchBar from './SearchBar.jsx';
import MovieGrid from './MovieGrid.jsx';
import Footer from './Footer.jsx';
import Header from './Header.jsx';
import heroImage from '../img/hero-image.jpg';

function TVShows() {
    const allShows = [
        { id: 1, title: 'Show 1', rating: 4, image: heroImage },
        { id: 2, title: 'Show 2', rating: 5, image: heroImage },
        { id: 3, title: 'Show 3', rating: 3, image: heroImage },
        { id: 4, title: 'Show 4', rating: 4, image: heroImage },
        { id: 5, title: 'Show 5', rating: 4, image: heroImage },
        { id: 6, title: 'Show 6', rating: 5, image: heroImage },
        { id: 7, title: 'Show 7', rating: 3, image: heroImage },
        { id: 8, title: 'Show 8', rating: 4, image: heroImage },
        { id: 9, title: 'Show 9', rating: 4, image: heroImage },
        { id: 10, title: 'Show 10', rating: 5, image: heroImage },
        { id: 11, title: 'Show 11', rating: 3, image: heroImage },
        { id: 12, title: 'Show 12', rating: 4, image: heroImage },
        { id: 13, title: 'Show 13', rating: 3, image: heroImage },
        { id: 14, title: 'Show 14', rating: 4, image: heroImage },
    ];

    const [currentPage, setCurrentPage] = useState(1);
    const showsPerPage = 8;

    const indexOfLastShow = currentPage * showsPerPage;
    const indexOfFirstShow = indexOfLastShow - showsPerPage;
    const currentShows = allShows.slice(indexOfFirstShow, indexOfLastShow);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <>
            <Header />
            <SearchBar />
            <div className="page-title">
                <h2>TV Show Reviews</h2>
            </div>
            <MovieGrid movies={currentShows} />
            <div className="pagination">
                <button 
                    onClick={() => paginate(currentPage - 1)} 
                    disabled={currentPage === 1}
                >
                    Previous
                </button>
                <button 
                    onClick={() => paginate(currentPage + 1)} 
                    disabled={indexOfLastShow >= allShows.length}
                >
                    Next
                </button>
            </div>
            <Footer />
        </>
    );
}

export default TVShows;
