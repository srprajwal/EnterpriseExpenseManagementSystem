import React from 'react';
import { Card, CardContent, Typography, Box, Avatar, List, ListItem, ListItemAvatar, ListItemText, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const TeamMembersCard = () => {
  const navigate = useNavigate();

  const teamMembers = [
    { id: 1, name: 'Alice Smith', avatar: '/alice-pic.jpg' },
    { id: 2, name: 'Bob Johnson', avatar: '/bob-pic.jpg' },
    { id: 3, name: 'Charlie Brown', avatar: '/charlie-pic.jpg' },
  ];

  return (
    <Card>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Team Members
        </Typography>
        <Typography variant="body2" color="textSecondary" sx={{ mb: 2 }}>
          View information about your team members.
        </Typography>
        <List>
          {teamMembers.slice(0, 2).map((member) => (
            <ListItem key={member.id}>
              <ListItemAvatar>
                <Avatar src={member.avatar} />
              </ListItemAvatar>
              <ListItemText primary={member.name} />
            </ListItem>
          ))}
        </List>
        {teamMembers.length > 2 && (
          <Typography variant="caption" color="textSecondary">
            +{teamMembers.length - 2} more team members
          </Typography>
        )}
        <Button
          variant="outlined"
          color="primary"
          fullWidth
          sx={{ mt: 2 }}
          onClick={() => navigate('/team')}
        >
          View All Team Members
        </Button>
      </CardContent>
    </Card>
  );
};

export default TeamMembersCard;