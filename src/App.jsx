import './App.css';
import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation, BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import Insights from "./pages/Insights";
import Cashflow from "./pages/Cashflow";
import Advisory from "./pages/Advisory";
import Assets from './pages/Assets';
import Transactions from './pages/Transactions';
import Login from './pages/Login';


const AppContent = () => {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-gray-100">

      {location.pathname !== "/" && <Navbar />}
      <Routes>
      
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/insights" element={<Insights />} />
        <Route path="/cashflow" element={<Cashflow />} />
        <Route path="/advisory" element={<Advisory />} />
        <Route path="/assets" element={<Assets />} />
        <Route path="/transactions" element={<Transactions />} />
      </Routes>
    </div>
  );
};

const App = () => {
  return (
    <BrowserRouter basename='Networth-Tracker'>
      <AppContent />
    </BrowserRouter>
  );
};

export default App;
