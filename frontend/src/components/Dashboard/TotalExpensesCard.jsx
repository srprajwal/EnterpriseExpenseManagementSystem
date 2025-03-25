import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const TotalExpensesCard = ({ totalExpenses }) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h6">Total Expenses</Typography>
        <Typography variant="h5">${totalExpenses ? totalExpenses.toFixed(2) : '0.00'}</Typography>
        <Typography variant="body2" color="textSecondary">
          {/* Placeholder: Calculate dynamically */}
          +12.5 % from last month
        </Typography>
      </CardContent>
    </Card>
  );
};

export default TotalExpensesCard;