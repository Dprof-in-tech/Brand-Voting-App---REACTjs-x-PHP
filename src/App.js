import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from "./pages/auth/register";
import Login from "./pages/auth/login";
import Home from "./pages/home/home";
import Landing from "./pages/home/landing";
import './index.css';

function App() {
  return (
    <Router>
      <div className="m-0 p-0 flex flex-col items-center justify-center w-[full] h-[full]">
        <Routes>
          {/* Route for the landing page */}
          <Route path="/" element={<Landing />} />

          {/* Route for the Register page */}
          <Route path="/register" element={<Register />} />

          {/* Route for the Login page */}
          <Route path="/login" element={<Login />} />

          {/* Default route, e.g., the home page */}
          <Route path="/home/:username" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
