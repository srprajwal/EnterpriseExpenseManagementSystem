import React from 'react';
import { Box, Typography, List, ListItem, ListItemAvatar, ListItemText, Avatar } from '@mui/material';
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
      <Box flexGrow={1} padding={3} marginTop="64px">
        <Typography variant="h4" gutterBottom>
          Team Members
        </Typography>
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
      </Box>
    </Box>
  );
};

export default TeamMembersPage;