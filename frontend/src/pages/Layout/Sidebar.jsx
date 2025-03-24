import React from "react";
import { Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Divider, Box } from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ReceiptIcon from "@mui/icons-material/Receipt";
import PeopleIcon from "@mui/icons-material/People";
import BarChartIcon from "@mui/icons-material/BarChart";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const Sidebar = () => {
  const navigate = useNavigate();
  const { auth, logout } = useAuth();
  const userRole = auth.role; // EMPLOYEE or MANAGER

  const menuItems = [
    { text: "Dashboard", icon: <DashboardIcon />, path: "/" },
    { text: "My Expenses", icon: <ReceiptIcon />, path: "/expenses", roles: ["EMPLOYEE"] },
    { text: "Expense Requests", icon: <ReceiptIcon />, path: "/expense-requests", roles: ["MANAGER"] },
    { text: "Team Members", icon: <PeopleIcon />, path: "/team", roles: ["MANAGER"] },
    { text: "Analytics", icon: <BarChartIcon />, path: "/analytics", roles: ["MANAGER"] },
    { text: "Settings", icon: <SettingsIcon />, path: "/settings", roles: ["EMPLOYEE", "MANAGER"] },
  ];

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: 250,
        flexShrink: 0,
        top: "64px", // Adjust based on your AppBar height
        height: "calc(100% - 64px)", // Adjust height to fill remaining space
        display: "flex",
        flexDirection: "column",
        [`& .MuiDrawer-paper`]: {
          width: 250,
          boxSizing: "border-box",
          top: "64px",
          height: "calc(100% - 64px)",
          display: "flex",
          flexDirection: "column",
        },
      }}
    >
      <List>
        {menuItems
          .filter((item) => !item.roles || item.roles.includes(userRole))
          .map((item) => (
            <ListItem key={item.text} disablePadding>
              <ListItemButton onClick={() => navigate(item.path)}>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItemButton>
            </ListItem>
          ))}
      </List>
      <Divider />

      {/* Logout Button at the Bottom */}
      <Box sx={{ flexGrow: 1 }} />
      <List>
        <ListItem disablePadding>
          <ListItemButton onClick={logout}>
            <ListItemIcon><LogoutIcon /></ListItemIcon>
            <ListItemText primary="Logout" />
          </ListItemButton>
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Sidebar;
