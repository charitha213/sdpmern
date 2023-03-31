import { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { registerUser } from "../redux/userRedux";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LoadingSpinner from "../components/Spinner";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.2),
      rgba(255, 255, 255, 0.2)
    ),
    url("https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.internationalbrandequity.com%2Fwp-content%2Fuploads%2F2022%2F04%2Fevent-management-guide.jpg&tbnid=33KJSzi7U_U8dM&vet=12ahUKEwiQx6W_7vP9AhW8-XMBHXIkAj0QMygAegUIARDbAQ..i&imgrefurl=https%3A%2F%2Fwww.internationalbrandequity.com%2Fevent-management%2F&docid=h6udvlfgNR156M&w=2000&h=1333&q=event%20management%20&ved=2ahUKEwiQx6W_7vP9AhW8-XMBHXIkAj0QMygAegUIARDbAQ");
  background-size: contain;
  background-position: 300% 50%;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media (max-width: 768px) {
    background-repeat: no-repeat;
    background-position: 60% center;
    background-size: cover;
  }
`;

const Wrapper = styled.div`
  width: 30%;
  height: 100%;
  padding: 20px;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  background: rgba(255, 255, 255, 0.8);

  @media (max-width: 768px) {
    width: 100%;
    padding: 0 30px;
  }
`;

const Title = styled.h1`
  font-size: 30px;
  font-weight: 600;
  color: #ffc0cb;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
  border: none;
  outline: 1px solid #ffc0cb;

  &:focus {
    outline: 2px solid #ffc0cb;
  }
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 12px 20px;
  background-color: #ffc0cb;
  color: white;
  cursor: pointer;
`;

const Register = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [userDetails, setUserDetails] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setUserDetails({
      ...userDetails,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const { confirmPassword, ...user } = userDetails;

    if (userDetails.password === userDetails.confirmPassword) {
      try {
      } catch (err) {
        console.log(err);
        toast.error("Something went wrong");
      }
      const data = await dispatch(registerUser(user));
      data.type === "user/register/fulfilled"
        ? toast.success("Successfully Registered")
        : toast.error("Invalid Credentials");
    } else {
      toast.error("Passwords do not match");
    }
    setLoading(false);
  };
  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form onSubmit={handleSubmit}>
          <Input
            name="username"
            type="name"
            value={userDetails.username}
            placeholder="username"
            onChange={handleChange}
          />
          <Input
            name="email"
            type="email"
            value={userDetails.email}
            placeholder="email"
            onChange={handleChange}
          />
          <Input
            name="password"
            type="password"
            value={userDetails.password}
            placeholder="password"
            onChange={handleChange}
          />
          <Input
            placeholder="confirm password"
            name="confirmPassword"
            type="password"
            value={userDetails.confirmPassword}
            onChange={handleChange}
          />
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          <Button type="submit">CREATE</Button>
          {loading && <LoadingSpinner />}
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
