import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RepositoryScreen from "./components/RepositoryScreen";
import LoginScreen from "./components/LoginScreen";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginScreen />} />
        <Route path="/repositories" element={<RepositoryScreen />} />
      </Routes>
    </Router>
  );
}

export default App;
