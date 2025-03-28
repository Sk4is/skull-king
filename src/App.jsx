import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Start from './pages/StartPage';
import Login from './pages/LoginPage';
import './index.css';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
