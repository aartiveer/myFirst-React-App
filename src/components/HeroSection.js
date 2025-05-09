import React from 'react';
import './HeroSection.css';

const HeroSection = () => (
    <section className='Hero'>
        <div className='hero-content'>
            <h1>Empowering Tech Mastery</h1>
            <p>Your Gateway to Embedded L</p>
            <button className='btn'>Get Started</button>
        </div>
        <img src={`${process.env.PUBLIC_URL}/Women.jpg`}  alt='Working Women' className='hero-img' />
    </section>
);

export default HeroSection;