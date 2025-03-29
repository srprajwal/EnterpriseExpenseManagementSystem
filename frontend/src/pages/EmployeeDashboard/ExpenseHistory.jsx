import React, { useState } from 'react';
import { Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import Header from '../Layout/Header';
import Sidebar from '../Layout/Sidebar';




const ExpenseHistory = () => {
  const user = { name: 'John Doe', profilePic: '/employee-pic.jpg' };
  const [filterMonth, setFilterMonth] = useState('');

  // Fake data for employee's expense history
  const allExpenses = [
    { id: 1, date: '2025-03-25', description: 'Client Lunch', amount: 4500.00, status: 'Approved' },
    { id: 2, date: '2025-03-24', description: 'Train Ticket', amount: 2200.50, status: 'Pending' },
    { id: 3, date: '2025-02-10', description: 'Office Supplies', amount: 1500.75, status: 'Approved' },
    { id: 4, date: '2025-02-18', description: 'Parking Fee', amount: 1000.00, status: 'Rejected' },
    { id: 5, date: '2025-01-30', description: 'Team Dinner', amount: 7800.20, status: 'Reimbursed' },
    { id: 6, date: '2025-04-05', description: 'Conference Registration', amount: 150.00, status: 'Pending' },
    { id: 7, date: '2025-04-12', description: 'Mileage', amount: 3000.00, status: 'Approved' },
  ];

  const handleFilterMonthChange = (event) => {
    setFilterMonth(event.target.value);
  };

  const filteredExpenses = filterMonth
    ? allExpenses.filter((expense) => {
      const expenseMonth = new Date(expense.date).toLocaleString('default', { month: 'long' });
      return expenseMonth === filterMonth;
    })
    : allExpenses;

  const getUniqueMonths = () => {
    const months = [...new Set(allExpenses.map((expense) => new Date(expense.date).toLocaleString('default', { month: 'long' })))];
    return months.sort(); // Sort months alphabetically
  };

  const uniqueMonths = getUniqueMonths();

  return (
    <Box display="flex">
      <Header user={user} />
      <Sidebar />
      <Box flexGrow={1} padding={3} marginTop="64px">
        <Typography variant="h4" gutterBottom>
          Expense History
        </Typography>

        <FormControl sx={{ mb: 2, minWidth: 120 }} size="small">
          <InputLabel id="month-filter-label">Filter by Month</InputLabel>
          <Select
            labelId="month-filter-label"
            id="month-filter"
            value={filterMonth}
            label="Filter by Month"
            onChange={handleFilterMonthChange}
          >
            <MenuItem value="">All Months</MenuItem>
            {uniqueMonths.map((month) => (
              <MenuItem key={month} value={month}>
                {month}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="expense history table">
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
                  <TableCell colSpan={4}>No expenses found for the selected month.</TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
};

export default ExpenseHistory;