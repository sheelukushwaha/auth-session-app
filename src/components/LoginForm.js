import React, { useState, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../contexts/AuthContext';
import '../App.css';

const LoginForm = () => {
  const { setToken, setUser } = useContext(AuthContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('https://dummyjson.com/auth/login', { username, password });
      setToken(res.data.accessToken);
      setUser(res.data);
    } catch (err) {
      setError('Invalid credentials');
    }
  };

  return (
    <div className="login-container">
        <div className="login-card">
        <h2>Login</h2>
        <form onSubmit={handleLogin} className="login-form">
            <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={e => setUsername(e.target.value)}
            required
            />
            <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
            />
            <button type="submit">Login</button>
        </form>
        {error && <p className="error">{error}</p>}
        </div>
    </div>
  );
};

export default LoginForm;