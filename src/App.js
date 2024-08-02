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
import TVShows from './components/TVShows';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/tvshows" element={<TVShows />} />
      </Routes>
    </Router>
  );
}

export default App;
