// import React from "react";
// import Header from "../../pages/Layout/Header";
// import Sidebar from "../../pages/Layout/Sidebar"; // Import the Sidebar component
// import { Box } from "@mui/material"; // Optional, for layout

// const EmployeeDashboard = () => {
//   const user = { name: "John Doe", profilePic: "/employee-pic.jpg" };

//   return (
//     <Box display="flex"> {/* Use a Box for layout */}
//       <Header user={user} />
//       <Sidebar />
//       <Box flexGrow={1} padding={3} marginTop="64px"> {/* Main content with marginTop */}
//         <h1>Welcome to Employee Dashboard</h1>
//       </Box>
//     </Box>
//   );
// };

// export default EmployeeDashboard;


import React, { useState, useEffect } from "react";
import Header from "../../pages/Layout/Header";
import Sidebar from "../../pages/Layout/Sidebar";
import { Box, Container, Grid, Typography } from "@mui/material";
import TotalExpensesCard from "../../components/Dashboard/TotalExpensesCard";
import MonthlyBudgetCard from "../../components/Dashboard/MonthlyBudgetCard";
import ApprovedHousingCard from "../../components/Dashboard/ApprovedHousingCard";
import PendingApprovalsCard from "../../components/Dashboard/PendingApprovalsCard";
import ExpenseOverviewCard from "../../components/Dashboard/ExpenseOverviewCard";
import RecentTransactionsCard from "../../components/Dashboard/RecentTransactionsCard";
import { useAuth } from "../../context/AuthContext";
// import axios from "axios"; // Remove axios import

const EmployeeDashboard = () => {
  const user = { name: "John Doe", profilePic: "/employee-pic.jpg" };
  const [totalExpenses, setTotalExpenses] = useState(15000); // Mock data
  const [monthlyBudget, setMonthlyBudget] = useState(20000); // Mock data
  const [approvedHousing, setApprovedHousing] = useState(6500); // Mock data
  const [pendingApprovalsCount, setPendingApprovalsCount] = useState(4); // Mock data
  const [expenseOverviewData, setExpenseOverviewData] = useState([ // Mock data
    { month: 'Jan', expenses: 100 },
    { month: 'Feb', expenses: 200 },
    { month: 'Mar', expenses: 150 },
    { month: 'Apr', expenses: 250 },
    { month: 'May', expenses: 180 },
  ]);
  const [recentTransactions, setRecentTransactions] = useState([ // Mock data
    { id: 1, description: 'Lunch with client', amount: 5000, date: '2025-03-25' },
    { id: 2, description: 'Travel to conference', amount: 3000, date: '2025-03-24' },
    { id: 3, description: 'Office supplies', amount: 2500, date: '2025-03-23' },
  ]);
  const [loading, setLoading] = useState(false); // Set loading to false for mock data
  const [error, setError] = useState(null);
  const { auth } = useAuth();

  // useEffect(() => {
  //   const fetchEmployeeDashboardData = async () => {
  //     setLoading(true);
  //     setError(null);
  //     const token = auth.token;
  //     const headers = { Authorization: `Bearer ${token}` };

  //     try {
  //       // Fetch data for each card
  //       const expensesResponse = await axios.get('/api/expenses/employee/total', { headers });
  //       setTotalExpenses(expensesResponse.data.total);

  //       // Placeholder data - replace with actual API calls
  //       setMonthlyBudget(0);
  //       setApprovedHousing(0);
  //       setPendingApprovalsCount(0);

  //       const overviewResponse = await axios.get('/api/expenses/employee/overview', { headers });
  //       setExpenseOverviewData(overviewResponse.data);

  //       const transactionsResponse = await axios.get('/api/expenses/employee/recent', { headers });
  //       setRecentTransactions(transactionsResponse.data);

  //     } catch (err) {
  //       setError(err.message || 'Failed to fetch dashboard data');
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchEmployeeDashboardData();
  // }, [auth.token]);

  // Removed the useEffect hook that fetches data

  const formatIndianRupee = (amount) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
    }).format(amount);
  };

  if (loading) {
    return (
      <Box display="flex">
        <Header user={user} />
        <Sidebar />
        <Box flexGrow={1} padding={3} marginTop="64px">
          <Typography variant="h6">Loading dashboard data...</Typography>
        </Box>
      </Box>
    );
  }

  if (error) {
    return (
      <Box display="flex">
        <Header user={user} />
        <Sidebar />
        <Box flexGrow={1} padding={3} marginTop="64px">
          <Typography color="error">Error: {error}</Typography>
        </Box>
      </Box>
    );
  }

  return (
    <Box display="flex">
      <Header user={user} />
      <Sidebar />
      <Box flexGrow={1} padding={3} marginTop="64px">
        <Container maxWidth="lg">
          <Grid container spacing={3}>
            {/* Top Row - Summary Cards */}
            <Grid item xs={12} md={3}>
              <TotalExpensesCard totalExpenses={formatIndianRupee(totalExpenses)} />
            </Grid>
            <Grid item xs={12} md={3}>
              <MonthlyBudgetCard monthlyBudget={formatIndianRupee(monthlyBudget)} />
            </Grid>
            <Grid item xs={12} md={3}>
              <ApprovedHousingCard approvedHousing={formatIndianRupee(approvedHousing)} />
            </Grid>
            <Grid item xs={12} md={3}>
              <PendingApprovalsCard pendingApprovalsCount={pendingApprovalsCount} />
            </Grid>

            {/* Middle Row - Expense Overview Chart */}
            <Grid item xs={12}>
              <ExpenseOverviewCard expenseOverviewData={expenseOverviewData.map(item => ({
                ...item,
                expenses: formatIndianRupee(item.expenses),
              }))} />
            </Grid>

            {/* Bottom Row - Recent Transactions */}
            <Grid item xs={12}>
              <RecentTransactionsCard recentTransactions={recentTransactions.map(item => ({
                ...item,
                amount: formatIndianRupee(item.amount),
              }))} />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default EmployeeDashboard;