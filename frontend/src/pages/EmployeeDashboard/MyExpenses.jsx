import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Box,
} from '@mui/material';
import Header from '../Layout/Header';
import Sidebar from '../Layout/Sidebar';

const MyExpenses = () => {
  const user = { name: 'John Doe', profilePic: '/employee-pic.jpg' };

  // Function to get the last month's date range
  const getLastMonthRange = () => {
    const today = new Date();
    const firstDayOfLastMonth = new Date(today.getFullYear(), today.getMonth() - 1, 1);
    const lastDayOfLastMonth = new Date(today.getFullYear(), today.getMonth(), 0);

    const formatDate = (date) => date.toLocaleDateString('en-US');

    return {
      startDate: formatDate(firstDayOfLastMonth),
      endDate: formatDate(lastDayOfLastMonth),
    };
  };

  const lastMonthRange = getLastMonthRange();

  // Fake data for expenses in the last month
  const lastMonthExpenses = [
    { id: 1, date: lastMonthRange.startDate, description: 'Client Lunch', amount: 4500.00, status: 'Approved' },
    { id: 2, date: lastMonthRange.startDate, description: 'Train Ticket', amount: 2200.50, status: 'Pending' },
    { id: 3, date: '2025-02-10', description: 'Office Supplies', amount: 1500.75, status: 'Approved' },
    { id: 4, date: '2025-02-18', description: 'Parking Fee', amount: 1000.00, status: 'Rejected' },
    { id: 5, date: lastMonthRange.endDate, description: 'Team Dinner', amount: 7800.20, status: 'Reimbursed' },
  ];

  // Filter expenses for the last month based on the date
  const filteredExpenses = lastMonthExpenses.filter(
    (expense) => expense.date >= lastMonthRange.startDate && expense.date <= lastMonthRange.endDate
  );

  return (
    <Box display="flex">
      <Header user={user} />
      <Sidebar />
      <Box flexGrow={1} padding={3} marginTop="64px">
        <Typography variant="h4" gutterBottom>
          My Expenses - Last Month ({lastMonthRange.startDate} - {lastMonthRange.endDate})
        </Typography>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="my expenses table">
            <TableHead>
              <TableRow>
                <TableCell>Date</TableCell>
                <TableCell>Description</TableCell>
                <TableCell align="right">Amount</TableCell>
                <TableCell>Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredExpenses.map((expense) => (
                <TableRow
                  key={expense.id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {expense.date}
                  </TableCell>
                  <TableCell>{expense.description}</TableCell>
                  <TableCell align="right">{expense.amount.toFixed(2)}</TableCell>
                  <TableCell>{expense.status}</TableCell>
                </TableRow>
              ))}
              {filteredExpenses.length === 0 && (
                <TableRow>
                  <TableCell colSpan={4}>No expenses found for the last month.</TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
};

export default MyExpenses;