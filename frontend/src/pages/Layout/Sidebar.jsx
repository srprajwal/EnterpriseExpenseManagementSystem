import React from "react";
import { Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Divider, Box } from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ReceiptIcon from "@mui/icons-material/Receipt";
import PeopleIcon from "@mui/icons-material/People";
import BarChartIcon from "@mui/icons-material/BarChart";
import SettingsIcon from "@mui/icons-material/Settings";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RuleIcon from '@mui/icons-material/Rule';
import LogoutIcon from "@mui/icons-material/Logout";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const Sidebar = () => {
  const navigate = useNavigate();
  const { auth, logout } = useAuth();
  const userRole = auth.role; // EMPLOYEE or MANAGER

  const employeeMenuItems = [
    { text: "Dashboard", icon: <DashboardIcon />, path: "/employee-dashboard" },
    { text: "My Expenses", icon: <ReceiptIcon />, path: "/myexpense" },
    { text: "Create Expense", icon: <AddCircleOutlineIcon />, path: "/create-expense" },
    { text: "Approval Status", icon: <RuleIcon />, path: "/approvals" },
    { text: "Settings", icon: <SettingsIcon />, path: "/settings" },
  ];

  const managerMenuItems = [
    { text: "Dashboard", icon: <DashboardIcon />, path: "/manager-dashboard" },
    { text: "Expense Requests", icon: <ReceiptIcon />, path: "/expense-requests" },
    { text: "Team Members", icon: <PeopleIcon />, path: "/team" },
    { text: "Analytics", icon: <BarChartIcon />, path: "/analytics" },
    { text: "Settings", icon: <SettingsIcon />, path: "/manager-settings" },
  ];

  const menuItems = userRole === "MANAGER" ? managerMenuItems : employeeMenuItems;

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: 250,
        flexShrink: 0,
        top: "64px",
        height: "calc(100% - 64px)",
        display: "flex",
        flexDirection: "column",
        [`& .MuiDrawer-paper`]: {
          width: 250,
          boxSizing: "border-box",
          top: "64px",
          height: "calc(100% - 64px)",
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#6a4f9c", // Match header color
          color: "#fff", // White text for contrast
        },
      }}
    >
      <List>
        {menuItems.map((item) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton
              onClick={() => navigate(item.path)}
              sx={{
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                },
              }}
            >
              <ListItemIcon sx={{ color: '#fff' }}>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider sx={{ backgroundColor: 'rgba(255, 255, 255, 0.2)' }} />

      {/* Logout Button at the Bottom */}
      <Box sx={{ flexGrow: 1 }} />
      <List>
        <ListItem disablePadding>
          <ListItemButton
            onClick={logout}
            sx={{
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
              },
            }}
          >
            <ListItemIcon sx={{ color: '#fff' }}><LogoutIcon /></ListItemIcon>
            <ListItemText primary="Logout" />
          </ListItemButton>
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Sidebar;