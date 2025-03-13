import React, { useState } from 'react';
import {
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@mui/material'; // MUI form components

const RegisterForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('employee');

  const handleRegister = (e) => {
    e.preventDefault();
    //   Add your registration logic here
    //   - Call the authService to make an API request
    //   - Handle success/error scenarios (e.g., redirect, show messages)
    console.log('Registering with:', { name, email, password, role });
  };

  return (
    <form onSubmit={handleRegister}>
      <TextField
        label="Name"
        type="text"
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        fullWidth // MUI's fullWidth
        margin="normal" // MUI's margin
      />
      <TextField
        label="Email"
        type="email"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        fullWidth
        margin="normal"
      />
      <TextField
        label="Password"
        type="password"
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        fullWidth
        margin="normal"
      />
      <FormControl fullWidth margin="normal">
        <InputLabel id="role-label">Role</InputLabel>
        <Select
          labelId="role-label"
          id="role"
          value={role}
          onChange={(e) => setRole(e.target.value)}
          label="Role" // Label for the select
        >
          <MenuItem value="employee">Employee</MenuItem>
          <MenuItem value="manager">Manager</MenuItem>
          {/* Admin role should typically be assigned through a separate process */}
        </Select>
      </FormControl>
      <Button
        type="submit"
        variant="contained" // MUI button variant
        color="primary" // MUI button color
        fullWidth
        className="mt-4" // Tailwind for top margin
      >
        Register
      </Button>
    </form>
  );
};

export default RegisterForm;