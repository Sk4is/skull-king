import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Start from './pages/StartPage';
import Login from './pages/LoginPage';
import Register from './pages/RegisterPage';
import GameMode from './pages/GameMode';
import CreateGame from './pages/CreateGamePage';
import Rules from './pages/Rules';
import './index.css';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/gamemode" element={<GameMode />} />
        <Route path="/creategame" element={<CreateGame />} />
        <Route path="/rules" element={<Rules />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
