import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomepageLayout from "./layouts/HomepageLayout/HomepageLayout";
import CreateLobbyLayout from "./layouts/CreateLobbyLayout/CreateLobbyLayout";
import MainGameLayout from "./layouts/MainGameLayout/MainGameLayout";
import store from "./redux/store";
import { Provider } from "react-redux";



const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<HomepageLayout />} />
          <Route path="/create-lobby" element={<CreateLobbyLayout />} />
          <Route path="/quick-play" element={<MainGameLayout />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
