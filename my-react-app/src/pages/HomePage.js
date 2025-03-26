import React from 'react';
import './HomePage.css';
import '../components/HeroSection.js'
import HeroSection from '../components/HeroSection.js';
import HighlightsSection from '../components/HighlightsSection.js';
import AboutSection from '../components/AboutSection.js';
import SupplementsSection from '../components/SupplementsSection.js';
import ContactSection from '../components/ContactSection.js';




const HomePage = () => {
    return (
            
        <div className="homepage">
             

 
            <HeroSection />
          
               
            <HighlightsSection /> 
          
            <AboutSection />  
            <SupplementsSection /> 
            <ContactSection />
   
        
        </div>
    );
};

export default HomePage;
