import React from 'react';
import {
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
} from "@mui/material";
import { FilterList } from "@mui/icons-material";

const ExpenseFilters = ({ 
  selectedStatus, 
  setSelectedStatus, 
  selectedType, 
  setSelectedType, 
  applyFilters 
}) => {
  return (
    <Box 
      display="flex" 
      gap={2} 
      mb={4} 
      sx={{
        backgroundColor: 'white',
        padding: '20px',
        borderRadius: '8px',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
      }}
    >
      <FormControl sx={{ minWidth: 150 }}>
        <InputLabel>Type</InputLabel>
        <Select value={selectedType} onChange={(e) => setSelectedType(e.target.value)}>
          <MenuItem value="">All</MenuItem>
          <MenuItem value="Food">Food</MenuItem>
          <MenuItem value="Travel">Travel</MenuItem>
          <MenuItem value="Components">Components</MenuItem>
          <MenuItem value="Internet">Internet</MenuItem>
          <MenuItem value="Maintenance">Maintenance</MenuItem>
          <MenuItem value="Miscellaneous">Miscellaneous</MenuItem>
        </Select>
      </FormControl>

      <FormControl sx={{ minWidth: 150 }}>
        <InputLabel>Status</InputLabel>
        <Select value={selectedStatus} onChange={(e) => setSelectedStatus(e.target.value)}>
          <MenuItem value="">All</MenuItem>
          <MenuItem value="Pending">Pending</MenuItem>
          <MenuItem value="Approved">Approved</MenuItem>
          <MenuItem value="Rejected">Rejected</MenuItem>
        </Select>
      </FormControl>

      <Button 
        variant="outlined" 
        startIcon={<FilterList />} 
        onClick={applyFilters}
        sx={{ '&:hover': { backgroundColor: '#f5f5f5' } }}
      >
        Apply
      </Button>
    </Box>
  );
};

export default ExpenseFilters;
