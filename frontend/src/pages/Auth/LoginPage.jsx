import React from 'react';
import LoginForm from '../../components/Auth/LoginForm';
import { Link } from 'react-router-dom';
import { Container, Paper, Typography, Box } from '@mui/material';

const LoginPage = () => {
  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography component="h1" variant="h5">
          Login
        </Typography>
        <Paper elevation={3} sx={{ mt: 3, p: 4, width: '100%' }}>
          <LoginForm />
          <Box sx={{ mt: 2 }}>
            <Typography variant="body2" align="center">
              Don't have an account?{' '}
              <Link to="/register" variant="body2">
                Register
              </Link>
            </Typography>
            <Typography variant="body2" align="center" sx={{ mt: 1 }}>
              <Link to="/forgot-password" variant="body2">
                Forgot password?
              </Link>
            </Typography>
          </Box>
        </Paper>
      </Box>
    </Container>
  );
};

export default LoginPage;