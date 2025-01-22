// src/components/VideoPlayer.js
import React from 'react';

const VideoPlayer = ({ videoSrc }) => {
    return (
        <video
            className="video-player" // Lägg till en klass för att kunna styla den om du vill
            autoPlay
            loop
            muted
        >
            <source src={videoSrc} type="video/mp4" />
            Your browser does not support the video tag.
        </video>
    );
};

export default VideoPlayer;
