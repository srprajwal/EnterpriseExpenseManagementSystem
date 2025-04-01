import React, { useState } from "react";
import Header from "../Layout/Header";
import Sidebar from "../Layout/Sidebar";
import { Box, Typography } from "@mui/material";
import ExpenseForm from "../../components/EmployeeDashboard/ExpenseForm";
import ExpenseList from "../../components/EmployeeDashboard/ExpenseList";

const expenseTypes = ["Food", "Travel", "Components", "Internet", "Maintenance", "Miscellaneous"];

const CreateExpense = () => {
  const [newExpense, setNewExpense] = useState({ type: "", amount: "", file: null, date: "" });
  const [expenses, setExpenses] = useState([]);
  const [sortType, setSortType] = useState(""); // Define sortType state

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewExpense({ ...newExpense, [name]: value });
  };

  const handleFileChange = (e) => {
    setNewExpense({ ...newExpense, file: e.target.files[0] });
  };

  const handleAddExpense = () => {
    setExpenses([...expenses, newExpense]);
    setNewExpense({ type: "", amount: "", file: null, date: "" }); // Reset form
  };

  const handleDeleteExpense = (index) => {
    const updatedExpenses = expenses.filter((_, i) => i !== index);
    setExpenses(updatedExpenses);
  };

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
          Create Expense
        </Typography>

        <ExpenseForm
          newExpense={newExpense}
          handleInputChange={handleInputChange}
          handleFileChange={handleFileChange}
          handleAddExpense={handleAddExpense}
          expenseTypes={expenseTypes}
        />

        {expenses.length > 0 && (
          <ExpenseList
            expenses={expenses}
            handleDeleteExpense={handleDeleteExpense}
          />
        )}
      </Box>
    </Box>
  );
};

export default CreateExpense;