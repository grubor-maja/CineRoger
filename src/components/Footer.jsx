import React, { Component } from 'react';


function Footer() {
    return ( <>
    <footer className="footer">
        <div className="footer-content">
            <p>&copy; 2024 CineRoger, All rights reserved.</p>
            <ul className="footer-links">
                <li><a href="#movies">Movies</a></li>
                <li><a href="#tvshows">TV Shows</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </div>
    </footer>
    </> );
}

export default Footer;