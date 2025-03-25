import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const PendingApprovalsCard = ({ pendingApprovalsCount }) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h6">Pending Approvals</Typography>
        <Typography variant="h5">{pendingApprovalsCount}</Typography>
        <Typography variant="body2" color="textSecondary">
          2 new since yesterday
        </Typography>
      </CardContent>
    </Card>
  );
};

export default PendingApprovalsCard;