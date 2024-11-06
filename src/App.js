// src/App.js
import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import ProjectDetail from './components/ProjectDetail';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './components/About';
function App() {
  return (
    <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects/:projectId" element={<ProjectDetail />} />
      <Route path="/about" element={<About />} />
    </Routes>
  </Router>
  );
}

export default App;
