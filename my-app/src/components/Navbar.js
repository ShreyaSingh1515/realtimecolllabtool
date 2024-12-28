import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();
    const userString = localStorage.getItem('user');
    const user = userString ? JSON.parse(userString) : null;

    const handleLogout = () => {
        localStorage.removeItem('user');
        navigate('/');
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
            <div className="container-fluid">
                <Link className="navbar-brand fs-3" to="/">
                    <img src="https://cdn-icons-png.flaticon.com/512/4419/4419067.png" alt="CollabTool Logo" className="d-inline-block align-text-top-mt-2" width="65" height="35" />CollabTool
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav me-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/dashboard"><b>Dashboard</b></Link>
                        </li>
                    </ul>

                    {user ? (
                        <ul className="navbar-nav">
                            <li className="nav-item dropdown">
                                <button className="btn btn-link nav-link dropdown-toggle" id="navbarDropdown"  data-bs-toggle="dropdown" aria-expanded="false">
                                    {user.username}
                                </button>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li>
                                        <button className="dropdown-item" onClick={handleLogout}><strong>Logout</strong></button>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    ) : (
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link btn btn-outline-danger" to="/login"><b>Login</b></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link btn btn-outline-primary  " to="/register"><b>Register</b></Link>
                            </li>
                        </ul>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;