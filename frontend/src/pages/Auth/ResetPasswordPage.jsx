import React from 'react';
import { useSearchParams } from 'react-router-dom';
import ResetPasswordForm from '../../components/Auth/ResetPasswordForm';
import { Container, Paper, Typography } from '@mui/material';

const ResetPasswordPage = () => {
  const [searchParams] = useSearchParams();
  const token = searchParams.get("token"); // ✅ Get token from query params

  return (
    <Container component="main" maxWidth="xs">
      <Paper elevation={3} sx={{ mt: 8, p: 4, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Typography component="h1" variant="h5">Reset Password</Typography>
        {token ? <ResetPasswordForm token={token} /> : <Typography color="error">Invalid or missing token.</Typography>}
      </Paper>
    </Container>
  );
};

export default ResetPasswordPage;
