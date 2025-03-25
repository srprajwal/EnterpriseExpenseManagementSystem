import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const MonthlyBudgetCard = ({ monthlyBudget }) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h6">Monthly Budget</Typography>
        <Typography variant="h5">${monthlyBudget ? monthlyBudget.toFixed(2) : '0.00'}</Typography>
        <Typography variant="body2" color="textSecondary">
          {/* Placeholder: Calculate dynamically */}
          38 % used
        </Typography>
      </CardContent>
    </Card>
  );
};

export default MonthlyBudgetCard;