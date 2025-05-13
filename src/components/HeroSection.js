import React from 'react';
import './HeroSection.css';
import women from'../resources/Women.png'

const HeroSection = () => (
    <section className='Hero'>
        <div className='hero-content'>
            <h1>Empowering Tech Mastery</h1>
            <p>Your Gateway to Embedded </p>
            <button className='btn'>Get Started →</button>
        </div>
        <img 
        src={women} 
        loading='lazy'
        srcSet={`${women} 320w, ${women} 480w, ${women} 800w`}
        sizes='(max-width: 768px) 30rem, 50rem'
        alt='Working Women' />
    </section>
);

export default HeroSection;