import React, { useState } from 'react'
import "./signup.css"

function Signup() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const handleSubmit = event => {
        event.preventDefault();

        let _formData = new FormData()
        _formData.append("email", email)
        _formData.append("password", password)

        const requestOptions = {
            method: 'POST',
            body: _formData
        };

        fetch('/signup', requestOptions)
            .then(response => response.json())
            .then(data => console.log(data));

        setEmail('');
        setPassword('');
    };

    return (
        <div className='container'>
            <br></br>
            <div className='outerForm'>
                <form onSubmit={handleSubmit} id="signup">
                    <p className="h5 mb-3">Create an account for free</p>
                    <p className="h6 mb-3 fw-normal">Free forever. No payment needed.</p>


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
                            <input type="checkbox" value="terms-use" /> By creating an account you are agreeing to our <a className='text-muted' href="/terms">Terms and Conditions.</a> View our <a className='text-muted' href="/privacy">Privacy Notice</a> to see how we manage your personal information.
                        </label>
                    </div>
                    <button className="w-100 btn btn-lg btn-success" type="submit">Sign Up with Email</button>
                </form>
            </div>
        </div>
    )
}

export default Signup