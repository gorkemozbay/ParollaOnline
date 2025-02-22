import { useTheme } from '@mui/material/styles';
import React from 'react';
import { Box, Stack, Avatar, Button, Typography } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";

const CreateLobbyPage = () => {
    
    const language = useSelector((state) => state.language.languageData);

    const theme = useTheme();

    const roomNumber = 12345; 
    const currentPlayers = 7; 
    const maxPlayers = 10; 

    const usernames = Array.from({ length: currentPlayers }, (_, index) => `Player${index + 1}`);

    const playerAvatars = usernames.map((username, index) => (
        <Box key={index} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Avatar sx={{ width: 70, height: 70 }}>
                <PersonIcon />
            </Avatar>
            <Typography variant="body2" sx={{ marginTop: 1 }}>
                {username}
            </Typography>
        </Box>
    ));
    
    return (
        <Box sx={{ padding: 3, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Box
                sx={{
                    backgroundColor: theme => theme.palette.background.default,
                    border: theme => `2px solid ${theme.palette.colors.blue}`,
                    boxShadow: `0px 4px 6px ${theme.palette.colors.blue}`,
                    color: theme => theme.palette.colors.purple,
                    padding: 1,
                    marginBottom: 3,
                    borderRadius: 10,
                    textAlign: 'center',
                    width: 350,
                    height: 'auto'
                }}
            >
                <Typography variant="h6" sx={{ color: theme => theme.palette.colors.blue }}>
                   {language.createLobbyPage.roomNumber}
                </Typography>

                <Typography variant="h4" mb={1} sx={{ color: theme => theme.palette.colors.blue }}>
                    {roomNumber}
                </Typography>

                {/* Buttons below the room number */}
                <Stack direction="row" spacing={4} justifyContent="center">
                    <Button variant="contained" sx={{ width: 100, backgroundColor: theme => theme.palette.colors.purple }}>
                        {language.createLobbyPage.copy}
                    </Button>
                    <Button variant="contained" sx={{ width: 100, backgroundColor: theme => theme.palette.colors.purple }}>
                        {language.createLobbyPage.share}
                    </Button>
                </Stack>
            </Box>

            {/* Player avatars box */}
            <Box
                sx={{
                    backgroundColor: theme => theme.palette.background.default,
                    border: theme => `2px solid ${theme.palette.colors.green}`,
                    boxShadow: `0px 4px 6px ${theme.palette.colors.green}`,
                    padding: 2,
                    borderRadius: 5,
                    textAlign: 'center',
                    marginBottom: 3,
                    position: 'relative',
                    width: 400,
                    height: 'auto', // Allow height to adjust automatically based on content
                    display: 'flex',
                    flexDirection: 'column', // Stack children vertically
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <Typography variant="h6">Players</Typography>
                {/* Player count indicator */}
                <Typography
                    sx={{
                        position: 'absolute', // Position within the parent container
                        top: 10,
                        right: 10,
                        color: theme => theme.palette.colors.green,  
                        fontWeight: 'bold',
                    }}
                >
                    {currentPlayers}/{maxPlayers}
                </Typography>
                <Box
                    sx={{
                        display: 'flex',
                        flexWrap: 'wrap', // Allow avatars to wrap to the next line
                        justifyContent: 'center',
                        gap: 2, // Add space between the avatars
                    }}
                >
                    {playerAvatars}
                </Box>
            </Box>

            {/* Buttons */}
            <Stack direction="row" spacing={2} justifyContent="center">
                <Link to="/">
                    <Button variant="contained" sx={{ width: 150, borderRadius: 3, backgroundColor: theme => theme.palette.colors.green }}>
                        {language.createLobbyPage.goBack}
                    </Button>
                </Link>
                <Button variant="contained" sx={{ width: 150, borderRadius: 3, backgroundColor: theme => theme.palette.colors.green }}>
                    {language.createLobbyPage.settings}
                </Button>
                <Button variant="contained" sx={{ width: 150, borderRadius: 3, backgroundColor: theme => theme.palette.colors.green }}>
                    {language.createLobbyPage.startGame}
                </Button>
            </Stack>
        </Box>
    );
};

export default CreateLobbyPage