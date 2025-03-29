import React from "react";
import "./Start.css";
import { useNavigate } from "react-router-dom";

const Start = () => {
  const navigate = useNavigate();

  const handleRegisterRedirect = () => {
    navigate("/register");
  };

  const handleLoginRedirect = () => {
    navigate("/login");
  };

  return (
    <div className="container">
      <div className="left-content">
        <div className="logoStart">
          <img
            src="https://res.cloudinary.com/dimlqpphf/image/upload/v1743205146/Screenshot_25-removebg-preview_1_1_1_vivszq.png"
            alt="GameVault Logo"
          />
        </div>
        <div className="cards">
          <img
            src="https://res.cloudinary.com/dimlqpphf/image/upload/v1743205077/Screenshot_25-removebg-preview_1_ji0cfs.png"
            alt="GameVault Cards"
          />
        </div>
      </div>

      <div className="right-content">
        <div className="title">
          <h1>¡Engaña,</h1>
          <h1>Apuesta</h1>
          <h1>Y conquista los mares!</h1>
        </div>
        <p>Únete ya.</p>
        <button className="register" onClick={handleRegisterRedirect}>
          Regístrate
        </button>
        <div className="divider">
          <img src="https://res.cloudinary.com/dimlqpphf/image/upload/v1743203248/image_2_xkus4z.png" alt="" />
        </div>
        <button className="login" onClick={handleLoginRedirect}>
          Inicia Sesión
        </button>
      </div>
    </div>
  );
};

export default Start;
