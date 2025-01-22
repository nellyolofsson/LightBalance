import React from 'react';
import './ContactSection.css';

const ContactSection = () => {
    return (
        <section className="contact">
            <div className="overlay-text">Hamna i balans</div>
            <img src="/pexels-rdne-6724357.jpg" alt='Kontakt' />
            <div className="overlay-text2">Någon text här...... </div>
           
            
            <h2 className="section-title">Kontakt</h2>
            <p>Har du några frågor eller vill du boka en tid? Tveka inte att höra av dig!</p>
            <p><strong>Telefon:</strong> </p>
            <p><strong>Email:</strong> </p>
            <p><strong>Adress:</strong> Källavägen 9, 394 77, Kalmar</p>
        </section>
    );
};

export default ContactSection;
