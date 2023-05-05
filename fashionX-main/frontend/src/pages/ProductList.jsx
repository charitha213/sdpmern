import React from 'react';
import styled from "styled-components";
import Products from "../components/Products";
import Footer from "../components/Footer";
import { useLocation } from "react-router-dom";
import { useState } from "react";


const Container = styled.div`
  padding: 80px;

  @media (max-width: 768px) {
    padding: 14px;
  }
  background-color:  black;
`;


function ProductList() {
  const products = [
    {
      name: 'Wizcraft',
      image: 'img/product1.jpg',
      description: 'Wizcraft Entertainment Agency Pvt. Ltd. is a global experiential marketing company, delivering impact driven brand experiences. With a legacy of over three decades, we integrate strategy, creativity and technology to deliver solutions that inspire.',
      contact: {
        phone: '555-3456',
        email: 'contact@dnaentertainment.com',
        website: 'www.dnaentertainment.com'
      }
    },
    {
      name: 'Percept',
      image: 'img/product2.jpg',
      description: 'Percept group offers services spanning Advertising, Public Relations, Events, Ad Films, Activations, Outdoor, Digital, Media, Talent Management etc.',
      contact: {
        phone: '555-3456',
        email: 'contact@dnaentertainment.com',
        website: 'www.dnaentertainment.com'
      }
    },
    {
      name: 'Cineyug',
      image: 'img/product3.jpg',
      description: 'Cineyug - Service Provider of event management services & other services in Mumbai, Maharashtra. Nature of Business. Service Provider. Legal Status of Firm.',
      contact: {
        phone: '555-3456',
        email: 'contact@dnaentertainment.com',
        website: 'www.dnaentertainment.com'
      }
    },
    {
      name: 'DNA Entertainment Network',
      image: 'img/product4.jpg',
      description: 'DNA Entertainment Networks Private Limited is India’s leading event management company. DNA, as we’ve come to be popularly known today, has been built by the visionary Dr T. Venkat Vardhan with enterprise, excellence and innovation as its core pillars. Our humble journey began in 1987. By crafting unforgettable live entertainment, sport and corporate experiences, we’ve consistently broken new ground and earned recognition as one of India’s most dependable international event organisers across South-East Asia.',
      contact: {
        phone: '555-3456',
        email: 'contact@dnaentertainment.com',
        website: 'www.dnaentertainment.com'
      }
    }
  ];

  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  }

return (
    <Container>
      <div>
        <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>Product List</h2>
        <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem' }}>
          {products.map((product, index) => (
            <li key={index} style={{ listStyleType: 'none', backgroundColor: 'white', boxShadow: '0 0 5px rgba(0,0,0,0.3)', padding: '1rem', borderRadius: '0.5rem' }}>
              <h3 style={{ marginBottom: '0.5rem', fontSize: '1.5rem' }}>{product.name}</h3>
              <img src={product.image} alt={product.name} style={{ maxWidth: '100%' }} />
              <p style={{ marginTop: '0.5rem', fontSize: '1rem' }}>{product.description}</p>
              <br></br>
              <button onClick={() => handleProductClick(product)} variant="contained">Contact details</button>
              
            </li>
          ))}
        </ul>
      </div>
      {selectedProduct && (
       <div style={{ backgroundColor: 'white', padding: '2rem', borderRadius: '0.5rem', maxWidth: '80%', maxHeight: '80%', overflow: 'auto' }}>
       <h3 style={{ marginBottom: '0.5rem', fontSize: '1.5rem' }}>{selectedProduct.name}</h3>
       <h4>Contact Details</h4>
       <p>Phone: {selectedProduct.contact.phone}</p>
       <p>Email: {selectedProduct.contact.email}</p>
       <p>Website: {selectedProduct.contact.website}</p>
       <button onClick={() => setSelectedProduct(null)}>Add to wishlist</button>
     </div>
     
      )}
    </Container>
  );
  
}



export default ProductList;