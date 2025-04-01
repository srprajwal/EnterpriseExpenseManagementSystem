import React from 'react';
import { Box, TextField, Button, Typography } from "@mui/material";
import { Lock } from "@mui/icons-material";

const ChangePassword = ({ passwords, handlePasswordChange, handleChangePassword }) => {
  return (
    <Box mb={4}>
      <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#333', mb: 2 }}>
        Change Password
      </Typography>
      <Box display="grid" gridTemplateColumns={{ xs: '1fr', md: '1fr 1fr 1fr' }} gap={2}>
        <TextField label="Current Password" type="password" name="currentPassword" value={passwords.currentPassword} onChange={handlePasswordChange} fullWidth />
        <TextField label="New Password" type="password" name="newPassword" value={passwords.newPassword} onChange={handlePasswordChange} fullWidth />
        <TextField label="Confirm Password" type="password" name="confirmPassword" value={passwords.confirmPassword} onChange={handlePasswordChange} fullWidth />
      </Box>
      <Button
        variant="contained"
        color="secondary"
        startIcon={<Lock />}
        onClick={handleChangePassword}
        sx={{ mt: 3, backgroundColor: '#424242', '&:hover': { backgroundColor: '#333' } }}
      >
        Change Password
      </Button>
    </Box>
  );
};

export default ChangePassword;