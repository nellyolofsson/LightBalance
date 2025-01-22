import React from 'react';

const HighlightsSection = () => {
  return (
    <div className="bg-gradient-to-r from-green-10 to-green-50 text-secondary-900 py-16 px-8 md:px-16">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-secondary-800 mb-12">Våra Tjänster</h2>
        
        {/* Första boxen */}
        <div className="bg-white p-10 mb-12 shadow-xl rounded-lg transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl">
          <p className="text-lg font-semibold text-secondary-900">
            Andullationsterapi – Andullationstekniken avger specifika vibrationer kombinerat med kortvågig infraröd värme.
          </p>
        </div>

        {/* Andra boxen */}
        <div className="bg-white p-10 mb-12 shadow-xl rounded-lg transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl">
          <p className="text-lg font-semibold text-secondary-900">
            Behandlingar på triggerpunkter och akupunkturpunkter – För att skapa balans i kroppen.
          </p>
        </div>

        {/* Tredje boxen */}
        <div className="bg-white p-10 mb-12 shadow-xl rounded-lg transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl">
        <p className="text-lg font-semibold text-secondary-900">
          Kost- och näringsrådgivning  – Anpassade råd för ditt välmående.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HighlightsSection;
