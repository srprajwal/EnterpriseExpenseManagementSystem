import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const ApprovedHousingCard = ({ approvedHousing }) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h6">Approved</Typography>
        <Typography variant="h5">Bills</Typography>
        <Typography variant="body2" color="textSecondary">
          {approvedHousing ? approvedHousing : '₹0.00'} (30%)
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ApprovedHousingCard;