import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Product from "../components/Product";
import { useState, useEffect } from 'react';
import axios from 'axios';

const Wishlist = () => {


    const [products, setProducts] = useState([]);
  
    useEffect(() => {
      axios.get('http://127.0.0.1:6969/api/wishlist/getAll')
        .then(response => {
          setProducts(response.data);
        })
        .catch(error => {
          console.log(error);
        });
    }, []);
  

  return (
    <>
      <Container>
        <Wrapper>
          <h1>My Wishlist ({products?.length})</h1>
          <ProductList>
            {products.map((item) => {
              return <Product key={item._id} item={item} sm="true" />;
            })}
          </ProductList>
        </Wrapper>
      </Container>
    </>
  );
};

export default Wishlist;

const Container = styled.div`
  background-color: #f4f4f4;
  padding-top: 70px;
  min-height: 100vh;
`;

const Wrapper = styled.div`
  padding: 30px 20px;

  h1 {
    margin-bottom: 20px;
  }
`;

const ProductList = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;
