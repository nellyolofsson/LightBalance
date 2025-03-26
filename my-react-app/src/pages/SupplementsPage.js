import React from 'react';
import { Link } from 'react-router-dom'; // Importera Link från react-router-dom
import './SupplementsPage.css';
import Sidebar from './Sidebar';

// Produktdata definieras här
const products = [
  {
    id: 'bio-magnesium-plus',
    name: 'Bio Magnesium Plus',
    price: '159 kr',
    img: 'images/magnesium_6f834d90-9fad-4ebf-865d-f894deb9f4eb_720x.webp'
  },
  {
    id: 'bio-zink',
    name: 'Bio Zink',
    price: '129 kr',
    img: 'images/Zink_720x.webp'
  },
  {
    id: 'd-vitamin-2000-ie',
    name: 'D-Vitamin, 2000 IE',
    price: '98 kr',
    img: 'images/D3_720x.webp'
  }
];

const SupplementsPage = () => {
  return (
    <div className="supplements-page">
        <Sidebar />
      <h1>Kosttillskott</h1>
      <p>Här hittar du vårt fullständiga sortiment av högkvalitativa kosttillskott.</p>

      {/* Lista över produkter */}
      <div className="product-list">
        {products.map(product => (
          <div className="product-item" key={product.id}>
            <img src={product.img} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.price}</p>
            <Link to={`/product/${product.id}`} className="cta-button">Läs mer</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SupplementsPage;
