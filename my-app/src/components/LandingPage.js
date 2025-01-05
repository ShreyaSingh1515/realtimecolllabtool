import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';

const LandingPage = () => {
    return (<div >
        <div className="container text-center ml-2 ">
            <div className="jumbotron  p-5 rounded shadow-lg animate__animated animate__fadeIn">
                <h1 className="display-4 text-primary animate__animated animate__fadeIn animate__delay-1s">
                    Welcome to CollabTool
                </h1>
                <p className="lead text-muted animate__animated animate__fadeIn animate__delay-2s">
                    CollabTool is your go-to platform for seamless real-time collaboration. 
                    Work together on documents, share ideas, and communicate effortlessly with your team.
                </p>
               
                <hr className="my-4 animate__animated animate__fadeIn animate__delay-3s" />
                <p className="text-dark animate__animated animate__fadeIn animate__delay-4s">
                    Whether you're working on a team project or just need to organize your thoughts, 
                    CollabTool offers all the features you need to stay productive.
                </p>
                <div className="mt-4">
                    <Link 
                        to="/register" 
                        className="btn btn-success btn-lg me-3 animate__animated animate__pulse animate__infinite animate__delay-5s"
                    >
                        Register
                    </Link>
                    <Link 
                        to="/login" 
                        className="btn btn-primary btn-lg animate__animated animate__pulse animate__infinite animate__delay-6s"
                    >
                        Login
                    </Link>
                </div>
            </div>
        </div>

        <section className="container py-5">
            <h2 className="text-center mb-4">Key Features</h2>
            <div className="row text-center">
                <div className="col-md-4">
                    <div className="feature-box p-3 shadow rounded mb-3">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRX-6XahWFHTTnr63wgynt4weW_WsZMGGV_EA&sg" alt="Real-Time Collaboration" className="img-fluid mb-3" />
                        <h4>Real-Time Collaboration</h4>
                        <p>Collaborate in real time with your team and stay productive together.</p>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="feature-box p-3 shadow rounded mb-3">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRX-6XahWFHTTnr63wgynt4weW_WsZMGGV_EA&s" alt="Document Management" className="img-fluid mb-3" />
                        <h4>Document Management</h4>
                        <p>Manage your documents effortlessly and access them whenever needed.</p>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="feature-box p-3 shadow rounded mb-3">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRX-6XahWFHTTnr63wgynt4weW_WsZMGGV_EA&s" alt="Instant Messaging" className="img-fluid mb-3" />
                        <h4>Instant Messaging</h4>
                        <p>Communicate directly with your team through instant messaging.</p>
                    </div>
                </div>
            </div>
        </section>

        <section className="container py-5 ">
            <h2 className="text-center mb-4">What Our Users Say</h2>
            <div className="row">
                <div className="col-md-4">
                    <div className="testimonial-box p-3 shadow rounded text-center">
                        <p className="lead">"CollabTool has revolutionized how we work as a team. The  real-time features have made us so much more efficient."</p>
                        <p><strong>Jane Doe</strong></p>
                        <p>Project Manager</p>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="testimonial-box p-3 shadow rounded text-center">
                        <p className="lead">"I love how easy it is to manage documents and collaborate. The intuitive design makes it simple to stay organized!"</p>
                        <p><strong>John Smith</strong></p>
                        <p>Software Developer</p>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="testimonial-box p-3 shadow rounded text-center">
                        <p className="lead">"CollabTool has saved us so much time. We can quickly share ideas and get feedback in real time!"</p>
                        <p><strong>Alice Johnson</strong></p>
                        <p>Designer</p>
                    </div>
                </div>
            </div>
        </section>

        <section className="container py-5">
            <h2 className="text-center mb-4">Collaboration Ideas</h2>
            <div className="row">
                <div className="col-md-4">
                    <div className="idea-box p-3 shadow rounded text-center">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWSMsuMgJlYznyJGMgbQV-UdOiPTYoUoWxCQ&s" alt="Brainstorming Sessions" className="img-fluid mb-3" />
                        <h4>Brainstorming Sessions</h4>
                        <p>CollabTool's real-time document sharing to brainstorm ideas. Multiple team members can contribute to a document, making it easy to share thoughts and collaborate.</p>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="idea-box p-3 shadow rounded text-center">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWSMsuMgJlYznyJGMgbQV-UdOiPTYoUoWxCQ&s" alt="Project Tracking" className="img-fluid mb-3" />
                        <h4>Project Tracking</h4>
                        <p>Keep track of your project progress using the integrated project management features. Assign tasks, track deadlines, and communicate with your team all in one place.</p>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="idea-box p-3 shadow rounded text-center">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWSMsuMgJlYznyJGMgbQV-UdOiPTYoUoWxCQ&s" alt="Instant Feedback" className="img-fluid mb-3" />
                        <h4>Instant Feedback</h4>
                        <p>Use CollabTool's real-time messaging to give instant feedback on team members' work. Quick feedback loops help teams stay aligned and make progress faster.</p>
                    </div>
                </div>
            </div>
        </section>
        </div>
    );
};

export default LandingPage;
