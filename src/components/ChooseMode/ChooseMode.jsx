import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ChooseMode.css';

const ChooseMode = () => {
  const navigate = useNavigate();

  const navigateCreateGame = () => {
    navigate('/creategame');
  };

  const navigateJoinGame = () => {
    navigate('/joingame');
  };

  const navigateRules = () => {
    navigate('/rules');
  };

  const navigateHistory = () => {
    navigate('/history');
  };

  return (
    <div className="gamemode-page">
      <div className="gamemode-container">
        <div className="gamemode-box">
          <h2>¿Qué quieres hacer grumete?</h2>
          <div className="input-group">
            <button className="create-btn" onClick={navigateCreateGame}>
              Crear una partida
            </button>
            <div className="divider">
              <h3>O</h3>
            </div>
            <button className="join-btn" onClick={navigateJoinGame}>
              Unirse a una partida
            </button>
          </div>

          {/* Nueva sección de botones adicionales */}
          <div className="extra-buttons">
            <button className="rules-btn" onClick={navigateRules}>
              Normas
            </button>
            <button className="history-btn" onClick={navigateHistory}>
              Historial
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChooseMode;
