import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/LandingPage.css';

const LandingPage = () => {
    return (
        <div className=" container mt-1 md-1  ">
             
            <div className="row justify-content-center  ">
                <div className="col-lg-8 text-center">
                    <div className=" holo bg-light p-5 rounded shadow-lg mt-5">
                       
                        <h1 className="display-4 text-primary mb-4">Welcome to CollabTool</h1>
                        <p className="lead text-secondary mb-4">
                        CollabTool is designed to help teams work seamlessly in real-time, share ideas, and track progress—all in one intuitive platform. 
                        </p>
                        <div className="d-flex justify-content-center mt-4">
                            <Link to="/register" className="btn btn-primary btn-lg me-3 px-5 py-3 shadow-sm">
                                <i className="bi bi-person-plus"></i> Get Started
                            </Link>
                            <Link to="/login" className="btn btn-outline-success  btn-lg px-5 py-3 shadow-sm">
                                <i className="bi bi-box-arrow-in-right"></i> Login
                            </Link>
                        </div>
                        <hr className="my-4" />
                        <p className="text-secondary mb-4">
                        It's designed to bring people together, no matter the task, and help you achieve more, faster.

                        </p>
                        <p className="text-secondary mb-4">
                            From real-time document editing to secure file storage and constant updates, our platform provides 
                            all the tools you need to streamline your projects and focus on what matters.
                        </p>
                        <p className="text-secondary mb-4">
                            Join the thousands of users already taking advantage of CollabTool’s collaborative features. Let’s bring 
                            your ideas to life—together!
                        </p>
                    </div>
                </div>
            </div>
            <footer className="text-center mt-5 text-muted">
                <p>
                    Need help? Visit our <Link to="/help" className="text-decoration-none text-primary">Help Center</Link>.
                </p>
                <p>&copy; 2024 CollabTool. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default LandingPage;