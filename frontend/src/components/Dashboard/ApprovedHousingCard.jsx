import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const ApprovedHousingCard = ({ approvedHousing }) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h6">Approved</Typography>
        <Typography variant="h5">Housing</Typography>
        <Typography variant="body2" color="textSecondary">
          ${approvedHousing ? approvedHousing.toFixed(2) : '0.00'} (32%)
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ApprovedHousingCard;