import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { styled } from '@mui/system';
import Avatar from '@mui/material/Avatar';
import logo from '../Images/evlogo.png';
import { Alert } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import allowedCredentials from './data/security';

const theme = createTheme({
  palette: {
    primary: {
      main: '#87CEEB',
    },
  },
});

const StyledForm = styled('form')(({ theme }) => ({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: theme.spacing(4),
  background: 'white',
}));

const StyledTextField = styled(TextField)(({ theme }) => ({
  '& .MuiOutlinedInput-root': {
    borderRadius: theme.spacing(3),
  },
  marginBottom: theme.spacing(2),
  width: '150%',
}));

const StyledButton = styled(Button)(({ theme }) => ({
  margin: theme.spacing(2, 0),
  padding: theme.spacing(1),
  fontSize: '0.8rem',
  width: '100%', // Make the button take up the full width
}));

const StyledOuterWrapper = styled('div')({
  minHeight: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  background: 'white', // White background
});

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [alert, setAlert] = useState(false);

  const handleClose = () => {
    setAlert(false);
  };

  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();

    const isValidCredentials = allowedCredentials.some(
      (cred) => cred.username === username && cred.password === password
    );

    if (isValidCredentials) {
      navigate('/dashboard');
    } else {
      setAlert(true);
      setUsername('');
      setPassword('');
    }
  };

  return (
    <div style={{ backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '100vh', padding: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
      <ThemeProvider theme={theme}>
        <StyledOuterWrapper>
          <StyledForm noValidate onSubmit={handleLogin}>
            <Avatar style={{ width: '80px', height: '80px' }} src={logo} alt="Electric App Logo" />
            <Typography component="h3" variant="h6">
              We are Blu-electric
            </Typography>
            {alert && (
              <Alert severity="error" onClose={handleClose}>Wrong username or password</Alert>
            )}
            <StyledTextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="username"
              label="Username"
              name="username"
              autoComplete="username"
              autoFocus
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <StyledTextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <StyledButton
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
            >
              Login
            </StyledButton>
            <Typography style={{ color: '#4682B4', textAlign: 'center', marginTop: '10px' }}>Forgot password?</Typography>
          </StyledForm>
        </StyledOuterWrapper>
      </ThemeProvider>
    </div>
  );
}
