import React from "react";
import Header from "../../pages/Layout/Header";
import Sidebar from "../../pages/Layout/Sidebar";
import { Box } from "@mui/material";

const ManagerDashboard = () => {
  const user = { name: "Jane Doe", profilePic: "/manager-pic.jpg" };

  return (
    <Box display="flex"> {/* Outer container in row direction */}
      <Header user={user} /> {/* Fixed Header at the top */}
      <Sidebar /> {/* Sidebar positioned below Header in its own component */}
      <Box flexGrow={1} padding={3} marginTop="64px"> {/* Main content with marginTop */}
        <h1>Welcome to Manager Dashboard</h1>
        {/* Your other dashboard content */}
      </Box>
    </Box>
  );
};

export default ManagerDashboard;