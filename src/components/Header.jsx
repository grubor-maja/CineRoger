import React from 'react';
import { RxHamburgerMenu } from "react-icons/rx";
import Navbar from './Navbar';
import { useNavigate } from 'react-router-dom';
import {useState} from 'react';


function Header() {

    const navigate = useNavigate();

    const [open,setOpen] = useState(false);

    const handleToggle = () => {
        setOpen(!open);
    }
    return ( 
        <>
        <div className="header">
            <div className="header-logo">CineRoger</div>
            <RxHamburgerMenu style={{ width: '1.5rem', height: '2rem' }}className='burger-menu' onClick={handleToggle} />
            
        </div>
        <hr className="header-divider" />
        <nav className="navbar">
            <ul className={`navbar-links ${open ? 'open' : ''}`}>
                <li><a onClick={() => {navigate('/'); setOpen(false)}}>Home Page</a></li>
                <li><a onClick={() => {navigate('/movies'); setOpen(false)}}>Movies</a></li>
                <li><a onClick={() => {navigate('/tvshows'); setOpen(false)}}>TV Shows</a></li>
                <li><a onClick={() => {navigate('/contact'); setOpen(false)}}>Contact</a></li>
            </ul>
        </nav>
        </>
     );
}

export default Header;
