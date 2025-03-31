import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import MainScreen from "./MainScreen";
import Load from "./load";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Load />} />
        <Route path="/main" element={<MainScreen />} />
      </Routes>
    </Router>
  );
}

export default App;