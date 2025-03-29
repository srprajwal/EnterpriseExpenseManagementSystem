import React, { useState } from 'react';
import {
  Box,
  Typography,
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Grid,
  Snackbar,
  Alert,
} from '@mui/material';
import Header from '../Layout/Header';
import Sidebar from '../Layout/Sidebar';

const CreateExpense = () => {
  const user = { name: 'John Doe', profilePic: '/employee-pic.jpg' };
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState(new Date().toISOString().slice(0, 10)); // Default to today's date
  const [category, setCategory] = useState('');
  const [receipt, setReceipt] = useState(null);
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const categories = ['Travel', 'Food', 'Supplies', 'Accommodation', 'Other'];

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleAmountChange = (event) => {
    // Basic validation to allow only numbers and decimals
    const value = event.target.value.replace(/[^0-9.]/g, '');
    setAmount(value);
  };

  const handleDateChange = (event) => {
    setDate(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handleReceiptChange = (event) => {
    const file = event.target.files[0];
    setReceipt(file);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // In a real application, you would send this data to your backend API
    console.log({
      description,
      amount,
      date,
      category,
      receipt,
    });
    setSnackbarOpen(true);
    // Reset the form after submission (for demonstration purposes)
    setDescription('');
    setAmount('');
    setDate(new Date().toISOString().slice(0, 10));
    setCategory('');
    setReceipt(null);
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  return (
    <Box display="flex">
      <Header user={user} />
      <Sidebar />
      <Box flexGrow={1} padding={3} marginTop="64px">
        <Typography variant="h4" gutterBottom>
          Create New Expense
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <TextField
                label="Description"
                fullWidth
                required
                value={description}
                onChange={handleDescriptionChange}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                label="Amount"
                fullWidth
                required
                type="number"
                value={amount}
                onChange={handleAmountChange}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                label="Date"
                fullWidth
                required
                type="date"
                value={date}
                onChange={handleDateChange}
                InputLabelProps={{ shrink: true }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <FormControl fullWidth required>
                <InputLabel id="category-label">Category</InputLabel>
                <Select
                  labelId="category-label"
                  id="category"
                  value={category}
                  label="Category"
                  onChange={handleCategoryChange}
                >
                  {categories.map((cat) => (
                    <MenuItem key={cat} value={cat}>
                      {cat}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <Button variant="contained" component="label">
                Upload Receipt
                <input type="file" accept="image/*, application/pdf" hidden onChange={handleReceiptChange} />
              </Button>
              {receipt && (
                <Typography variant="body2" sx={{ mt: 1 }}>
                  Selected File: {receipt.name}
                </Typography>
              )}
            </Grid>
            <Grid item xs={12}>
              <Button type="submit" variant="contained" color="primary">
                Submit Expense
              </Button>
            </Grid>
          </Grid>
        </form>
        <Snackbar open={snackbarOpen} autoHideDuration={3000} onClose={handleSnackbarClose} anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}>
          <Alert onClose={handleSnackbarClose} severity="success" sx={{ width: '100%' }}>
            Expense submitted successfully! (This is a frontend demo)
          </Alert>
        </Snackbar>
      </Box>
    </Box>
  );
};

export default CreateExpense;