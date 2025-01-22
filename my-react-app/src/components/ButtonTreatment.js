import React from 'react';
import './ButtonTreatment.css';

const ButtonTreatment = () => {
    return (
        <div className="treatment">
        

            {/* Länk inuti knappen */}
            <a href="https://www.bokadirekt.se/places/frekvensbehandling-och-halsa-i-nutid-41460#" 
               target="_blank" 
               rel="noopener noreferrer">
                <button className="cta-button">Boka en behandling</button>
            </a>
        </div>
    );
};

export default ButtonTreatment;
