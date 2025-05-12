import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import penguin from '../resources/penguin.jpg';

const Header = () => {
    const [activeLink, setActiveLink] = useState(null);

    const handleLinkClick = (linkName) => {
        setActiveLink(linkName);
    };

    return (
        <header className='header'>
            <div className='logo'>
                <img 
                    src={penguin} 
                    alt='Penguin Logo' 
                    style={{ width: '40px', height: '40px', marginRight: '10px' }} 
                />
                <div>
                    <h1 style={{ margin: 0, fontWeight: 'bold' }}>PenguinTech</h1>
                    <p style={{ margin: 0 }}>Technology meets innovation</p>
                </div>
            </div>
            <nav>
            <Link to="/">Home</Link>
            <Link to="/services">Services</Link>
            <Link to="/trainings">Trainings</Link>
            <Link to="/blogs">Blogs</Link>
            <Link to="/faq">FAQ</Link>
            <Link to="/contact">Contact</Link>
        </nav>
        </header>
    );
};

export default Header;
