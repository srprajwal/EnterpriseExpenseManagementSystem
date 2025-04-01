import React from 'react';
import {
  Paper,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  IconButton,
} from "@mui/material";
import { Delete } from "@mui/icons-material";

const ExpenseList = ({ expenses, handleDeleteExpense }) => {
  return (
    <Paper sx={{ 
      mt: 3, 
      p: 3,
      boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
      borderRadius: '12px',
      background: 'linear-gradient(to right bottom, #ffffff, #fafafa)'
    }}>
      <Typography 
        variant="h6" 
        sx={{ 
          mb: 3,
          color: '#1976d2',
          fontWeight: 600,
          borderBottom: '2px solid #e3f2fd',
          paddingBottom: '8px'
        }}
      >
        Added Expenses
      </Typography>
      
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow sx={{ backgroundColor: '#f5f5f5' }}>
              <TableCell sx={{ fontWeight: 'bold' }}>Date</TableCell>
              <TableCell sx={{ fontWeight: 'bold' }}>Expense Type</TableCell>
              <TableCell sx={{ fontWeight: 'bold' }}>Amount (₹)</TableCell>
              <TableCell sx={{ fontWeight: 'bold' }}>Attachment</TableCell>
              <TableCell sx={{ fontWeight: 'bold' }}>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {expenses.map((expense, index) => (
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
                <TableCell>
                  {expense.file ? (
                    <a href="#" style={{ color: '#1976d2', textDecoration: 'underline' }}>View</a>
                  ) : "No file"}
                </TableCell>
                <TableCell>
                  <IconButton 
                    onClick={() => handleDeleteExpense(index)}
                    sx={{
                      color: '#f44336',
                      '&:hover': { backgroundColor: '#ffebee' }
                    }}
                  >
                    <Delete />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default ExpenseList;