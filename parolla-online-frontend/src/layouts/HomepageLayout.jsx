import { React, useEffect, useState } from 'react';
import { useTheme } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import { Box, Button, Stack, IconButton, Select, MenuItem} from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';
import languageENG from '../local/languageENG';
import languageTR from '../local/languageTR';
import { useDispatch, useSelector } from "react-redux";
import { setLanguage } from "../redux/languageSlice";

const HomepageLayout = () => {

    const theme = useTheme();
    const navigate = useNavigate();

    const dispatch = useDispatch();
    const languageChoice = useSelector((state) => state.language.language);
    const [language, setLanguageData] = useState(languageENG);

    useEffect(() => {
        setLanguageData(languageChoice === "TR" ? languageTR : languageENG);
    }, [languageChoice]);

    return (
        <>
            <Box position="absolute" top={16} left={16}>
                <IconButton>
                    <SettingsIcon />
                </IconButton>
            </Box>
            <Box position="absolute" top={16} right={16}>
                <Select
                    value={languageChoice}
                    onChange={(e) => dispatch(setLanguage(e.target.value))}
                    displayEmpty
                    variant="outlined"
                    sx={{ height: 35, maxWidth: 100, backgroundColor: "white" }}
                >
                    <MenuItem value="ENG">ENG</MenuItem>
                    <MenuItem value="TR">TR</MenuItem>
                </Select>
            </Box>
            <Box
                component="img"
                src="images/logo_ai2_transparent.png"
                alt="Logo"
                sx={{ width: "auto", height: "320px", marginBottom: "100px", display: "block", marginLeft: "auto", marginRight: "auto" }}
            >
            </Box>
            <Stack spacing={1} direction="column" alignItems="center" justifyContent="center">
                <Button
                    variant="contained"
                    sx={{ width: 600, backgroundColor: theme.palette.colors.blue }}
                    onClick={() => { navigate('/create-lobby') }}
                >
                    {language.homepage.createLobbyButton}
                </Button>
                <Button
                    variant="contained"
                    sx={{ width: 600, backgroundColor: theme.palette.colors.purple }}
                >
                    {language.homepage.joinLobbyButton}
                </Button>
                <Button
                    variant="contained"
                    sx={{ width: 600, backgroundColor: theme.palette.colors.green }}
                    onClick={() => { navigate('/quick-play') }}
                >
                    {language.homepage.quickplay}
                </Button>
            </Stack>
        </>
    );
};

export default HomepageLayout;
