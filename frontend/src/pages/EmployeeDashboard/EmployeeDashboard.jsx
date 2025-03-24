import React from "react";
import Header from "../../pages/Layout/Header";
import Sidebar from "../../pages/Layout/Sidebar"; // Import the Sidebar component
import { Box } from "@mui/material"; // Optional, for layout

const EmployeeDashboard = () => {
  const user = { name: "John Doe", profilePic: "/employee-pic.jpg" };

  return (
    <Box display="flex"> {/* Use a Box for layout */}
      <Header user={user} />
      <Sidebar />
      <Box flexGrow={1} padding={3} marginTop="64px"> {/* Main content with marginTop */}
        <h1>Welcome to Employee Dashboard</h1>
      </Box>
    </Box>
  );
};

export default EmployeeDashboard;