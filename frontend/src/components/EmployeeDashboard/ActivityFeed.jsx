import React from 'react';
import { Card, CardContent, Typography, List, ListItem, ListItemText, ListItemIcon } from "@mui/material";
import { Notifications } from "@mui/icons-material";

const ActivityFeed = ({ activities }) => {
  return (
    <Card sx={{ 
      boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
      borderRadius: '16px',
      background: 'linear-gradient(to right bottom, #ffffff, #f8f9fa)'
    }}>
      <CardContent>
        <Typography variant="h6" gutterBottom sx={{ 
          color: '#1976d2',
          fontWeight: 600,
          borderBottom: '2px solid #e3f2fd',
          paddingBottom: '8px'
        }}>
          Recent Activity
        </Typography>
        <List>
          {activities.map((activity, index) => (
            <ListItem 
              key={index}
              sx={{
                borderRadius: '8px',
                mb: 1,
                '&:hover': { 
                  backgroundColor: '#f5f5f5',
                  transform: 'translateX(10px)',
                  transition: 'all 0.3s ease'
                }
              }}
            >
              <ListItemIcon>
                <Notifications sx={{ color: '#1976d2' }} />
              </ListItemIcon>
              <ListItemText 
                primary={activity}
                sx={{ '& .MuiTypography-root': { fontWeight: 500 } }}
              />
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  );
};

export default ActivityFeed;