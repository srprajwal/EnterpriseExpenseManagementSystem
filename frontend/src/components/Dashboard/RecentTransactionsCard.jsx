import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';

const RecentTransactionsCard = ({ recentTransactions }) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h6">Recent Transactions</Typography>
        <Typography variant="body2" color="textSecondary">
          Your latest expense transactions
        </Typography>
        {recentTransactions.length > 0 ? (
          recentTransactions.map((transaction) => (
            <Box key={transaction.id} display="flex" justifyContent="space-between" alignItems="center" sx={{ mb: 1 }}>
              <Box display="flex" alignItems="center">
                {transaction.type === 'expense' ? '⬇️' : '⬆️'}
                <Typography sx={{ ml: 1 }}>{transaction.description}</Typography>
                <Typography sx={{ ml: 0.5, color: 'textSecondary' }}>{transaction.date}</Typography>
              </Box>
              <Typography color={transaction.type === 'expense' ? 'error' : 'success'}>
                {transaction.type === 'expense' ? `-${transaction.amount}` : `+${transaction.amount}`}
              </Typography>
            </Box>
          ))
        ) : (
          <Typography>No recent transactions available.</Typography>
        )}
      </CardContent>
    </Card>
  );
};

export default RecentTransactionsCard;