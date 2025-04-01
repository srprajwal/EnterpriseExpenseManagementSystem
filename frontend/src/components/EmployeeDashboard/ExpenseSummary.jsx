import React from 'react';
import { Card, CardContent, Typography, Box } from "@mui/material";
import { ReceiptLong } from "@mui/icons-material";

const ExpenseSummary = ({ totalExpense }) => {
  return (
    <Card sx={{ 
      background: 'linear-gradient(120deg, #2196f3 0%, #1976d2 100%)',
      color: 'white',
      marginBottom: 3,
      transition: 'transform 0.3s',
      '&:hover': { transform: 'translateY(-5px)' }
    }}>
      <CardContent>
        <Box display="flex" alignItems="center">
          <ReceiptLong sx={{ fontSize: 40, marginRight: 2 }} />
          <Box>
            <Typography variant="subtitle1">Total Expense</Typography>
            <Typography variant="h4">₹{totalExpense.toFixed(2)}</Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default ExpenseSummary;