import React from 'react';
import { Box, Typography, TextField, Button } from "@mui/material";

const ProfileDetails = ({ manager, setManager }) => {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setManager({ ...manager, [name]: value });
  };

  const handleSave = () => {
    alert("Profile updated successfully!");
  };

  return (
    <Box>
      <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#333', mb: 2 }}>
        Personal Information
      </Typography>
      <Box display="grid" gridTemplateColumns={{ xs: '1fr', md: '1fr 1fr' }} gap={2}>
        <TextField label="Full Name" name="name" value={manager.name} onChange={handleInputChange} fullWidth />
        <TextField label="Email" name="email" value={manager.email} onChange={handleInputChange} fullWidth />
      </Box>
      <Button
        variant="contained"
        color="primary"
        onClick={handleSave}
        sx={{ mt: 2, backgroundColor: '#1976d2', '&:hover': { backgroundColor: '#1565c0' }, fontWeight: 'bold' }}
      >
        Save Changes
      </Button>
    </Box>
  );
};

export default ProfileDetails;