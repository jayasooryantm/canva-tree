import React from 'react'
import { Link } from 'react-router-dom'

import "./login.css"

function login() {
    return (
        <div className='container'>
            <br></br>
            <div className='outerForm'>
                <form>
                    <h1 className="h3 mb-3 fw-normal">Log In to Your Account</h1>

                    <div className="form-floating">
                        <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                        <label htmlFor="floatingInput">Email address</label>
                    </div><br></br>
                    <div className="form-floating">
                        <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                        <label htmlFor="floatingPassword">Password</label>
                    </div>

                    <div className="checkbox mb-3">
                        <label>
                            <input type="checkbox" value="remember-me" /> Remember me
                        </label>
                    </div>
                    <button className="w-100 btn btn-lg btn-success" type="submit"> Sign In </button>
                    <p className="mt-5 mb-3 text-muted"><a href="/forgotp">Forgot Password?</a></p>
                    <p className="mb-3 text-muted">Don't have an account? <Link to={"/signup"}>Create an account</Link></p>
                </form>
            </div>
        </div>
    )
}

export default login