import React from 'react';
import './HeroSection.css';
import women from'../resources/Women.jpg'

const HeroSection = () => (
    <section className='Hero'>
        <div className='hero-content'>
            <h1>Empowering Tech Mastery</h1>
            <p>Your Gateway to Embedded </p>
            <button className='btn'>Get Started</button>
        </div>
        <img src={women} alt='Working Women' className='hero-img' />
    </section>
);

export default HeroSection;