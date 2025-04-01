import React from "react";
import Header from "../../pages/Layout/Header";
import Sidebar from "../../pages/Layout/Sidebar";
import { Box, Container, Grid, Paper } from "@mui/material";
import ExpenseRequestsCard from "../../components/ManagerDashboard/ExpenseRequestsCard";
import TeamMembersCard from "../../components/ManagerDashboard/TeamMembersCard";
import AnalyticsCard from "../../components/ManagerDashboard/AnalyticsCard";

const ManagerDashboard = () => {
  const user = { name: "Jane Doe", profilePic: "/manager-pic.jpg" };

  return (
    <Box display="flex">
      <Header user={user} />
      <Sidebar />
      <Box flexGrow={1} padding={3} marginTop="64px" sx={{ backgroundColor: '#f0f4f8', minHeight: '100vh' }}>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Paper sx={{ p: 3, boxShadow: '0 4px 20px rgba(0,0,0,0.1)', borderRadius: 2 }}>
                <ExpenseRequestsCard />
              </Paper>
            </Grid>
            <Grid item xs={12} md={6}>
              <Paper sx={{ p: 3, boxShadow: '0 4px 20px rgba(0,0,0,0.1)', borderRadius: 2 }}>
                <TeamMembersCard />
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <Paper sx={{ p: 3, boxShadow: '0 4px 20px rgba(0,0,0,0.1)', borderRadius: 2 }}>
                <AnalyticsCard />
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default ManagerDashboard;