import React, { useState } from "react";
import { AppBar, Toolbar, Typography, IconButton, Menu, MenuItem, Avatar, Badge } from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/Logo/logo_company.png";

const Header = ({ user }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate();

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleProfileClick = () => {
    // user.role = "MANAGER"; //just for debugging
    if (user.role === "MANAGER") {
      navigate("/manager-profile");
    } else {
      navigate("/profile");
    }
    handleMenuClose();
  };

  return (
    <AppBar position="fixed" sx={{ backgroundColor: "#6a4f9c", boxShadow: '0 4px 20px rgba(0,0,0,0.1)' }}>
      <Toolbar>
        {/* Logo & Website Name */}
        <Typography variant="h6" sx={{ flexGrow: 1, display: "flex", alignItems: "center", color: '#fff' }}>
          <img src={logo} alt="Logo" style={{ height: "40px", marginRight: "10px" }} />
          ExpensoPro
        </Typography>

        {/* Notification Icon */}
        <IconButton color="inherit" sx={{ '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.1)' } }}>
          <Badge badgeContent={4} color="error"> {/* Change "4" to dynamic count */}
            <NotificationsIcon />
          </Badge>
        </IconButton>

        {/* Profile Avatar */}
        <IconButton onClick={handleMenuOpen} color="inherit" sx={{ '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.1)' } }}>
          <Avatar src={user?.profilePic || "/default-avatar.png"} />
        </IconButton>

        {/* Profile Menu */}
        <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
          <MenuItem onClick={handleProfileClick}>Profile</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default Header;