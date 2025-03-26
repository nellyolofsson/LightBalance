import React from 'react';
import './SupplementsSection.css';
import { Link } from 'react-router-dom';

const SupplementsSection = () => {
    return (
        <section className="supplements">
            <div className="supplements-background">
                <h2 className="section-title">Kosttillskott</h2>
                <p className="supplements-text">
                    Vi erbjuder ett brett utbud av högkvalitativa kosttillskott som hjälper till att stödja din hälsa och ditt välmående.
                    De är noggrant utvalda och anpassade för att möta olika behov.
                </p>
                <Link to="/supplements" className="link">Utforska vårt sortiment</Link>
            </div>
        </section>
    );
};

export default SupplementsSection;
