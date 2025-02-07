import React from 'react';
import { useTheme } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import { Box, Button, Stack, IconButton } from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';

const Homepage = () => {

    const theme = useTheme();
    const navigate = useNavigate();

    return (
        <>
            <Box position="absolute" top={16} left={16}>
                <IconButton>
                    <SettingsIcon/>
                </IconButton>
            </Box>
            <Box
                component="img"
                src="/logo_ai2_transparent.png"
                alt="Logo"
                sx={{ width: "auto", height: "320px", marginBottom: "100px", display: "block", marginLeft: "auto", marginRight: "auto" }}
            >
            </Box>
            <Stack spacing={1} direction="column" alignItems="center" justifyContent="center">
                <Button 
                    variant="contained" 
                    sx={{ width: 600, backgroundColor: theme.palette.colors.blue }}
                    onClick={() => {navigate('/create-lobby')}}
                >
                    Create Lobby!
                </Button>
                <Button 
                    variant="contained" 
                    sx={{ width: 600, backgroundColor: theme.palette.colors.purple }}
                >
                    Join Lobby!
                </Button>
                <Button 
                    variant="contained" 
                    sx={{ width: 600, backgroundColor: theme.palette.colors.green }}
                >
                    Quickplay
                </Button>
            </Stack>
        </>
    );
};

export default Homepage
