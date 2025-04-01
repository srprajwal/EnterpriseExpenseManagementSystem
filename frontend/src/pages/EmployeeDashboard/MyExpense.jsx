import React, { useEffect, useState } from "react";
import Header from "../Layout/Header";
import Sidebar from "../Layout/Sidebar";
import { Box, Typography } from "@mui/material";
import ExpenseSummary from "../../components/EmployeeDashboard/ExpenseSummary";
import ExpenseFilters from "../../components/EmployeeDashboard/ExpenseFilters";
import ExpenseTable from "../../components/EmployeeDashboard/ExpenseTable";

const MyExpenses = () => {
  const [expenses, setExpenses] = useState([]);
  const [filteredExpenses, setFilteredExpenses] = useState([]);
  const [selectedType, setSelectedType] = useState(""); // Filter by Expense Type
  const [selectedStatus, setSelectedStatus] = useState(""); // Filter by Status
  const [page, setPage] = useState(0); // Pagination
  const [rowsPerPage, setRowsPerPage] = useState(5); // Pagination

  useEffect(() => {
    const savedExpenses = JSON.parse(localStorage.getItem("expenses"));
  
    if (!savedExpenses || savedExpenses.length === 0) {
      // Set dummy data if localStorage is empty
      const dummyExpenses = [
        { type: "Food", amount: 500, file: "food_bill.jpg", date: "2024-03-20", status: "Approved" },
        { type: "Travel", amount: 2500, file: "flight_ticket.pdf", date: "2024-03-22", status: "Pending" },
        { type: "Components", amount: 1200, file: "hardware_receipt.png", date: "2024-03-25", status: "Rejected" },
        { type: "Internet", amount: 999, file: "invoice.pdf", date: "2024-04-01", status: "Approved" },
        { type: "Maintenance", amount: 1500, file: "repair_bill.jpg", date: "2024-04-03", status: "Pending" },
        { type: "Miscellaneous", amount: 800, file: "", date: "2024-04-05", status: "Approved" },
      ];
  
      localStorage.setItem("expenses", JSON.stringify(dummyExpenses));
      setExpenses(dummyExpenses);
      setFilteredExpenses(dummyExpenses);
    } else {
      setExpenses(savedExpenses);
      setFilteredExpenses(savedExpenses);
    }
  }, []);
  
  // Calculate total expense
  const totalExpense = filteredExpenses.reduce((sum, expense) => sum + parseFloat(expense.amount || 0), 0);

  // Apply Filters
  useEffect(() => {
    let updatedExpenses = [...expenses];

    if (selectedType) {
      updatedExpenses = updatedExpenses.filter((expense) => expense.type === selectedType);
    }

    if (selectedStatus) {
      updatedExpenses = updatedExpenses.filter((expense) => expense.status === selectedStatus);
    }

    setFilteredExpenses(updatedExpenses);
  }, [selectedType, selectedStatus, expenses]);

  // Handle Pagination
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  // Export to CSV
  const handleExportCSV = () => {
    const csvRows = [];
    const headers = ["Date", "Expense Type", "Amount (₹)", "Status"];
    csvRows.push(headers.join(","));
    filteredExpenses.forEach(expense => {
      csvRows.push([expense.date, expense.type, expense.amount, expense.status].join(","));
    });
    const csvData = csvRows.join("\n");
    const blob = new Blob([csvData], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "MyExpenses.csv";
    a.click();
  };

  return (
    <Box display="flex">
      <Header user={{ name: "John Doe" }} />
      <Sidebar />
      <Box 
        flexGrow={1} 
        sx={{
          padding: 4,
          marginTop: "64px",
          backgroundColor: '#f8fafc',
          minHeight: '100vh'
        }}
      >
        <Typography 
          variant="h5" 
          gutterBottom
          sx={{
            fontWeight: 600,
            color: '#1e293b',
            borderBottom: '2px solid #e2e8f0',
            paddingBottom: '8px',
            marginBottom: '24px'
          }}
        >
          My Expenses
        </Typography>

        <ExpenseSummary totalExpense={totalExpense} />

        <ExpenseFilters
          selectedType={selectedType}
          selectedStatus={selectedStatus}
          onTypeChange={(e) => setSelectedType(e.target.value)}
          onStatusChange={(e) => setSelectedStatus(e.target.value)}
          onExport={handleExportCSV}
        />

        <ExpenseTable
          expenses={filteredExpenses}
          page={page}
          rowsPerPage={rowsPerPage}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Box>
    </Box>
  );
};

export default MyExpenses;