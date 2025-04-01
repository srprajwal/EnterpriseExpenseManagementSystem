import React from 'react';
import { Box, Typography, Paper } from '@mui/material';
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
      <Box flexGrow={1} padding={3} marginTop="64px" sx={{ backgroundColor: '#f0f4f8', minHeight: '100vh' }}>
        <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', color: '#333' }}>
          Expense Analytics
        </Typography>
        <Typography variant="body1" paragraph sx={{ color: '#555' }}>
          Here you can find detailed analytics about your team's expenses.
        </Typography>
        <Paper sx={{ p: 3, boxShadow: '0 4px 20px rgba(0,0,0,0.1)', borderRadius: 2 }}>
          <ResponsiveContainer width="100%" height={400}>
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
        </Paper>
      </Box>
    </Box>
  );
};

export default AnalyticsPage;