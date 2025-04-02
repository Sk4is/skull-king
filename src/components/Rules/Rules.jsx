import React from "react";
import { useNavigate } from "react-router-dom";
import "./Rules.css";

const Rules = () => {
  return (
    <div className="rules-page">
      <div className="rules-container">
        <h1>Game Rules</h1>
        <p>Welcome to the game! Here are the rules you need to know:</p>
        <ol>
          <li>Each player takes turns to play.</li>
          <li>The objective is to score the most points.</li>
          <li>Players can use special abilities during their turn.</li>
          <li>
            The game ends when all players have played a set number of rounds.
          </li>
          <li>The player with the highest score wins!</li>
        </ol>
        <button className="back-btn" onClick={() => window.history.back()}>Back</button>
      </div>
    </div>
  );
};

export default Rules;
