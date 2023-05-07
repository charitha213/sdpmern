import React, { useState } from 'react';

const companies = [  { name: 'Company A', phone: '123-456-7890', email: 'info@companyA.com' },  { name: 'Company B', phone: '555-555-5555', email: 'info@companyB.com' },  { name: 'Company C', phone: '999-999-9999', email: 'info@companyC.com' },];

const IndCateg = () => {
  const [wishlist, setWishlist] = useState([]);

  const handleAddToWishlist = (company) => {
    setWishlist([...wishlist, company]);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center',paddingTop: 100, alignItems: 'center', flexDirection: 'column' }}>
      <h1 style={{ marginBottom: '20px' }}>Companies</h1>
      <ul style={{ listStyle: 'none', padding: '0', margin: '0' }}>
        {companies.map((company) => (
          <li key={company.name} style={{ marginBottom: '10px', border: '1px solid #ccc', padding: '10px' }}>
            <div style={{ marginBottom: '5px' }}>
              <strong>{company.name}</strong>
            </div>
            <div style={{ marginBottom: '5px' }}>Phone: {company.phone}</div>
            <div>Email: {company.email}</div>
            <button><a 
                 variant="contained"
                 style={{
                   
                   width: "100px",
                   height: "50px",
                   borderRadius: "1.5rem",
                   color: "black",
                   fontWeight: "bold",
                 }}>
              Add to Wishlist
              </a>
              </button>
          </li>
        ))}
      </ul>
      
      {wishlist.length > 0 && (
        <div style={{ marginTop: '30px' }}>
          <h2 style={{ marginBottom: '20px' }}>Wishlist</h2>
          <ul style={{ listStyle: 'none', padding: '0', margin: '0' }}>
            {wishlist.map((company) => (
              <li key={company.name} style={{ marginBottom: '10px', border: '1px solid #ccc', padding: '10px' }}>
                <div style={{ marginBottom: '5px' }}>
                  <strong>{company.name}</strong>
                </div>
                <div style={{ marginBottom: '5px' }}>Phone: {company.phone}</div>
                <div>Email: {company.email}</div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default IndCateg;
