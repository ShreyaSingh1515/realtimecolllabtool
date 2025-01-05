import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Dashboard.css';  // Import the custom CSS file for animations

const Dashboard = () => {
    const [documents, setDocuments] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchDocuments = async () => {
            try {
                const user = JSON.parse(localStorage.getItem('user'));
                const token = user ? user.token : null;

                if (!token) {
                    navigate('/');
                    return;
                }

                const { data } = await axios.get('http://localhost:5000/api/documents', {
                    headers: { Authorization: `Bearer ${token}` },
                });

                setDocuments(data);
            } catch (error) {
                console.error('Failed to fetch documents:', error);
                setError('Failed to fetch documents. Please try again.');
                navigate('/');
            } finally {
                setLoading(false);
            }
        };

        fetchDocuments();
    }, [navigate]);

    return (
        <div className="container mt-4">
            <h2 className="my-4 text-center text-success animate__animated animate__fadeIn">Dashboard</h2>

            {loading && <div className="text-center text-info animate__animated animate__fadeIn">Loading...</div>}
            {error && <div className="alert alert-danger text-center animate__animated animate__fadeIn">{error}</div>}

            <div className="row">
                {documents.map((doc) => (
                    <div
                        key={doc._id}
                        className="col-md-4 mb-4 animate__animated animate__fadeInUp animate__delay-1s"
                    >
                        <div className="card h-100 shadow-sm border-0 hover-card">
                            <div className="card-body d-flex flex-column bg-light">
                                <h5 className="card-title text-primary">{doc.title}</h5>
                                <p className="card-text text-muted">
                                    Created on: {new Date(doc.createdAt).toLocaleDateString('en-US', {
                                        year: 'numeric',
                                        month: 'long',
                                        day: 'numeric',
                                    })}
                                </p>
                                <Link
                                    to={`/document/${doc._id}`}
                                    className="btn btn-info text-white mt-auto"
                                    style={{ backgroundColor: '#00b5e2' }}
                                >
                                    Open Document
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="text-center mt-4">
                <button
                    className="btn btn-success px-4 py-2 shadow animate__animated animate__pulse animate__infinite"
                    onClick={() => navigate('/document/new')}
                    style={{ backgroundColor: '#28a745', borderColor: '#28a745' }}
                >
                    Create New Document
                </button>
            </div>
        </div>
    );
};

export default Dashboard;
