import React from 'react';
import VideoPlayer from '../components/VideoPlayer';
import ButtonTreatment from '../components/ButtonTreatment';
import './HeroSection.css';

const HeroSection = () => {
    return (
        <header className="hero">
            <VideoPlayer videoSrc="/videos/6724720-hd_1080_1920_24fps.mp4" />
            <div className="hero-content">
                <h1 className="hero-title">Frekvensbehandling och Hälsa i Nutid</h1>
                <p className="hero-subtitle">Din väg till balans och välmående</p>
                <ButtonTreatment />
            </div>
        </header>
    );
};

export default HeroSection;
