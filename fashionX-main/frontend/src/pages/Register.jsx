
import * as React from 'react';
import {useState} from 'react'
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import zxcvbn from 'zxcvbn';
import { registerUser } from "../redux/userRedux";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector, useDispatch } from 'react-redux';


const theme = createTheme();


export default function SignUp() {
  const dispatch = useDispatch();
  const [passwordStrength, setPasswordStrength] = useState(null);

const handlePasswordChange = (event) => {
  const password = event.target.value;
  const { score } = zxcvbn(password);
  setPasswordStrength(score);
};

  const [user, setUser] = useState({
    username: '',
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

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { username, email, password } = user;
    if (validateName(username) && validateEmail() && validatePassword()) {
      const data = await dispatch(registerUser(user));
      data.type === "user/register/fulfilled"
        ? toast.success("Successfully Registered")
        : toast.error("Invalid Credentials");
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
                  name="username"
                  required
                  fullWidth
                  id="username"
                  label="username"
                  autoFocus
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
                  onChange={(event) => {
                    handleChange(event);
                    handlePasswordChange(event);
                  }}
                  error={passwordStrength !== null && passwordStrength < 3}
                  helperText={
                    passwordStrength !== null &&
                    passwordStrength < 3 &&
                    'Password is not strong enough'
                  }
                />
                
                {passwordStrength !== null && (
                  <Typography color={passwordStrength < 3 ? 'error' : 'textPrimary'}>
                    Password strength: {['Very weak', 'Weak', 'Fair', 'Strong', 'Very strong'][passwordStrength]}
                  </Typography>
                )}
                
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