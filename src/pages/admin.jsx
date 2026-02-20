// Login.js
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../slices/actions';
import { useNavigate } from 'react-router-dom';

import "../styles/admin.css"
const Login = () => {
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = () => {
    // For testing purposes, set a specific password (e.g., "testpassword")
    if (password === 'testpassword') {
      dispatch(login(password));
      navigate('/club-tables'); // Replace '/dashboard' with the desired path
    } else {
      alert('Incorrect password');
    }
  };

  return (
    <div className='home'>
    <div className='admin1'>
      <div className='admin2'>
        <h2>Login</h2>
        <form id='forrm'>
          <label htmlFor="password"></label>
          <input
            id="admin"
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          /> <br />
          <button type="button" onClick={handleLogin} className="btn">
            Login
          </button>
        </form>

      </div>
    </div>

    </div>
    
  );
};

export default Login;
