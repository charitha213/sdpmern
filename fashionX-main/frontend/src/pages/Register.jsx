
import * as React from 'react';
import {useState} from 'react'
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from "axios";


const theme = createTheme();

export default function SignUp() {
  const [user, setUser] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user, // spread operator
      [name]: value,
    });
  };

  const validateEmail = () => {
    if (!user.email) {
      alert('Please enter an email');
      return false;
    }
    // Basic email validation
    const re = /\S+@\S+\.\S+/;
    if (!re.test(user.email)) {
      alert('Please enter a valid email');
      return false;
    }
    return true;
  };

  const validateName = (name) => {
    if (!name) {
      alert('Please enter a name');
      return false;
    }
    // Name should be at least 2 characters long
    if (name.length < 2) {
      alert('Name should be at least 2 characters long');
      return false;
    }
    return true;
  };

  const validatePassword = () => {
    if (!user.password) {
      alert('Please enter a password');
      return false;
    }
    // Password should be at least 6 characters long
    if (user.password.length < 6) {
      alert('Password should be at least 6 characters long');
      return false;
    }
    return true;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const { firstName, lastName, email, password } = user;
    if (validateName(firstName) && validateName(lastName) && validateEmail() && validatePassword()) {
      axios
        .post('http://localhost:6969/Register', user)
        .then((res) => console.log(res));
    }
  };


  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
        
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                onChange={handleChange}
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="Check the conditions"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
          </Box>
        </Box>
    
      </Container>
    </ThemeProvider>
  );
}