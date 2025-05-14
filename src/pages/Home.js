import React from 'react';

import HeroSection from  "../components/HeroSection"; 
import SocialIcons from "../components/SocialIcons";
import AboutSection from '../components/AboutSection';
import ExpertiseSection from '../components/ExpertiseSection';


const Home = () => (
    <div>
        <HeroSection />
        <SocialIcons />
        <AboutSection />
        <ExpertiseSection />
    </div>
);

export default Home;