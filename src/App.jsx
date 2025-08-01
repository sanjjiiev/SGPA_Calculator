import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import StudentGradingSystem from "./components/Grade";

function App() {
  return (
    <Router basename="/SGPA_Calculator">
      <Routes>
        <Route path="/" element={<StudentGradingSystem />} />
      </Routes>
    </Router>
  );
}

export default App;
