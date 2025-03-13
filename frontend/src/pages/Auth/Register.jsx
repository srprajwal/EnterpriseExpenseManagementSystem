import React from 'react';
import RegisterForm from '../../components/Auth/RegisterForm';
import { Link } from 'react-router-dom';
import { Container, Typography, Paper } from '@mui/material'; // MUI components

const RegisterPage = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <Container maxWidth="sm">
        <Paper elevation={3} className="p-8">
          <Typography variant="h4" component="h1" align="center" gutterBottom>
            Register
          </Typography>
          <RegisterForm />
          <Typography variant="body2" align="center" className="mt-4">
            Already have an account?{' '}
            <Link to="/login" className="text-blue-500 hover:underline">
              Login
            </Link>
          </Typography>
        </Paper>
      </Container>
    </div>
  );
};

export default RegisterPage;