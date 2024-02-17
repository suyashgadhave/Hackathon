import React from "react";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import PrivateRoute from "./components/PrivateRoute";
import Dashboard from "./pages/Dashboard";
import Login from './pages/Login';
import Signup from './pages/Signup';

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="w-screen h-screen flex flex-col bg-violet-200">
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
      <Routes>
        <Route path="/" element={<Home isLoggedIn={isLoggedIn}/>} />
        <Route path="/About" element={<About setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/Services" element={<Services setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/Dashboard" element={<PrivateRoute isLoggedIn={isLoggedIn}><Dashboard/></PrivateRoute>} />
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/signup" element={<Signup setIsLoggedIn={setIsLoggedIn}/>} />
      </Routes>
    </div>
  );
}

export default App;