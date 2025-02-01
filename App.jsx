import './App.css'
import { useEffect } from 'react';
import React from 'react';
import { Box, Button, Container, Stack } from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';


const App = () => {

useEffect(() => {
  // Set the background color of the body element
  document.body.style.backgroundColor = '#FFF4E6';

  // Cleanup function to reset the background color when the component unmounts
  return () => {
    document.body.style.backgroundColor = '';
  };
}, []);

return (<>
  {/* Settings Button in top-left corner */}
  <Button
    variant="contained"
    color='#FFF4E6'
    sx={(theme) => ({
      position: 'absolute', // Absolute positioning relative to the viewport
      top: 10,
      left: 10,
      zIndex: 1000, // Ensures it's above other content
      minWidth: 'auto', // Ensures the button size is based on the icon only
      padding: 1,
      border: `2px solid ${theme.palette.success.main}`,
      borderRadius: '10px',
    })}
  >
    <SettingsIcon sx={{ fontSize: 30 }} />
  </Button>

  <Container
    maxWidth="sm"
    sx={(theme) => ({
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      bgcolor: '#FFF4E6',
      border: `2px solid ${theme.palette.success.main}`, //mui's success color
      borderRadius: '30px',
      boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
      position: 'relative'
    })}
  >
    <Box
      sx={{
        py: 5,
        px: 50,
        width: '100%',
      }}
    >
      <Box
        component="img"
        src="/logo_ai2_transparent.png"
        alt="Logo"
        sx={{ width: 'auto', height: 320, mb: 2, display: 'block', mx: 'auto' }}
      />

      {/* Buttons */}
      <Stack spacing={2} alignItems="center" width="100%">
        <Button variant="contained" color="primary" sx={{ width: 310 }}>
          Create Lobby!
        </Button>
        <Button variant="contained" color="secondary" sx={{ width: 310 }}>
          Join Lobby!
        </Button>
        <Button variant="contained" color="success" sx={{ width: 310 }}>
          Quickplay
        </Button>
      </Stack>
    </Box>
  </Container>
</>
);
};

export default App
