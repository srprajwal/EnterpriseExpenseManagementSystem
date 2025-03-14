import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Alert } from '@mui/material';

const ForgotPasswordForm = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleForgotPassword = (e) => {
    e.preventDefault();
    //   Simulate success for now
    setMessage('A password reset link has been sent to your email.');
    setError('');

    //   In a real implementation, you would:
    //   - Call your backend API to send the reset link
    //   - Handle success/error responses
  };

  return (
    <form onSubmit={handleForgotPassword}>
      {message && <Alert severity="success">{message}</Alert>}
      {error && <Alert severity="error">{error}</Alert>}
      <TextField
        label="Email Address"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        fullWidth
        margin="normal"
        required
      />
      <Button
        type="submit"
        variant="contained"
        color="primary"
        fullWidth
        className="mt-4"
      >
        Send Reset Link
      </Button>
    </form>
  );
};

export default ForgotPasswordForm;