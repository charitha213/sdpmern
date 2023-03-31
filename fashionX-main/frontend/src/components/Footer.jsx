import { Facebook, Instagram, Twitter, YouTube } from "@mui/icons-material";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 40px 60px;

  .logo {
    margin-bottom: 30px;
  }

  h4 {
    font-size: 18px;
    font-weight: 600;
    padding-bottom: 20px;
  }

  p {
    font-size: 14x;
    padding-bottom: 8px;
  }

  a {
    font-size: 14px;
    text-decoration: none;
    color: #222;
    margin-bottom: 10px;
  }

  .install {
    margin: 10px 0 15px 0;
    cursor: pointer;
  }

  @media (max-width: 768px) {
    padding: 30px 20px;
  }
`;

const Pay = styled.div`
  img {
    border: 1px solid #088178;
    margin-right: 4px;
    border-radius: 6px;
    cursor: pointer;
  }
`;

const Col = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 20px;

  a {
    font-size: 15px;
  }
`;

const Follow = styled.div`
  margin-top: 20px;
`;

const CopyRight = styled.div`
  width: 100%;
  text-align: center;
`;

const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

const Footer = () => {
  return (
    <Container>
      <Col>
      <p class="logo">EventO </p>
        <h4>Contact</h4>
        <p>
          <strong>Address:</strong> K L UNIVERSITY
        </p>
        <p>
          <strong>Phone:</strong>9944949232
        </p>
        <p>
          <strong>Hours:</strong> 10:00 - 18:00, Mon - Sat
        </p>
       
      </Col>
    
    </Container>
  );
};

export default Footer;
