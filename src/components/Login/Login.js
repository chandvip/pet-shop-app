import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import Data from '../Data/Data.js';
const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    let [msg, setMsg] = useState('');
    let navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();

        const matchedUser = Data.find((user) => user.email === email && user.password === password);
        if (matchedUser) {
            console.log('Login successful!');
            navigate('/dashboard')
        } else {
            console.log('Invalid email or password. Login failed.');
            setMsg('Invalid email or password. Login failed.')
        }
    };

    return (
        <div className="login-container">
            <form className="login-form" onSubmit={handleLogin}>
                <h2>Login</h2>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type="submit">Login</button>
                <br />
                <h3>
                    {msg}
                </h3>
            </form>
        </div >
    );
};

export default Login;
