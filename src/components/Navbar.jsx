import React, { Component } from 'react';


function Navbar() {
    return ( 
        <>
        <nav className="navbar">
            <ul className="navbar-links">
                <li><a href="#movies">Movies</a></li>
                <li><a href="#tvshows">TV Shows</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
        </>
     );
}

export default Navbar;