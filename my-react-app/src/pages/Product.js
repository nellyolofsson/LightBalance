import React from 'react';
import { useParams } from 'react-router-dom';
import './Product.css';

// Produktdata definieras här också
const products = [
  {
    id: 'bio-magnesium-plus',
    name: 'Bio Magnesium Plus',
    price: '159 kr',
    description: 'Varje kapsel innehåller 687 mg trimagnesiumcitrat. Varje kapsel ger 110 mg elementärt magnesium, 10 mg kalium och 6 mg vitamin B6. Biomagnesium Plus är ett kosttillskott. Rekommenderad dos bör ej överskridas. Förvaras oåtkomligt för barn. Kosttillskott bör ej användas som ett alternativ till en varierad kost.',
    img: '/images/magnesium_6f834d90-9fad-4ebf-865d-f894deb9f4eb_720x.webp'
  },
  {
    id: 'bio-zink',
    name: 'Bio Zink',
    price: '129 kr',
    description: 'Varje tablett ger 25 mg zink från zink-l-aspartat och zinkcitrat och 5 mg vitamin B6. Bio Zink är ett kosttillskott. Rekommenderad dos bör ej överskridas. Förvaras oåtkomligt för barn. Kosttillskott bör ej användas som ett alternativ till en varierad kost.',
    img: '/images/Zink_720x.webp'
  },
  {
    id: 'd-vitamin-2000-ie',
    name: 'D-Vitamin, 2000 IE',
    price: '98 kr',
    description: 'Varje tablett ger 50 mcg (2000 IE) vitamin D3 (kolekalciferol). D-vitamin är ett kosttillskott. Rekommenderad dos bör ej överskridas. Förvaras oåtkomligt för barn. Kosttillskott bör ej användas som ett alternativ till en varierad kost.',
    img: '/images/D3_720x.webp'
  }
];

const Product = () => {
  const { productId } = useParams();

  // Hitta rätt produkt genom ID
  const product = products.find(p => p.id === productId);

  if (!product) {
    return <p>Produkt inte funnen</p>;
  }

  return (
    <div className="product-details-page">
      <h1>{product.name}</h1>
      <img src={product.img} alt={product.name} />
      <p>{product.description}</p>
      <p><strong>{product.price}</strong></p>
      <p>För närvarande kan du endast läsa om produkten. Köp är inte tillgängligt just nu.</p>
    </div>
  );
};

export default Product;
