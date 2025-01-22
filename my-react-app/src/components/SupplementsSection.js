import React from 'react';
import './SupplementsSection.css';

const SupplementsSection = () => {
    return (
        <section className="supplements">
            <h2 className="section-title">Kosttillskott</h2>
           
            <p className="supplements-text">
                Vi erbjuder ett brett utbud av högkvalitativa kosttillskott som hjälper till att stödja din hälsa och ditt välmående.
                De är noggrant utvalda och anpassade för att möta olika behov.
            </p>
            <button className="cta-button">Utforska våra kosttillskott</button>
        </section>
    );
};

export default SupplementsSection;
