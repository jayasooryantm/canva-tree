import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import auth from '../../components/authenticator/auth';
import "./landing.css"


function Landing() {
    let navigate = useNavigate();
    const [message, setMessage] = useState("");

    const getWelcomeMessage = async () => {
        const requestOptions = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        };
        const response = await fetch('http://localhost:8000/greeting', requestOptions);
        const data = await response.json();
        setMessage(data.message);
    }
    useEffect(() => {
        getWelcomeMessage();
    }, []);
    return (
        <div className='outer-div'>
            <div className='header-card'>
                <h2>THE ONLY LINK YOU’LL EVER NEED</h2>
                <p>Anim pariatur cliche reprehenderit,enim eiusmod high life accusamus
                    terry richardson ad squid.</p>
                <button className='btn btn-success' onClick={() => {
                    auth.login(() => {
                        navigate("/userdashboard");
                    });
                }}
                >Get Started For Free</button>
                <p>{message === undefined ? "Loading..." : message}</p>
            </div>
            <br></br>
            <div className='container'>
                <div className='row'>
                    <div className='col'>
                        <img src="./images/landing-1.jpg" alt='Start Inspired' />
                    </div>

                    <div className='col'>
                        <div className='cardInfo'>
                            <h3>Start Inspired</h3>
                            <p>With thousands of professional templates, images and quality content to choose from, get a headstart on bringing your best ideas and work to life.</p>
                            <button className='btn btn-success' onClick={() => {
                                auth.login(() => {
                                    navigate("/userdashboard");
                                });
                            }}>Create a Design</button>
                        </div>
                    </div>
                </div>
            </div>
            <br></br>
            <div className='container'>
                <div className='row'>
                    <div className='col'>
                        <div className='cardInfo'>
                            <h3>Collaborate with ease</h3>
                            <p>Invite people to edit with you or set your whole team up in Canva Pro to manage brand assets, leave feedback, get approvals, and scale your visual content.</p>
                            <button className='btn btn-success' onClick={() => {
                                auth.login(() => {
                                    navigate("/userdashboard");
                                });
                            }}>Start Now</button>
                        </div>
                    </div>
                    <div className='col'>
                        <img src="./images/landing-2.jpg" alt='Collaborate with ease' />
                    </div>
                </div>
            </div>
            <br></br>
            <div className='container'>
                <div className='row'>
                    <div className='col'>
                        <img src="./images/landing-3.jpg" alt='Share with pride' />
                    </div>

                    <div className='col'>
                        <div className='cardInfo'>
                            <h3>Share with pride</h3>
                            <p>With thousands of professional templates, images and quality content to choose from, get a headstart on bringing your best ideas and work to life.</p>
                            <button className='btn btn-success' onClick={() => {
                                auth.login(() => {
                                    navigate("/userdashboard");
                                });
                            }}>Design Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Landing