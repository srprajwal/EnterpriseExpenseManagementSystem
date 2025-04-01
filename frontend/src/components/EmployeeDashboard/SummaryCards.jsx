import React from 'react';
import { Grid, Card, CardContent, Typography } from "@mui/material";
import { Receipt, PendingActions, CheckCircle } from "@mui/icons-material";

const SummaryCards = ({ summaryData }) => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={4}>
        <Card sx={{ 
          background: 'linear-gradient(135deg, #6B8DD6 0%, #8E37D7 100%)',
          color: 'white',
          transition: 'transform 0.3s',
          '&:hover': { transform: 'translateY(-5px)' }
        }}>
          <CardContent sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Receipt fontSize="large" />
            <Typography variant="h6">
              Total Expenses: ₹{summaryData.totalExpenses}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={4}>
        <Card sx={{ 
          background: 'linear-gradient(135deg, #FF9966 0%, #FF5E62 100%)',
          color: 'white',
          transition: 'transform 0.3s',
          '&:hover': { transform: 'translateY(-5px)' }
        }}>
          <CardContent sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <PendingActions fontSize="large" />
            <Typography variant="h6">
              Pending: {summaryData.pendingApprovals}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={4}>
        <Card sx={{ 
          background: 'linear-gradient(135deg, #43C6AC 0%, #191654 100%)',
          color: 'white',
          transition: 'transform 0.3s',
          '&:hover': { transform: 'translateY(-5px)' }
        }}>
          <CardContent sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <CheckCircle fontSize="large" />
            <Typography variant="h6">
              Approved: {summaryData.approvedExpenses}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default SummaryCards;