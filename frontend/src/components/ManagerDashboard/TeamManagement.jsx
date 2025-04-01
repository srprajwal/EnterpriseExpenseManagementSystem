import React from 'react';
import { Box, Typography, List, ListItem, ListItemAvatar, Avatar, ListItemText } from "@mui/material";

const TeamManagement = () => {
  const teamMembers = [
    { id: 1, name: 'Alice Smith', avatar: '/alice-pic.jpg' },
    { id: 2, name: 'Bob Johnson', avatar: '/bob-pic.jpg' },
  ];

  return (
    <Box>
      <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#333', mb: 2 }}>
        Team Management
      </Typography>
      <List>
        {teamMembers.map((member) => (
          <ListItem key={member.id}>
            <ListItemAvatar>
              <Avatar src={member.avatar} />
            </ListItemAvatar>
            <ListItemText primary={member.name} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default TeamManagement;