import React, { useState, useEffect } from "react";
import Header from "../Layout/Header";
import Sidebar from "../Layout/Sidebar";
import { Box, Paper, Divider } from "@mui/material";
import ProfileHeader from "../../components/EmployeeDashboard/ProfileHeader";
import EditProfile from "../../components/EmployeeDashboard/EditProfile";
import ChangePassword from "../../components/EmployeeDashboard/ChangePassword";
import ProfilePictureUpdate from "../../components/EmployeeDashboard/ProfilePictureUpdate";
import RecentActivity from "../../components/EmployeeDashboard/RecentActivity";

const Profile = () => {
  // Define the user object
  const [user, setUser] = useState({
    name: "John Doe",
    email: "johndoe@example.com",
    phone: "+91 9876543210",
    role: "Employee",
    profilePic: "/default-avatar.png",
  });

  const [passwords, setPasswords] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const [recentActivities, setRecentActivities] = useState([]);

  useEffect(() => {
    // Load Recent Activity (Dummy Data)
    setRecentActivities([
      { action: "Submitted an Expense", date: "2024-03-20" },
      { action: "Updated Profile", date: "2024-03-18" },
      { action: "Logged in", date: "2024-03-15" },
    ]);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handlePasswordChange = (e) => {
    const { name, value } = e.target;
    setPasswords({ ...passwords, [name]: value });
  };

  const handleProfileUpdate = () => {
    localStorage.setItem("userProfile", JSON.stringify(user));
    alert("Profile updated successfully!");
  };

  const handleChangePassword = () => {
    if (passwords.newPassword !== passwords.confirmPassword) {
      alert("New passwords do not match!");
      return;
    }
    alert("Password changed successfully!");
  };

  const handleProfilePicChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setUser({ ...user, profilePic: imageUrl });
    }
  };

  return (
    <Box display="flex">
      <Header user={user} />
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
        <Paper sx={{ p: 4, boxShadow: '0 4px 20px rgba(0,0,0,0.1)', borderRadius: 2, maxWidth: '800px', mx: 'auto' }}>
          <ProfileHeader user={user} />
          <Divider sx={{ my: 4 }} />
          <EditProfile user={user} handleInputChange={handleInputChange} handleProfileUpdate={handleProfileUpdate} />
          <Divider sx={{ my: 4 }} />
          <ChangePassword passwords={passwords} handlePasswordChange={handlePasswordChange} handleChangePassword={handleChangePassword} />
          <Divider sx={{ my: 4 }} />
          <ProfilePictureUpdate handleProfilePicChange={handleProfilePicChange} />
          <Divider sx={{ my: 4 }} />
          <RecentActivity activities={recentActivities} />
        </Paper>
      </Box>
    </Box>
  );
};

export default Profile;