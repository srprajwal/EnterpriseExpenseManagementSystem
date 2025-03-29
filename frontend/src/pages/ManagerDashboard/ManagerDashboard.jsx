import React from "react";
import Header from "../../pages/Layout/Header";
import Sidebar from "../../pages/Layout/Sidebar";
import { Box, Container, Grid } from "@mui/material";
import ExpenseRequestsCard from "../../components/Dashboard/ExpenseRequestsCard";
import TeamMembersCard from "../../components/Dashboard/TeamMembersCard";
import AnalyticsCard from "../../components/Dashboard/AnalyticsCard";

const ManagerDashboard = () => {
  const user = { name: "Jane Doe", profilePic: "/manager-pic.jpg" };

  return (
    <Box display="flex">
      <Header user={user} />
      <Sidebar />
      <Box flexGrow={1} padding={3} marginTop="64px">
        <Container maxWidth="lg">
          <Grid container spacing={3}>
            <Grid item xs={12} md={4}>
              <ExpenseRequestsCard />
            </Grid>
            <Grid item xs={12} md={4}>
              <TeamMembersCard />
            </Grid>
            <Grid item xs={12} md={4}>
              <AnalyticsCard />
            </Grid>
            {/* You can add more cards or content here */}
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default ManagerDashboard;