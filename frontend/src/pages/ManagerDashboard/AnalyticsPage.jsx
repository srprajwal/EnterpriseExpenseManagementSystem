import React from 'react';
import { Box, Typography } from '@mui/material';
import Header from '../Layout/Header';
import Sidebar from '../Layout/Sidebar';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const AnalyticsPage = () => {
  const user = { name: 'Jane Doe', profilePic: '/manager-pic.jpg' };
  const data = [
    { month: 'Jan', Travel: 4000, Food: 3000, Supplies: 2000 },
    { month: 'Feb', Travel: 3500, Food: 4000, Supplies: 2500 },
    { month: 'Mar', Travel: 4200, Food: 3500, Supplies: 2800 },
    { month: 'Apr', Travel: 3800, Food: 4200, Supplies: 2200 },
    { month: 'May', Travel: 4500, Food: 3800, Supplies: 3000 },
  ];

  return (
    <Box display="flex">
      <Header user={user} />
      <Sidebar />
      <Box flexGrow={1} padding={3} marginTop="64px">
        <Typography variant="h4" gutterBottom>
          Expense Analytics
        </Typography>
        <Typography variant="body1" paragraph>
          Here you can find detailed analytics about your team's expenses.
        </Typography>
        <Box sx={{ width: '100%', height: 400 }}>
          <ResponsiveContainer>
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="Travel" fill="#8884d8" />
              <Bar dataKey="Food" fill="#82ca9d" />
              <Bar dataKey="Supplies" fill="#ffc658" />
            </BarChart>
          </ResponsiveContainer>
        </Box>
      </Box>
    </Box>
  );
};

export default AnalyticsPage;