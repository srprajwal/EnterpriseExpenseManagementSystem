import React from 'react';
import { Card, CardContent, Typography, Box, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const ExpenseRequestsCard = () => {
  const navigate = useNavigate();

  return (
    <Card>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Expense Requests
        </Typography>
        <Typography variant="body2" color="textSecondary" sx={{ mb: 2 }}>
          Review and manage pending expense reports from your team.
        </Typography>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="subtitle1">Pending Requests:</Typography>
          <Typography variant="h5" color="primary">
            5
          </Typography>
        </Box>
        <Button
          variant="contained"
          color="primary"
          fullWidth
          sx={{ mt: 2 }}
          onClick={() => navigate('/expense-requests')}
        >
          View Requests
        </Button>
      </CardContent>
    </Card>
  );
};

export default ExpenseRequestsCard;