import React from "react";
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
  background-color: black;
`;

const ImageContainer = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  overflow: hidden;
`;

const ProductImage = styled.img`
  max-width: 100%;
  height: auto;
`;

function ProductList() {
  const products = [
    {
      name: "Wizcraft",
      image: "img/product1.jpg",
      description:
        "Wizcraft Entertainment Agency Pvt. Ltd. is a global experiential marketing company, delivering impact driven brand experiences. With a legacy of over three decades, we integrate strategy, creativity and technology to deliver solutions that inspire.",
      contact: {
        phone: "555-3456",
        email: "contact@dnaentertainment.com",
        website: "www.dnaentertainment.com",
      },
    },
    {
      name: "Percept",
      image: "img/product2.jpg",
      description:
        "Percept group offers services spanning Advertising, Public Relations, Events, Ad Films, Activations, Outdoor, Digital, Media, Talent Management etc.Elev8ed Events LLC is a full-service event management company that provides cost-effective and creative ideas for corporate clients, non-profit organizations and special events.",
      contact: {
        phone: "555-3456",
        email: "contact@dnaentertainment.com",
        website: "www.dnaentertainment.com",
      },
    },
    {
      name: "Cineyug",
      image: "img/product3.jpg",
      description:
        "Cineyug - Service Provider of event management system services & other services in Mumbai, Maharashtra. Nature of Business. Service Provider. Legal Status of Firm. We generate brand awareness through events by analyzing real metrics that matter to the organization's bottom line.",
      contact: {
        phone: "555-3456",
        email: "contact@dnaentertainment.com",
        website: "www.dnaentertainment.com",
      },
    },
    {
      name: "DNA Entertainment Network",
      image: "img/product4.jpg",
      description:
        "DNA Entertainment Networks Private Limited is India’s leading event management company. DNA, as we’ve come to be popularly known today, has been built by the visionary Dr T. Venkat Vardhan with enterprise, excellence and innovation as its core pillars. ",
      contact: {
        phone: "555-3456",
        email: "contact@dnaentertainment.com",
        website: "www.dnaentertainment.com",
      },
    },
    {
      name: "Elev8ed",
      image: "img/product5.jpg",
      description:
        "Elev8ed Events LLC is a full-service event management company that provides cost-effective and creative ideas for corporate clients. non-profit organizations and special events. We generate brand awareness through events by analyzing real metrics that matter to the organization's bottom line.",
      contact: {
        phone: "545-1496",
        email: "contact@dnaentertainment.com",
        website: "www.dnaentertainment.com",
      },
    },
    {
      name: "Ellier",
      image: "img/product6.jpg",
      description: "Ellier company is one of the most popular event management company which have quite growing from past years. polls said that it is a trust worthy company for money and more experience. The company main aim is to maintain customers Happy and enjoy their events.",
      contact: {
        phone: "546-3487",
        email: "contact@dnaentertainment.com",
        website: "www.dnaentertainment.com",
      },
    },
  ];

  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };
  return (
    <Container>
      <div>
        <h2 style={{ textAlign: "center", marginBottom: "2rem" }}>
          Product List
        </h2>
        <ul
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "2rem",
          }}
        >
          {products.map((product, index) => (
            <li
              key={index}
              style={{
                listStyleType: "none",
                backgroundColor: "white",
                padding: "1rem",
                borderRadius: "1rem",
                textAlign: "center",
              }}
            >
              <h3 style={{ marginBottom: "0.5rem", fontSize: "1.5rem" }}>
                {product.name}
              </h3>
              <ImageContainer>
                <ProductImage src={product.image} alt={product.name} />
              </ImageContainer>
              <p style={{ marginTop: "0.5rem", fontSize: "1rem" }}>
                {product.description}
              </p>
              <br></br>
              <button><a href="/EventService"
                 variant="contained"
                 style={{
                   
                   width: "100px",
                   height: "50px",
                   borderRadius: "1.5rem",
                   color: "black",
                   fontWeight: "bold",
                 }}>
              Contact details
              </a>
              </button>
            </li>
          ))}
        </ul>
      </div>
      {selectedProduct && (
        <div
          style={{
            backgroundColor: "white",
            padding: "2rem",
            borderRadius: "0.5rem",
            maxWidth: "80%",
            maxHeight: "80%",
            overflow: "auto",
          }}
        >
          <h3 style={{ marginBottom: "0.5rem", fontSize: "1.5rem" }}>
            {selectedProduct.name}
          </h3>
          <h4>Contact Details</h4>
          <p>Phone: {selectedProduct.contact.phone}</p>
          <p>Email: {selectedProduct.contact.email}</p>
          <p>Website: {selectedProduct.contact.website}</p>
           <p>
                  Website:{" "}
                  <a href={selectedProduct.contact.website} target="_blank">
                    {selectedProduct.contact.website}
                  </a>
                </p>
          <button onClick={() => setSelectedProduct(null)}>
            Add to wishlist
          </button>
        </div>
      )}
    </Container>
  );
}

export default ProductList;
export const products = {
  name: 'name',
      image: 'image',
      description: 'description',
      contact: {
        phone: 'phone',
        email: 'email',
        website: 'website',
}};