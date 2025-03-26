import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeartbeat, faHandHoldingWater, faAppleAlt, faBolt } from '@fortawesome/free-solid-svg-icons';
import './HighlightsSection.css';

const HighlightsSection = () => {
  return (  
    <div className="highlights-container">
      {/* Första boxen */}
      <h2 className="section-title">Våra Tjänster</h2>
      <div className="highlight-box">
        <FontAwesomeIcon icon={faHeartbeat} className="highlight-icon" />
        <p>
          Andullationsterapi –  avger specifika vibrationer kombinerat med kortvågig infraröd värme.
        </p>
      </div>

      {/* Andra boxen */}
      <div className="highlight-box">
        <FontAwesomeIcon icon={faHandHoldingWater} className="highlight-icon" />
        <p>
        Frekvensbehandling – är en enkel och tidsbesparande metod att mäta näringsbalanser i kroppen.
        </p>
      </div>

      {/* Tredje boxen */}
      <div className="highlight-box">
        <FontAwesomeIcon icon={faAppleAlt} className="highlight-icon" />
        <p>
          Kost- och näringsrådgivning – anpassade råd för ditt välmående.
        </p>
      </div>

      <div className="highlight-box">
        <FontAwesomeIcon icon={faBolt} className="highlight-icon" />
        <p>
          Laserbehandling – stimulerar kroppens läkande förmåga vid artros, tendinos, inflammation, svullnad, värk i nacke och rygg.
        </p>
      </div>
    </div>
  );
};

export default HighlightsSection;
