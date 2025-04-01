import React from "react";
import Header from "../Layout/Header";
import Sidebar from "../Layout/Sidebar";
import { Box } from "@mui/material";
import SummaryCards from "../../components/EmployeeDashboard/SummaryCards";
import ExpenseCharts from "../../components/EmployeeDashboard/ExpenseCharts";
import ActivityFeed from "../../components/EmployeeDashboard/ActivityFeed";

const EmployeeDashboard = () => {
  // Define the user object
  const user = {
    name: "John Doe",
    profilePic: "/employee-pic.jpg"
  };

  // Define the summaryData object
  const summaryData = {
    totalExpenses: 12500,
    pendingApprovals: 3,
    approvedExpenses: 8,
  };

  // Define the expenseBreakdown array
  const expenseBreakdown = [
    { category: "Travel", value: 4500 },
    { category: "Food", value: 2500 },
    { category: "Office Supplies", value: 1500 },
    { category: "Internet", value: 2000 },
    { category: "Miscellaneous", value: 1000 },
  ];

  // Define the monthlyExpenses array
  const monthlyExpenses = [
    { month: "Jan", expenses: 3000 },
    { month: "Feb", expenses: 2800 },
    { month: "Mar", expenses: 3200 },
    { month: "Apr", expenses: 3500 },
    { month: "May", expenses: 4000 },
  ];

  // Define the recentActivity array
  const recentActivity = [
    "Travel Expense - ₹4500 submitted for approval",
    "Food Expense - ₹2500 approved by Manager",
    "Office Supplies - ₹1500 pending approval",
    "Internet Bill - ₹2000 approved",
    "Miscellaneous Expense - ₹1000 rejected",
  ];

  return (
    <Box display="flex">
      <Header user={user} />
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
        <SummaryCards summaryData={summaryData} />
        
        <Box sx={{ mt: 4 }}>
          <ExpenseCharts 
            expenseBreakdown={expenseBreakdown}
            monthlyExpenses={monthlyExpenses}
          />
        </Box>

        <Box sx={{ mt: 4 }}>
          <ActivityFeed activities={recentActivity} />
        </Box>
      </Box>
    </Box>
  );
};

export default EmployeeDashboard;