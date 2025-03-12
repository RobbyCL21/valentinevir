import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./home";
import FindAPair from "./findapair"; // Import your component
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/findapair" element={<FindAPair />} />
      </Routes>
    </Router>
  );
}

export default App;
