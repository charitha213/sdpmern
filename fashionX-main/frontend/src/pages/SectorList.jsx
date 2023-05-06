import React, { useState } from 'react';
import styled from "styled-components";
import { Link } from "react-router-dom";

import Footer from "../components/Footer";
import { useLocation } from "react-router-dom";

const Container = styled.div`
padding: 80px;

@media (max-width: 768px) {
  padding: 14px;
}
background-color:  black;
`;

function SectorList() {
  const sectors = [    {      name: 'Catering', 
       description: 'Companies that  providing food for different types of events, such as weddings, concessions, and corporate and social gatherings.',
             imageUrl: 'img/catering1.jpg' ,
             contact: 1234567890   },  
               {      name: 'sanitation',     
                description: 'Companies that provide proper cleaning services after completion of event', 
                     imageUrl: 'img/clean.jpg',
                    contact: 1234567890    },  
                       {      name: 'Finance',    
                         description: 'Companies that provide decorations for all kinds of events',   
                            imageUrl: 'img/decoration.jpg',
                            contact: 1234567890      },   
                             {      name: 'Hospitality',   
                                description: 'The hospitality industry is a broad category of fields within the service industry that includes lodging, food and drink service, event planning, theme parks, travel and tourism. It includes hotels, tourism agencies, restaurants and bars.',   
                                   imageUrl: 'img/hospitality.jpg' ,
                                   contact: 1234567890     }  ];

  const [selectedSector, setSelectedSector] = useState(null);

  const handleSectorClick = (sector) => {
    setSelectedSector(sector);
  }

  return (
    <Container>
      <div>
        <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>Individual Sectors List</h2>
        <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem' }}>
<<<<<<< HEAD
        
            {sectors.map((sector, index) => (
              <li key={index} style={{ listStyleType: 'none', backgroundColor: 'white', boxShadow: '0 0 5px rgba(0,0,0,0.3)', padding: '1rem', borderRadius: '0.5rem', cursor: 'pointer' }}>
                <Link to={`/indCateg`} style={{ textDecoration: 'none', color: 'inherit' }}>
                  <img src={sector.imageUrl} alt={sector.name} style={{ width: '200px', height: '200px', marginBottom: '1rem' }} />
                  <h3 style={{ marginBottom: '0.5rem', fontSize: '1.5rem' }}>{sector.name}</h3>
                  <p style={{ marginTop: '0.5rem', fontSize: '1rem' }}>{sector.description}</p>
                </Link>
              </li>
            ))}
      
=======
        {sectors.map((sector, index) => (
  <li key={index} onClick={() => handleSectorClick(sector)} style={{ listStyleType: 'none', backgroundColor: 'white', boxShadow: '0 0 5px rgba(0,0,0,0.3)', padding: '1rem', borderRadius: '20px', overflow: 'hidden', cursor: 'pointer' }}>
    <img src={sector.imageUrl} alt={sector.name} style={{ width: '200px', height: '200px', marginBottom: '2rem', borderRadius: '50%' }} />
    <h3 style={{ marginBottom: '0.5rem', fontSize: '1.5rem' }}>{sector.name}</h3>
    <p style={{ marginTop: '0.5rem', fontSize: '1.5rem' }}>{sector.description}</p>
  </li>
))}

          ))}
>>>>>>> 46ae68cc75b72a9aa8209ff34d8451e2976cfcbf
        </ul>
      
        {selectedSector && (
          <div style={{ marginTop: '2rem', color: 'black' }}>
            <img src={selectedSector.imageUrl} alt={selectedSector.name} style={{ width: '200px', height: '200px', marginBottom: '1rem' }} />
            <h3 style={{ fontSize: '1.5rem' }}>{selectedSector.name}</h3>
            <button onClick={() => setSelectedSector(null)}>Add to wishlist</button>
          </div>
          
        )}
      </div>
    </Container>
  );
}

export default SectorList;