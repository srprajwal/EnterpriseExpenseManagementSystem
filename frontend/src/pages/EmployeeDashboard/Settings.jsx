import React, { useState } from "react";
import Header from "../Layout/Header";
import Sidebar from "../Layout/Sidebar";
import { Box, Typography, Button, Paper } from "@mui/material";
import { Save } from "@mui/icons-material";
import ProfileSettings from "../../components/EmployeeDashboard/ProfileSettings";
import ChangePassword from "../../components/EmployeeDashboard/ChangePassword";

const Settings = () => {
  const [user, setUser] = useState({
    name: "John Doe",
    email: "johndoe@example.com",
  });

  const [passwords, setPasswords] = useState({
    currentPassword: "",
    confirmPassword: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handlePasswordChange = (e) => {
    const { name, value } = e.target;
    setPasswords({ ...passwords, [name]: value });
  };

  const handleSaveSettings = () => {
    localStorage.setItem("userSettings", JSON.stringify(user));
    alert("Settings saved successfully!");
  };

  const handleChangePassword = () => {
    alert("Password changed successfully!");
  };

  return (
    <Box display="flex">
      <Header user={{ name: user.name }} />
      <Sidebar />
      <Box flexGrow={1} p={4} mt="64px" sx={{ backgroundColor: '#f8fafc', minHeight: '100vh' }}>
        <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#333', mb: 4 }}>
          Settings
        </Typography>

        <Paper sx={{ p: 4, boxShadow: '0 4px 20px rgba(0,0,0,0.1)', borderRadius: 2 }}>
          <ProfileSettings user={user} handleInputChange={handleInputChange} />
          <ChangePassword passwords={passwords} handlePasswordChange={handlePasswordChange} handleChangePassword={handleChangePassword} />

          <Button
            variant="contained"
            color="primary"
            startIcon={<Save />}
            onClick={handleSaveSettings}
            sx={{ mt: 4, fontWeight: 'bold' }}
          >
            Save Settings
          </Button>
        </Paper>
      </Box>
    </Box>
  );
};

export default Settings;