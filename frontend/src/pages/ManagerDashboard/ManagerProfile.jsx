import React, { useState } from "react";
import Header from "../Layout/Header";
import Sidebar from "../Layout/Sidebar";
import { Box, Typography, Paper, Divider } from "@mui/material";
import TeamManagement from "../../components/ManagerDashboard/TeamManagement";
import ProfileDetails from "../../components/ManagerDashboard/ProfileDetails";

const ManagerProfile = () => {
  const [manager, setManager] = useState({
    name: "Jane Doe",
    email: "janedoe@example.com",
    role: "Manager",
    profilePic: "/manager-pic.jpg",
  });

  return (
    <Box display="flex">
      <Header user={manager} />
      <Sidebar />
      <Box flexGrow={1} p={4} mt="64px" sx={{ backgroundColor: '#f8fafc', minHeight: '100vh' }}>
        <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#333', mb: 4 }}>
          Manager Profile
        </Typography>

        <Paper sx={{ p: 4, boxShadow: '0 4px 20px rgba(0,0,0,0.1)', borderRadius: 2 }}>
          <ProfileDetails manager={manager} setManager={setManager} />
          <Divider sx={{ my: 4 }} />
          <TeamManagement />
          {/* Removed PerformanceMetrics component */}
        </Paper>
      </Box>
    </Box>
  );
};

export default ManagerProfile;