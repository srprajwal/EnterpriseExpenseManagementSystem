import React, { useState } from 'react';

import { TextField, Button, Alert, CircularProgress } from '@mui/material';
import authService from '../../services/authService'; // Import authService

const ForgotPasswordForm = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    setError('');
    setLoading(true);

    try {
      await authService.forgotPassword(email);
      setMessage('Password reset link sent to your email.');
      setEmail(''); // Clear the email field
    } catch (error) {
      setError(error.response?.data?.message || 'Failed to send reset link. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {message && <Alert severity="success" className="mb-2">{message}</Alert>}
      {error && <Alert severity="error" className="mb-2">{error}</Alert>}
      <TextField
        label="Email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        fullWidth
        margin="normal"
        disabled={loading}
      />
      <Button
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
        className="mt-4"
        disabled={loading}
      >
        {loading ? <CircularProgress size={24} /> : 'Send Reset Link'}
      </Button>
    </form>
  );
};

export default ForgotPasswordForm;