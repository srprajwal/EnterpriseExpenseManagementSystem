import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Button } from "@mui/material";


const AnalyticsCard = () => {
  const navigate = useNavigate();

  // Fake analytics data
  const data = [
    { month: 'Jan', expenses: 1000 },
    { month: 'Feb', expenses: 1200 },
    { month: 'Mar', expenses: 950 },
    { month: 'Apr', expenses: 1100 },
    { month: 'May', expenses: 1300 },
  ];

  return (
    <Card>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Expense Analytics
        </Typography>
        <Typography variant="body2" color="textSecondary" sx={{ mb: 2 }}>
          Track expense trends within your team.
        </Typography>
        <Box sx={{ width: '100%', height: 200 }}>
          <ResponsiveContainer>
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="expenses" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        </Box>
        <Button
          variant="outlined"
          color="primary"
          fullWidth
          sx={{ mt: 2 }}
          onClick={() => navigate('/analytics')}
        >
          View Full Analytics
        </Button>
      </CardContent>
    </Card>
  );
};

export default AnalyticsCard;