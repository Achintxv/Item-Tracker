import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function RegisterPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/register-client', { email, password });
      alert('Registered successfully! Now login.');
      navigate('/');
    } catch (err) {
      console.error(err);
      alert('Error registering user');
    }
  };

  return (
    <div>
      <h2>Client Register</h2>
      <form onSubmit={handleRegister}>
        <input type="email" placeholder="Email" value={email}
          onChange={(e) => setEmail(e.target.value)} required />
        <input type="password" placeholder="Password" value={password}
          onChange={(e) => setPassword(e.target.value)} required />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default RegisterPage;