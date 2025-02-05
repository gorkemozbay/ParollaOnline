import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './Homepage';
import CreateLobbyPage from './CreateLobbyPage';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    background: {
      default: '#FFF4E6',
    },
    colors: {
      green: '#4caf50',
      blue: '#1976d2',
      purple: '#9c27b0'
    }
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/create-lobby" element={<CreateLobbyPage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App
