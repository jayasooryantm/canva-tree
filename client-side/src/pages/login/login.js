import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import auth from '../../components/authenticator/auth';

import "./login.css"

function Login() {
    let navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [, setToken] = useState(localStorage.getItem("getInToken"));
    const [, setUser] = useState(localStorage.getItem("userAccount"));

    const handleSubmit = event => {
        event.preventDefault();

        let _formData = new FormData()
        _formData.append("email", email)
        _formData.append("password", password)

        const requestOptions = {
            method: 'POST',
            body: _formData
        };

        const response = fetch('/login', requestOptions)
            .then(response => response.json())
            .then(data => {
                localStorage.setItem("getInToken", data.token);
                localStorage.setItem("userAccount", data.user);
            }).then(
                auth.login(() => {
                    navigate("/userdashboard", { replace: true });
                }));

        if (!response.ok) {
            setToken(null);
            setUser(null);
        }
        setEmail('');
        setPassword('');


    };
    return (
        <div className='container'>
            <br></br>
            <div className='outerForm'>
                <form onSubmit={handleSubmit} id="login">
                    <h1 className="h3 mb-3 fw-normal">Log In to Your Account</h1>

                    <div className="form-floating">
                        <input type="email" onChange={event => setEmail(event.target.value)} value={email} className="form-control" id="floatingInput" placeholder="name@example.com" />
                        <label htmlFor="floatingInput">Email address</label>
                    </div><br></br>
                    <div className="form-floating">
                        <input type="password" onChange={event => setPassword(event.target.value)} value={password} className="form-control" id="floatingPassword" placeholder="Password" />
                        <label htmlFor="floatingPassword">Password</label>
                    </div>

                    <div className="checkbox mb-3">
                        <label>
                            <input type="checkbox" value="remember-me" /> Remember me
                        </label>
                    </div>
                    <button className="w-100 btn btn-lg btn-success" type="submit"> Sign In </button>
                    <p className="mt-5 mb-3 text-muted"><Link href="/forgotp">Forgot Password?</Link></p>
                    <p className="mb-3 text-muted">Don't have an account? <Link to={"/signup"}>Create an account</Link></p>
                </form>
            </div>
        </div>
    )
}

export default Login