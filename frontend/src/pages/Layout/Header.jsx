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

  return (
    <AppBar position="fixed" sx={{ backgroundColor: "#967ebf" }}>
      <Toolbar>
        {/* Logo & Website Name */}
        <Typography variant="h6" sx={{ flexGrow: 1, display: "flex", alignItems: "center" }}>
          <img src={logo} alt="Logo" style={{ height: "40px", marginRight: "10px" }} />
          ExpensoPro
        </Typography>

        {/* Notification Icon */}
        <IconButton color="inherit">
          <Badge badgeContent={4} color="error"> {/* Change "4" to dynamic count */}
            <NotificationsIcon />
          </Badge>
        </IconButton>

        {/* Profile Avatar */}
        <IconButton onClick={handleMenuOpen} color="inherit">
          <Avatar src={user?.profilePic || "/default-avatar.png"} />
        </IconButton>

        {/* Profile Menu (Only Profile Option) */}
        <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
          <MenuItem onClick={() => navigate("/profile")}>Profile</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
