import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './Homepage';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />

      </Routes>
    </Router>
  );
};

export default App
