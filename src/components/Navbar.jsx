import React, { Component } from 'react';
import { useNavigate } from 'react-router-dom';

function Navbar() {

    const navigate = useNavigate();

    return ( 
        <>
        <nav className="navbar">
            <ul className="navbar-links">
                <li><a onClick={() => navigate('/')}>Home Page</a></li>
                <li><a onClick={() => navigate('/movies')}>Movies</a></li>
                <li><a onClick={() => navigate('/tvshows')}>TV Shows</a></li>
                <li><a onClick={() => navigate('/contact')}>Contact</a></li>
            </ul>
        </nav>
        </>
     );
}

export default Navbar;