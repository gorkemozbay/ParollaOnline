import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./Homepage";
import CreateLobbyPage from "./CreateLobbyPage";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import MainGameLayout from "./layouts/MainGameLayout";
import store from "./redux/store";
import { Provider } from "react-redux";

const theme = createTheme({
  palette: {
    background: {
      default: "#FFF4E6",
    },
    colors: {
      green: "#4caf50",
      blue: "#1976d2",
      purple: "#9c27b0",
    },
  },
});

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Router>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/create-lobby" element={<CreateLobbyPage />} />
            <Route path="/quick-play" element={<MainGameLayout />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
