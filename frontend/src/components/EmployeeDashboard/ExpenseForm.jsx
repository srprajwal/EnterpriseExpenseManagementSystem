import React from 'react';
import {
  Box,
  TextField,
  MenuItem,
  Button,
  Paper,
  Typography,
  InputAdornment,
} from "@mui/material";
import { AttachFile, AddCircleOutline, Refresh } from "@mui/icons-material";

const ExpenseForm = ({ newExpense, handleInputChange, handleFileChange, handleAddExpense, expenseTypes }) => {
  return (
    <Paper sx={{ 
      p: 4, 
      boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
      borderRadius: '12px',
      background: 'linear-gradient(to right bottom, #ffffff, #fafafa)'
    }}>
      <Box sx={{ display: 'grid', gridTemplateColumns: { md: '1fr 1fr' }, gap: 3 }}>
        <TextField
          select
          label="Expense Type"
          name="type"
          value={newExpense.type}
          onChange={handleInputChange}
          fullWidth
          sx={{ '& .MuiOutlinedInput-root': { borderRadius: '8px' } }}
        >
          {expenseTypes.map((type) => (
            <MenuItem key={type} value={type}>{type}</MenuItem>
          ))}
        </TextField>

        <TextField
          type="number"
          label="Amount"
          name="amount"
          value={newExpense.amount}
          onChange={handleInputChange}
          fullWidth
          InputProps={{
            startAdornment: <InputAdornment position="start">₹</InputAdornment>,
          }}
          sx={{ '& .MuiOutlinedInput-root': { borderRadius: '8px' } }}
        />

        <TextField
          type="date"
          label="Expense Date"
          name="date"
          value={newExpense.date}
          onChange={handleInputChange}
          fullWidth
          InputLabelProps={{ shrink: true }}
          sx={{ '& .MuiOutlinedInput-root': { borderRadius: '8px' } }}
        />

        <Button 
          variant="outlined" 
          component="label"
          sx={{ 
            height: '56px',
            borderRadius: '8px',
            borderWidth: '2px',
            '&:hover': { borderWidth: '2px' }
          }}
        >
          <AttachFile sx={{ mr: 1 }} /> Attach File
          <input type="file" hidden accept=".pdf,.jpg,.png" onChange={handleFileChange} />
        </Button>

        {newExpense.file && (
          <Typography variant="body2" color="text.secondary" sx={{ gridColumn: '1 / -1' }}>
            File: {newExpense.file.name}
          </Typography>
        )}
      </Box>

      <Box sx={{ display: 'flex', gap: 2, mt: 4 }}>
        <Button
          variant="contained"
          onClick={handleAddExpense}
          startIcon={<AddCircleOutline />}
          sx={{
            background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
            color: 'white',
            boxShadow: '0 3px 5px 2px rgba(33, 203, 243, .3)',
            '&:hover': {
              background: 'linear-gradient(45deg, #1976D2 30%, #00BCD4 90%)',
            }
          }}
        >
          Add Expense
        </Button>

        <Button
          variant="contained"
          onClick={() => setNewExpense({ type: "", amount: "", file: null, date: "" })}
          startIcon={<Refresh />}
          sx={{
            background: 'linear-gradient(45deg, #757575 30%, #9E9E9E 90%)',
            '&:hover': {
              background: 'linear-gradient(45deg, #616161 30%, #757575 90%)',
            }
          }}
        >
          Reset
        </Button>
      </Box>
    </Paper>
  );
};

export default ExpenseForm;