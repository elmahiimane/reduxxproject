// Login.js
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../slices/actions';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

import '../styles/Login.css'; // Assuming your CSS file is in the same directory

const Login = () => {
  const [name, setName] = useState('');
  const [cef, setCef] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async () => {
    // Read the user data from db.json (this is a simplified example)
    try {
      const response = await fetch('src/db.json'); // Replace with the actual path
      const data = await response.json();

      // Check if the entered name and CEF match any user in the database
      const userExists = data.users.some((user) => user.name === name && user.cef === cef);

      if (userExists) {
        dispatch(login({ name, cef }));
        navigate('/clubs'); // Replace with the desired path after successful login
      } else {
        alert('Your name is not in the database.');
      }
    } catch (error) {
      console.error('Error reading db.json:', error);
      alert('Error reading the database. Please try again later.');
    }
  };

  return (
    <div className="container">
     
      <div className="form-container">
        <h2>Login</h2>
        <label htmlFor="name">Nom</label>
        <input
          type="text"
          id="name"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <label htmlFor="cef">CEF</label>
        <input
          type="password"
          id="cef"
          placeholder="Enter your CEF"
          value={cef}
          onChange={(e) => setCef(e.target.value)}
        />
        <br />
        <button onClick={handleLogin}>Login</button>
        <br />
        <p>responsable ou staff click ici </p>
        <Link to="/admin"> clubs</Link>
       
      </div>
      <img className="img" src="public/images/projetdev202.png" alt="Description of your image" />
    </div>
  );
};

export default Login;
