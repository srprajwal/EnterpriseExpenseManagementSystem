import React from 'react';
import { Button } from "@mui/material";
import { Save } from "@mui/icons-material";

const SaveButton = ({ handleSaveSettings }) => {
  return (
    <Button
      variant="contained"
      color="primary"
      startIcon={<Save />}
      onClick={handleSaveSettings}
      sx={{
        mt: 4,
        backgroundColor: '#1976d2',
        '&:hover': { backgroundColor: '#1565c0' },
        fontWeight: 'bold'
      }}
    >
      Save Settings
    </Button>
  );
};

export default SaveButton;