import './Homepage.css'
import { useEffect } from 'react';
import React from 'react';
import { Box, Button, Container, Stack } from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';


const Homepage = () => {

  useEffect(() => {
    // Set the background color of the body element
    document.body.style.backgroundColor = '#FFF4E6';

    // Cleanup function to reset the background color when the component unmounts
    return () => {
      document.body.style.backgroundColor = '';
    };
  }, []);

  return (<>
    
    <Button
      variant="contained"
      color='#FFF4E6' 
      className="settings-button"
      sx={(theme) => ({
        border: `2px solid ${theme.palette.success.main}`,
        position: 'absolute'
      })}
    >
      <SettingsIcon sx={{ fontSize: 30 }} />
    </Button>

    <Container className="container" maxWidth="sm">
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
           className="logo"
        />

        {/* Buttons */}
        <Stack spacing={2} alignItems="center" className="stack">
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

export default Homepage
