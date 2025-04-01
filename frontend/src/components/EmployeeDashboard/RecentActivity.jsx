import React from 'react';
import { Card, CardContent, Typography, Box } from "@mui/material";

const RecentActivity = ({ activities }) => {
  return (
    <Box mb={4}>
      <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#333', mb: 2 }}>
        Recent Activity
      </Typography>
      <Card sx={{ boxShadow: '0 4px 20px rgba(0,0,0,0.1)', borderRadius: 2 }}>
        <CardContent>
          {activities.length > 0 ? (
            activities.map((activity, index) => (
              <Box key={index} display="flex" justifyContent="space-between" mb={2} p={2} sx={{ backgroundColor: '#f5f5f5', borderRadius: 1 }}>
                <Typography variant="body1" sx={{ fontWeight: 'bold', color: '#555' }}>
                  {activity.action}
                </Typography>
                <Typography variant="body2" sx={{ color: '#777' }}>
                  {activity.date}
                </Typography>
              </Box>
            ))
          ) : (
            <Typography variant="body2" sx={{ color: '#777' }}>
              No recent activity.
            </Typography>
          )}
        </CardContent>
      </Card>
    </Box>
  );
};

export default RecentActivity;