import React from 'react';
import { Box, TextField, Button, Typography } from "@mui/material";
import { Save } from "@mui/icons-material";

const EditProfile = ({ user, handleInputChange, handleProfileUpdate }) => {
  return (
    <Box mb={4}>
      <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#333', mb: 2 }}>
        Edit Profile
      </Typography>
      <Box display="grid" gridTemplateColumns={{ xs: '1fr', md: '1fr 1fr' }} gap={2}>
        <TextField label="Full Name" name="name" value={user.name} onChange={handleInputChange} fullWidth />
        <TextField label="Email" name="email" value={user.email} onChange={handleInputChange} fullWidth />
        <TextField label="Phone Number" name="phone" value={user.phone} onChange={handleInputChange} fullWidth />
      </Box>
      <Button
        variant="contained"
        color="primary"
        startIcon={<Save />}
        onClick={handleProfileUpdate}
        sx={{ mt: 3, backgroundColor: '#1976d2', '&:hover': { backgroundColor: '#1565c0' } }}
      >
        Save Profile
      </Button>
    </Box>
  );
};

export default EditProfile;