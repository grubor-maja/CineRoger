import React from 'react';
import Navbar from './Navbar.jsx';
import SearchBar from './SearchBar.jsx';
import HeroSection from './HeroSection.jsx';
import MovieGrid from './MovieGrid.jsx';
import Footer from './Footer.jsx';
import Header from './Header.jsx';
import heroImage from '../img/hero-image.jpg';

function HomePage({movies}) {
    const movies2 = [
        {id:1,title:'Movie 1', rating:4, image:heroImage},
        {id:2,title:'Movie 2', rating:5, image:heroImage},
        {id:3,title:'Movie 3', rating:3, image:heroImage},
        {id:4,title:'Movie 4', rating:4, image:heroImage},
        {id:5,title:'Movie 5', rating:4, image:heroImage},
        {id:6,title:'Movie 6', rating:5, image:heroImage},
        {id:7,title:'Movie 7', rating:3, image:heroImage},
        {id:8,title:'Movie 8', rating:4, image:heroImage},
        {id:9,title:'Movie 9', rating:4, image:heroImage},
        {id:10,title:'Movie 10', rating:5, image:heroImage},
        {id:11,title:'Movie 11', rating:3, image:heroImage},
        {id:12,title:'Movie 12', rating:4, image:heroImage},
    ];
    return (
        <>
            <Header />
            <SearchBar />
            <HeroSection movies={movies} />
            <MovieGrid movies={movies} />
            <Footer />
        </>
    );
}

export default HomePage;
