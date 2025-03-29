import React from 'react';
import { Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@mui/material';
import Header from '../Layout/Header';
import Sidebar from '../Layout/Sidebar';

const ExpenseRequestsPage = () => {
  const user = { name: 'Jane Doe', profilePic: '/manager-pic.jpg' };
  const expenseRequests = [
    { id: 1, employee: 'Alice Smith', date: '2025-03-25', description: 'Client Dinner', amount: 8500.00, status: 'Pending' },
    { id: 2, employee: 'Bob Johnson', date: '2025-03-24', description: 'Travel to Site', amount: 1200.00, status: 'Pending' },
    { id: 3, employee: 'Charlie Brown', date: '2025-03-23', description: 'Office Supplies', amount: 3000.50, status: 'Approved' },
  ];

  return (
    <Box display="flex">
      <Header user={user} />
      <Sidebar />
      <Box flexGrow={1} padding={3} marginTop="64px">
        <Typography variant="h4" gutterBottom>
          Expense Requests
        </Typography>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 750 }} aria-label="expense requests table">
            <TableHead>
              <TableRow>
                <TableCell>Employee</TableCell>
                <TableCell>Date</TableCell>
                <TableCell>Description</TableCell>
                <TableCell align="right">Amount</TableCell>
                <TableCell>Status</TableCell>
                <TableCell align="right">Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {expenseRequests.map((request) => (
                <TableRow
                  key={request.id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {request.employee}
                  </TableCell>
                  <TableCell>{request.date}</TableCell>
                  <TableCell>{request.description}</TableCell>
                  <TableCell align="right">{request.amount.toFixed(2)}</TableCell>
                  <TableCell>{request.status}</TableCell>
                  <TableCell align="right">
                    {request.status === 'Pending' && (
                      <Box>
                        <Button color="primary" sx={{ mr: 1 }}>Approve</Button>
                        <Button color="error">Reject</Button>
                      </Box>
                    )}
                    {request.status !== 'Pending' && (
                      <Typography variant="caption" color="textSecondary">
                        No Actions
                      </Typography>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
};

export default ExpenseRequestsPage;