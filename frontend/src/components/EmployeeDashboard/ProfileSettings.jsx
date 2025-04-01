import React from 'react';
import { Box, TextField, Typography } from "@mui/material";

const ProfileSettings = ({ user, handleInputChange }) => {
  return (
    <Box mb={4}>
      <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#333', mb: 2 }}>
        Profile Settings
      </Typography>
      <Box display="grid" gridTemplateColumns={{ xs: '1fr', md: '1fr 1fr' }} gap={2}>
        <TextField label="Full Name" name="name" value={user.name} onChange={handleInputChange} fullWidth />
        <TextField label="Email" name="email" value={user.email} onChange={handleInputChange} fullWidth />
      </Box>
    </Box>
  );
};

export default ProfileSettings;