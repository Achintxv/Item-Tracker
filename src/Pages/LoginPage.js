import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

const handleLogin = async (e) => {
  e.preventDefault();

  try {
    const response = await axios.post('http://localhost:5000/login', {
      email,
      password
    });

    const { token, role } = response.data;

    localStorage.setItem('token', token);
    
    if (role === 'admin') {
      navigate('/add-item');
    } else if (role === 'client') {
      navigate('/items');
    }
  } catch (error) {
    console.error('Login failed:', error);
    alert('Invalid credentials');
  }
};

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input type="email" placeholder="Email" value={email}
          onChange={(e) => setEmail(e.target.value)} required />
        <input type="password" placeholder="Password" value={password}
          onChange={(e) => setPassword(e.target.value)} required />
        <button type="submit">Login</button>
      </form>
      <h3>New user?</h3>
      <Link to="/register">Register here</Link>
    </div>
  );
}

export default LoginPage;
