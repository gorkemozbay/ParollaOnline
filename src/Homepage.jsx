import './Homepage.css'
import { useEffect } from 'react';
import React from 'react';
import { Box, Button, Container, Stack } from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';
import { Link } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';

const Homepage = () => {

    const theme = useTheme();
    useEffect(() => {
        // Set the background color of the body element
        document.body.style.backgroundColor = theme.palette.background.default;

        // Cleanup function to reset the background color when the component unmounts
        return () => {
            document.body.style.backgroundColor = '';
        };
    }, []);

    return (<>

        <Button
            variant="contained"
            className="settings-button"
            sx={(theme) => ({
                border: `2px solid ${theme.palette.colors.green}`,
                position: 'absolute',
                backgroundColor: theme => theme.palette.background.default,
                color: 'inherit',
                '&:hover': {
                    border: `2px solid ${theme.palette.colors.green}`, // Keep the same border on hover
                },
            })}
        >
            <SettingsIcon sx={{ fontSize: 30 }} />
        </Button>

        <Container className="container" maxWidth="sm" sx={{ border: theme => `2px solid ${theme.palette.colors.green}` }} >
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

                <Stack spacing={2} alignItems="center" className="stack">
                    <Link to="/create-lobby">
                        <Button variant="contained" sx={{ width: 310, backgroundColor: theme => theme.palette.colors.blue }}>
                            Create Lobby!
                        </Button>
                    </Link>
                    <Button variant="contained" sx={{ width: 310, backgroundColor: theme => theme.palette.colors.purple }}>
                        Join Lobby!
                    </Button>
                    <Button variant="contained" sx={{ width: 310, backgroundColor: theme => theme.palette.colors.green }}>
                        Quickplay
                    </Button>
                </Stack>
            </Box>
        </Container>
    </>
    );
};

export default Homepage
