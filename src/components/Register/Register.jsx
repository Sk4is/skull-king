import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import "./Register.css";
import Swal from "sweetalert2";
import axios from "axios";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [nombre, setNombre] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  const passwordRegex =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!$%^&*()_+|~=`{}\[\]:";'<>?,.\/]).{8,}$/;

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleNombreChange = (e) => {
    setNombre(e.target.value);
  };

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const navigate = useNavigate();

  const validateForm = async (e) => {
    e.preventDefault();

    if (!emailRegex.test(email)) {
      setErrorMessage("Por favor, ingresa un correo electrónico válido.");
      return;
    }

    if (!passwordRegex.test(password)) {
      setErrorMessage(
        "La contraseña debe tener al menos 8 caracteres, una mayúscula, un número y un símbolo."
      );
      return;
    }

    if (password !== confirmPassword) {
      setErrorMessage("Las contraseñas no coinciden.");
      return;
    }

    setErrorMessage("");

    const userData = { nombre, email, password };

    try {
      const response = await axios.post(
        "http://localhost:5000/api/register",
        userData
      );

      if (response.data.message === "Usuario creado con éxito") {
        Swal.fire({
          icon: "success",
          title: "¡Éxito!",
          text: "Usuario registrado correctamente.",
          confirmButtonText: "Aceptar",
          confirmButtonColor: "#35b977",
          background: "#1a1a1a",
          color: "#fff",
          iconColor: "#35b977",
        }).then(() => {
          navigate("/gamemode");
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "No se pudo registrar el usuario. Intenta nuevamente.",
          confirmButtonText: "Aceptar",
          confirmButtonColor: "#e74c3c",
          background: "#1a1a1a",
          color: "#fff",
          iconColor: "#e74c3c",
        });
      }
    } catch (error) {
      console.error("Error al registrar el usuario:", error);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Ocurrió un error al registrar el usuario. Por favor, intenta nuevamente.",
        confirmButtonText: "Aceptar",
        confirmButtonColor: "#e74c3c",
        background: "#1a1a1a",
        color: "#fff",
        iconColor: "#e74c3c",
      });
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-box">
          <h2>Regístrate</h2>
          <form onSubmit={validateForm}>
            <div className="input-group">
              <label>Nombre de Usuario</label>
              <input
                type="text"
                placeholder="Ingresa tu nombre de usuario"
                value={nombre}
                onChange={handleNombreChange}
                required
              />
            </div>
            <div className="input-group">
              <label>Email</label>
              <input
                type="email"
                placeholder="Ingresa tu correo"
                value={email}
                onChange={handleEmailChange}
                required
              />
            </div>
            <div className="input-group password-group">
              <label>Contraseña</label>
              <div className="password-wrapper">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Ingresa tu contraseña"
                  value={password}
                  onChange={handlePasswordChange}
                  required
                />
                <span className="password-toggle" onClick={togglePassword}>
                  {showPassword ? "☠️" : "💀"}
                </span>
              </div>
            </div>
            <div className="input-group password-group">
              <label>Repetir Contraseña</label>
              <div className="password-wrapper">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Repite tu contraseña"
                  value={confirmPassword}
                  onChange={handleConfirmPasswordChange}
                  required
                />
                <span
                  className="repeat-password-toggle"
                  onClick={toggleConfirmPassword}
                >
                  {showConfirmPassword ? "☠️" : "💀"}
                </span>
              </div>
            </div>
            {errorMessage && <p className="error-message">{errorMessage}</p>}
            <button className="login-btn">Registrarme</button>
            <a href="/login" className="register-link">
              ¿Ya tienes cuenta? Inicia sesión
            </a>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
