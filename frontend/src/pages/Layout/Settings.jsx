
import { useState } from 'react';
import { Box, Typography, Grid, TextField, FormControl, InputLabel, Select, MenuItem, Button, Avatar, Snackbar } from '@mui/material';
import { Alert } from '@mui/material';
import Header from '../Layout/Header';
import Sidebar from '../Layout/Sidebar';

const Settings = () => {
  const user = { name: 'John Doe', profilePic: '/employee-pic.jpg' }; // Or fetch from context
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState('john.doe@example.com'); // Placeholder
  const [profilePicture, setProfilePicture] = useState(user.profilePic);
  const [newProfilePicture, setNewProfilePicture] = useState(null);
  const [theme, setTheme] = useState('light');
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleProfilePictureChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setNewProfilePicture(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleThemeChange = (event) => {
    setTheme(event.target.value);
    // In a real app, you might update a global theme context here
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // In a real application, you would send this data to your backend API
    const updatedData = {
      name,
      email,
      profilePicture: newProfilePicture || profilePicture,
      theme,
    };
    console.log('Settings Data to be saved:', updatedData);
    setProfilePicture(newProfilePicture || profilePicture); // Update the displayed picture
    setNewProfilePicture(null);
    setSnackbarOpen(true);
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  return (
    <Box display="flex">
      <Header user={user} />
      <Sidebar />
      <Box flexGrow={1} padding={3} marginTop="64px">
        <Typography variant="h4" gutterBottom>
          Settings
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={3} alignItems="center">
            <Grid item xs={12}>
              <Box display="flex" flexDirection="column" alignItems="center">
                <Avatar src={newProfilePicture || profilePicture} sx={{ width: 80, height: 80, mb: 2 }} />
                <Button variant="outlined" component="label">
                  Change Profile Picture
                  <input type="file" accept="image/*" hidden onChange={handleProfilePictureChange} />
                </Button>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                label="Name"
                fullWidth
                value={name}
                onChange={handleNameChange}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                label="Email"
                fullWidth
                type="email"
                value={email}
                onChange={handleEmailChange}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <FormControl fullWidth>
                <InputLabel id="theme-label">Theme</InputLabel>
                <Select
                  labelId="theme-label"
                  id="theme"
                  value={theme}
                  label="Theme"
                  onChange={handleThemeChange}
                >
                  <MenuItem value="light">Light</MenuItem>
                  <MenuItem value="dark">Dark</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <Button type="submit" variant="contained" color="primary">
                Save Changes
              </Button>
            </Grid>
          </Grid>
        </form>
        <Snackbar open={snackbarOpen} autoHideDuration={3000} onClose={handleSnackbarClose} anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}>
          <Alert onClose={handleSnackbarClose} severity="success" sx={{ width: '100%' }}>
            Settings saved successfully! (Profile picture updated in this demo)
          </Alert>
        </Snackbar>
      </Box>
    </Box>
  );
};

export default Settings;