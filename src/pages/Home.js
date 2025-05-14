import React from 'react';

import HeroSection from  "../components/HeroSection"; 
import SocialIcons from "../components/SocialIcons";
import AboutSection from '../components/AboutSection';
import ExpertiseSection from '../components/ExpertiseSection';
import VisionSection from '../components/VisionSection';


const Home = () => (
    <div>
        <HeroSection />
        <SocialIcons />
        <AboutSection />
        <ExpertiseSection />
        <VisionSection />
    </div>
);

export default Home;