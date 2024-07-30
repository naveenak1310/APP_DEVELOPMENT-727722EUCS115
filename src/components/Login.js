// src/components/Login.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../Login.css';

const Login = ({ setUser }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
           
            const response = await axios.get('http://localhost:3001/users');
            const users = response.data;

            // Check if there is a user with matching username and password
            const user = users.find(user => user.username === username && user.password === password);

            if (user) {
                setUser(user);
                navigate('/');
            } else {
                setError('Invalid username or password');
            }
        } catch (error) {
            setError('An error occurred during login');
        }
    };

    return (
        <div className="login-container" >

            <form onSubmit={handleSubmit} className="login-form">
                <h2>Login</h2>
                {error && <p className="error">{error}</p>}
                <div className="form-group">
                    <label htmlFor="username" className='ce'>Username:</label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password" className='ce'>Password:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className="login-button">Login</button>
                <h4 style={{ marginLeft: '110px', marginBottom: '20px' }}>Doesn't have an account?</h4>
                <h3><Link to="/register" className='a1'>Register Here</Link></h3>
                <h4 style={{ marginLeft: '110px', marginBottom: '20px' }}>Admin Login: <Link to="/AdminLogin" >Login Here</Link></h4>
                
            </form>
        </div>
    );
};

export default Login;
