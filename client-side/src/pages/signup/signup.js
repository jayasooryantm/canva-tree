import React from 'react'
import "./signup.css"

function login() {
    return (
        <div className='container'>
            <br></br>
            <div className='outerForm'>
                <form>
                    <p className="h5 mb-3">Create an account for free</p>
                    <p className="h6 mb-3 fw-normal">Free forever. No payment needed.</p>


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
                            <input type="checkbox" value="terms-use" /> By creating an account you are agreeing to our <a className='text-muted' href="/terms">Terms and Conditions.</a> View our <a className='text-muted' href="/privacy">Privacy Notice</a> to see how we manage your personal information.
                        </label>
                    </div>
                    <button className="w-100 btn btn-lg btn-success" type="submit">Sign Up with Email</button>
                    <p className="mt-5 mb-3 text-muted"><a href="/forgotp">Forgot Password?</a></p>
                    <p className="mb-3 text-muted">Don't have an account? <a href="/signup">Create an account</a></p>
                </form>
            </div>
        </div>
    )
}

export default login