import React from 'react';

import { Link } from 'react-router-dom';
import './Header.css';

const Header =() => (
    <header className='header'>
        <div className='logo'>PenguinTech</div>
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

export default Header;