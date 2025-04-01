import React, { useEffect, useState } from "react";
import Header from "../Layout/Header";
import Sidebar from "../Layout/Sidebar";
import { Box, Typography } from "@mui/material";
import ExpenseFilters from "../../components/EmployeeDashboard/ExpenseFilters";
import ExpenseTable from "../../components/EmployeeDashboard/ExpenseTable";

const ApprovalStatus = () => {
  const [expenses, setExpenses] = useState([]);
  const [filteredExpenses, setFilteredExpenses] = useState([]);
  const [selectedStatus, setSelectedStatus] = useState("");
  const [sortType, setSortType] = useState("");

  // ... existing useEffect code ...

  return (
    <Box display="flex">
      <Header user={{ name: "John Doe" }} />
      <Sidebar />
      <Box 
        flexGrow={1} 
        p={4} 
        mt="64px" 
        sx={{
          backgroundColor: '#f8fafc',
          minHeight: '100vh'
        }}
      >
        <Typography 
          variant="h5" 
          sx={{
            mb: 4,
            fontWeight: 600,
            color: '#1e293b',
            borderBottom: '2px solid #e2e8f0',
            paddingBottom: '8px'
          }}
        >
          Expense Approval Status
        </Typography>

        <ExpenseFilters
          selectedStatus={selectedStatus}
          setSelectedStatus={setSelectedStatus}
          sortType={sortType}
          setSortType={setSortType}
        />

        <ExpenseTable expenses={filteredExpenses} />
      </Box>
    </Box>
  );
};

export default ApprovalStatus;