import React, { useState, useEffect } from 'react';
import { Card, CardContent, Typography, Box, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const ExpenseRequestsCard = () => {
  const navigate = useNavigate();
  const [pendingRequests, setPendingRequests] = useState(0);

  useEffect(() => {
    // Fetch pending requests from API or state
    const fetchPendingRequests = async () => {
      // Simulate API call
      const response = await new Promise(resolve => setTimeout(() => resolve(5), 1000));
      setPendingRequests(response);
    };

    fetchPendingRequests();
  }, []);

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
            {pendingRequests}
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