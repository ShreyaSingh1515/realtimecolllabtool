// Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Login.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        setError('');

        // Simulating an API request
        try {
            // When backend is integrated, replace this with an API call to validate login.
            // Example: const response = await api.post('/login', { email, password });

            // Retrieve user data from localStorage temporarily (for now)
            const storedUser = localStorage.getItem('user');
            const user = storedUser ? JSON.parse(storedUser) : null;

            // Validate email and password
            if (user && user.email === email && user.password === password) {
                navigate('/dashboard');
            } else {
                setError('Invalid email or password.');
            }
        } catch (err) {
            setError('Something went wrong. Please try again.');
        }
    };

    return (
        <div className="container d-flex justify-content-center align-items-center min-vh-100">
            <div className="card p-4 shadow-lg" style={{ maxWidth: '400px', width: '100%' }}>
                <h2 className="text-center text-primary mb-4"><b>Login to CollabTool</b></h2>
                <form onSubmit={handleLogin}>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label"><b>Email Address</b></label>
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label"><b>Password</b></label>
                        <input
                            type="password"
                            className="form-control"
                            id="password"
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    {error && (
                        <div className="alert alert-danger text-center mt-3">
                            {error}
                        </div>
                    )}
                    <button type="submit" className="btn btn-primary w-100 py-2">
                        Login
                    </button>
                </form>
                <div className="text-center mt-3">
                    <p className="mb-0">Don't have an account? <a href="/register" className="text-decoration-none text-primary">Register</a></p>
                    <p><a href="/forgot-password" className="text-decoration-none">Forgot Password?</a></p>
                </div>
            </div>
        </div>
    );
};

export default Login;