import React from 'react';
import { Box, Typography, Avatar } from "@mui/material";

const ProfileHeader = ({ user }) => {
  return (
    <Box 
      display="flex" 
      flexDirection={{ xs: 'column', md: 'row' }} 
      alignItems="center" 
      gap={3} 
      mb={4}
      textAlign={{ xs: 'center', md: 'left' }}
    >
      <Avatar 
        src={user.profilePic} 
        sx={{ width: 120, height: 120, border: "4px solid #ddd" }} 
      />
      <Box>
        <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#333' }}>
          {user.name}
        </Typography>
        <Typography variant="body1" sx={{ color: '#555' }}>
          {user.email}
        </Typography>
        <Typography variant="body2" sx={{ color: '#777' }}>
          Role: <span style={{ fontWeight: 'bold' }}>{user.role}</span>
        </Typography>
      </Box>
    </Box>
  );
};

export default ProfileHeader;