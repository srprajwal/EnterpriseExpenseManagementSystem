import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts'; // Example chart library

const ExpenseOverviewCard = ({ expenseOverviewData }) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h6">Expense Overview</Typography>
        <Typography variant="body2" color="textSecondary">
          Your expense trend for the last 6 months
        </Typography>
        {expenseOverviewData.length > 0 ? (
          <BarChart width={500} height={300} data={expenseOverviewData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="amount" fill="#8884d8" />
          </BarChart>
        ) : (
          <Typography>No expense overview data available.</Typography>
        )}
      </CardContent>
    </Card>
  );
};

export default ExpenseOverviewCard;