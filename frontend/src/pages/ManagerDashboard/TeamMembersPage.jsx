import React from 'react';
import { Box, Typography, List, ListItem, ListItemAvatar, ListItemText, Avatar, Paper } from '@mui/material';
import Header from '../Layout/Header';
import Sidebar from '../Layout/Sidebar';

const TeamMembersPage = () => {
  const user = { name: 'Jane Doe', profilePic: '/manager-pic.jpg' };
  const teamMembers = [
    { id: 1, name: 'Alice Smith', email: 'alice.smith@example.com', avatar: '/alice-pic.jpg' },
    { id: 2, name: 'Bob Johnson', email: 'bob.johnson@example.com', avatar: '/bob-pic.jpg' },
    { id: 3, name: 'Charlie Brown', email: 'charlie.brown@example.com', avatar: '/charlie-pic.jpg' },
    { id: 4, name: 'Diana Lee', email: 'diana.lee@example.com', avatar: '/diana-pic.jpg' },
  ];

  return (
    <Box display="flex">
      <Header user={user} />
      <Sidebar />
      <Box flexGrow={1} padding={3} marginTop="64px" sx={{ backgroundColor: '#f0f4f8', minHeight: '100vh' }}>
        <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', color: '#333' }}>
          Team Members
        </Typography>
        <Paper sx={{ p: 3, boxShadow: '0 4px 20px rgba(0,0,0,0.1)', borderRadius: 2 }}>
          <List>
            {teamMembers.map((member) => (
              <ListItem key={member.id}>
                <ListItemAvatar>
                  <Avatar src={member.avatar} />
                </ListItemAvatar>
                <ListItemText primary={member.name} secondary={member.email} />
              </ListItem>
            ))}
          </List>
        </Paper>
      </Box>
    </Box>
  );
};

export default TeamMembersPage;