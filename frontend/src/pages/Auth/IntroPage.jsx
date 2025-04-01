import React from 'react';
import { Container, Typography, Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const IntroPage = () => {
  return (
    <Container component="main" maxWidth="md" sx={{ textAlign: 'center', mt: 8 }}>
      <Typography variant="h3" sx={{ fontWeight: 'bold', mb: 4 }}>
        Welcome to Enterprise Expense Management System
      </Typography>
      <Typography variant="h6" sx={{ mb: 6 }}>
        Manage your expenses efficiently and effectively with our comprehensive platform.
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
        <Button variant="contained" color="primary" component={Link} to="/login" sx={{ fontWeight: 'bold' }}>
          Login
        </Button>
        <Button variant="outlined" color="primary" component={Link} to="/register" sx={{ fontWeight: 'bold' }}>
          Sign Up
        </Button>
      </Box>
    </Container>
  );
};

export default IntroPage;