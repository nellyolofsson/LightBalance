import './ContactSection.css';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const ContactSection = () => {
  return (
    <section className="contact">
      <div className="overlay-text">Hamna i balans</div>
      <img src="images/pexels-rdne-6724357.jpg" alt="Kontakt" />
      <div className="overlay-text2">Någon text här...... </div>

      <h2 className="section-title">Kontakt</h2>
      <p>Har du några frågor eller vill du boka en tid? Tveka inte att höra av dig!</p>

      <p >
        <FaPhoneAlt className="contact-icon" />
        <a href="tel:0735162722">0735162722</a>
      </p>

      <p>
        <FaEnvelope className="contact-icon" />
        <a href="mailto:annlis.hedman@live.se">annlis.hedman@live.se</a>
      </p>

      <p>
        <FaMapMarkerAlt className="contact-icon" />
        <a
          href="https://www.google.com/maps/search/?api=1&query=Källavägen+9,+394+77,+Kalmar"
          target="_blank"
          rel="noopener noreferrer"
        >
          Källavägen 9, 394 77, Kalmar
        </a>
      </p>
    </section>
  );
};

export default ContactSection;
