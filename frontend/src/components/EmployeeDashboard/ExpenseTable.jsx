import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Chip,
} from "@mui/material";

const ExpenseTable = ({ expenses }) => {
  const getStatusChip = (status) => {
    const color = status === "Approved" ? "success" : status === "Rejected" ? "error" : "warning";
    return <Chip label={status} color={color} variant="outlined" />;
  };

  return (
    <TableContainer 
      component={Paper}
      sx={{
        boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
        borderRadius: '8px',
        overflow: 'hidden'
      }}
    >
      <Table>
        <TableHead sx={{ backgroundColor: '#f5f5f5' }}>
          <TableRow>
            <TableCell sx={{ fontWeight: 'bold' }}>Date</TableCell>
            <TableCell sx={{ fontWeight: 'bold' }}>Expense Type</TableCell>
            <TableCell sx={{ fontWeight: 'bold' }}>Amount (₹)</TableCell>
            <TableCell sx={{ fontWeight: 'bold' }}>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {expenses.length > 0 ? (
            expenses.map((expense, index) => (
              <TableRow 
                key={index}
                sx={{
                  '&:nth-of-type(odd)': { backgroundColor: '#fafafa' },
                  '&:hover': { backgroundColor: '#f5f5f5' },
                  transition: 'background-color 0.2s'
                }}
              >
                <TableCell>{expense.date}</TableCell>
                <TableCell>{expense.type}</TableCell>
                <TableCell>{expense.amount}</TableCell>
                <TableCell>{getStatusChip(expense.status)}</TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={4} align="center">
                No expenses found.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ExpenseTable;