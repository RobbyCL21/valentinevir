import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import FindAPair from "./components/findapair"; // Import your component
import './css/App.css';

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
