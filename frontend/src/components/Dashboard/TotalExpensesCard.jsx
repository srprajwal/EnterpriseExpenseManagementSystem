import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const TotalExpensesCard = ({ totalExpenses }) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h6">Total Expenses</Typography>
        <Typography variant="h5">{totalExpenses ? totalExpenses : '₹0.00'}</Typography>
        <Typography variant="body2" color="textSecondary">
          {/* Placeholder: Calculate dynamically */}
          +10.5 % from last month
        </Typography>
      </CardContent>
    </Card>
  );
};

export default TotalExpensesCard;