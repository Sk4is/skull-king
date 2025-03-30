import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import Swal from 'sweetalert2';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!$%^&*()_+|~=`{}\[\]:";'<>?,.\/]).{8,}$/;

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

const navigate = useNavigate();

const validateForm = (e) => {
  e.preventDefault();

  if (!emailRegex.test(email)) {
    setErrorMessage('Por favor, ingresa un correo electrónico válido.');
    return;
  }

  if (!passwordRegex.test(password)) {
    setErrorMessage('La contraseña debe tener al menos 8 caracteres, una mayúscula, un número y un símbolo.');
    return;
  }

  setErrorMessage('');

  Swal.fire({
    icon: 'success',
    title: '¡Éxito!',
    text: 'Formulario validado correctamente.',
    confirmButtonText: 'Aceptar',
    confirmButtonColor: '#35b977',
    background: '#1a1a1a',
    color: '#fff',
    iconColor: '#35b977',
  }).then(() => {
    navigate('/gamemode');
  });
};

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-box">
          <h2>Iniciar Sesión</h2>
          <form onSubmit={validateForm}>
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
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Ingresa tu contraseña"
                  value={password}
                  onChange={handlePasswordChange}
                  required
                />
                <span className="password-toggle" onClick={togglePassword}>
                  {showPassword ? '☠️' : '💀'}
                </span>
              </div>
            </div>
            {errorMessage && <p className="error-message">{errorMessage}</p>}
            <button className="login-btn">Acceder</button>
            <a href="/register" className="register-link">
              ¿No tienes cuenta? Regístrate
            </a>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
