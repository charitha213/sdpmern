import {
  MapOutlined,
  MailOutlined,
  PhoneOutlined,
  AccessTime,
} from "@mui/icons-material";
import React from "react";
import styled from "styled-components";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

const Container = styled.div`
  padding: 80px;

  @media (max-width: 768px) {
    padding: 14px;
  }
`;

const Header = styled.div`
  background-image: url("img/banner.png");
  background-position: center;
  background-size: cover;
  width: 100%;
  height: 40vh;
  display: flex;
  flex-direction: column;
  color: #fff;
  align-items: center;
  justify-content: center;
  padding: 14px;
  margin-top: 60px;

  h2 {
    font-size: 3rem;
    margin-bottom: 10px;
  }
`;

const Section = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Details = styled.div`
  width: 40%;

  @media (max-width: 768px) {
    width: 100%;
  }

  span {
    font-size: 13px;
  }

  h2 {
    font-size: 28px;
    line-height: 35px;
    padding: 20px 0;
  }

  h3 {
    font-size: 20px;
    padding-bottom: 15px;
  }

  li {
    text-decoration: none;
    display: flex;
    align-items: center;
    padding: 15px 0;
    gap: 8px;

    i {
      font-size: 16px;
      padding-right: 10px;
    }

    p {
      font-size: 16px;
      margin: 0%;
    }
  }
`;

const Map = styled.div`
  width: 55%;
  height: 400px;

  @media (max-width: 768px) {
    width: 100%;
  }

  iframe {
    width: 100%;
    height: 100%;
    border: 0;
  }
`;

const Form = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin: 20px;
  padding: 80px;
  border: 1px solid #e1e1e1;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 10px;
  }

  h6 {
    color: #ccc;
    font-size: 14px;
    margin-bottom: 20px;
  }

  h3 {
    font-size: 35px;
  }
`;

const FormDetails = styled.div`
  width: 65%;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const InputContainer = styled.div`
  width: 100%;
  padding: 15px 0;
`;

const Input = styled.input`
  width: 100%;
  margin-bottom: 20px;
  padding: 12px 15px;
  outline: none;
  border: 1px solid #e1e1e1;
  border-radius: 4px;
`;

const Button = styled.button`
  align-self: center;
  font-size: 14px;
  font-weight: 600;
  padding: 15px 30px;
  cursor: pointer;
  border-radius: 4px;
  border: none;
  outline: none;
  transition: 0.3s ease;
  background-color: #088178;
  color: #fff;
  margin-top: 15px;
`;

const People = styled.div`
  width: 30%;
  margin-top: 20px;

  @media (max-width: 768px) {
    width: 100%;
  }

  img {
    width: 65px;
    height: 65px;
    margin-right: 15px;
    object-fit: cover;
  }

  p {
    margin: 0;
    font-size: 13px;
    line-height: 25px;

    span {
      font-size: 20px;
      font-weight: 600;
      display: block;
      color: #000;
    }
  }
`;

const Item = styled.div`
  padding-bottom: 20px;
  display: flex;
  align-items: flex-start;
`;

const Contact = () => {
  return (
    <>
      <Header>
        <h2>#let's_talk</h2>
        <p>LEAVE A MESSEGE. We love to hear from you!</p>
      </Header>
      <Container>
        <Section>
          <Details>
            <span>GET IN TOUCH</span>
            <h2>Visit one of our agency location or contact us today</h2>
            <h3>Head Office</h3>
            <div>
              <li>
                <MapOutlined />
                <p>Kl university, Vaddeswaram, Andhra pradesh</p>
              </li>
              <li>
                <MailOutlined />
                <p>Contact@EVENTO.com</p>
              </li>
              <li>
                <PhoneOutlined />
                <p>1234567890</p>
              </li>
              <li>
                <AccessTime />
                <p>Monday to Sunday 9 am to 6 pm</p>
              </li>
            </div>
          </Details>
          <Map>
          <img src="img/p12.jpg" alt="" />
              
          </Map>
        </Section>
        <Form>
          <FormDetails>
            <h6>LEAVE A MESSEGE</h6>
            <h3>We love to hear from you</h3>
            <InputContainer>
              <Input type="text" placeholder="Your Name" />
              <Input type="text" placeholder="Email" />
              <Input type="text" placeholder="Subject" />
              <Input rows="15" placeholder="Your Messege"></Input>
              <Button class="btn-x">Submit</Button>
            </InputContainer>
          </FormDetails>
          <People>
            <Item>
              <img src="img/p1.png" alt="" />
              <p>
                <span>Vinay</span> student <br /> Phone: +
                91 123 456 78 90 <br /> Email: vinay@gmail.com
              </p>
            </Item>
            <Item>
              <img src="img/p2.png" alt="" />
              <p>
                <span>Charitha</span> student<br /> Phone:
                + 91 739 211 83 82 <br /> Email: charitha@gmail.com
              </p>
            </Item>
            <Item>
              <img src="img/p3.png" alt="" />
              <p>
                <span>Navya</span> student <br /> Phone:
                + 91 853 834 92 12 <br /> Email: navya@gmail.com
              </p>
            </Item>
          </People>
        </Form>
      </Container>
      <Newsletter />
      <Footer />
    </>
  );
};

export default Contact;
