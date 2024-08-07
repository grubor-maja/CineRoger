import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import SearchBar from './components/SearchBar.jsx';
import HeroSection from './components/HeroSection.jsx';
import MovieGrid from './components/MovieGrid.jsx';
import heroImage from '../src/img/hero-image.jpg';
import Footer from './components/Footer.jsx';
import Header from './components/Header.jsx';
import HomePage from './components/HomePage.jsx';
import Movies from './components/Movies';
import Contact from './components/Contact.jsx';
import Review from './components/Review.jsx';
import { useEffect } from 'react';
import { useState } from 'react';

function App() {

  const [movies,setMovies] = useState([]);

  useEffect(() => {
      const fetchMovies = async () => {
          const response = await fetch('http://localhost:5000/api/movies');
          const data = await response.json();
          setMovies(data);
      };

      fetchMovies();
  },[]);
  return (
    <Router basename="/CineRoger">
      <Routes>
        <Route path="/" element={<HomePage movies={movies} />} />
        <Route path="/movies" element={<Movies movies={movies} />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/review/:id" element={<Review />} />
      </Routes>
    </Router>
  );
}

export default App;
