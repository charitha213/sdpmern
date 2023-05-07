import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Button, CardActions } from '@mui/material';
import Link from '@mui/material/Link';


const Container = styled.div`
  padding: 80px;
  @media (max-width: 768px) {
    padding: 14px;
  }
  
`;



function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:6969/api/products/')
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

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
            color : "black"
          }}
        >
          {products.map((product, index) => (
            <Card sx={{ maxWidth: 345 }} color='balck'>
            <CardActionArea>
              <CardMedia
                component={product.image}
                height="140"
                image="/img/5.jpg"
                alt={product.title}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {product.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {product.desc}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Link href={"/product/"+product._id} variant="body2" >
              <Button size="small" color="primary">
                Details
              </Button>
              </Link>
            </CardActions>
          </Card>
          ))}
        </ul>
      </div>
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