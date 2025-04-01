import React from 'react';
import { Box, Button, Typography } from "@mui/material";
import { CloudUpload } from "@mui/icons-material";

const ProfilePictureUpdate = ({ handleProfilePicChange }) => {
  return (
    <Box mb={4}>
      <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#333', mb: 2 }}>
        Update Profile Picture
      </Typography>
      <Button 
        variant="outlined" 
        component="label"
        sx={{ 
          borderColor: '#1976d2', 
          color: '#1976d2', 
          '&:hover': { borderColor: '#1565c0', color: '#1565c0' }
        }}
      >
        <CloudUpload sx={{ mr: 1 }} /> Upload Picture
        <input type="file" hidden accept="image/*" onChange={handleProfilePicChange} />
      </Button>
    </Box>
  );
};

export default ProfilePictureUpdate;