import React from 'react'
import "./signup.css"

function login() {
    return (
        <div className='container'>
            <br></br>
            <div className='outerForm'>
                <form>
                    <p class="h5 mb-3">Create an account for free</p>
                    <p class="h6 mb-3 fw-normal">Free forever. No payment needed.</p>

                    <div class="form-floating">
                        <input type="text" class="form-control" id="floatingInput" placeholder="Username" />
                        <label for="floatingInput">Username</label>
                    </div><br></br>
                    <div class="form-floating">
                        <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" />
                        <label for="floatingInput">Email address</label>
                    </div><br></br>
                    <div class="form-floating">
                        <input type="password" class="form-control" id="floatingPassword" placeholder="Password" />
                        <label for="floatingPassword">Password</label>
                    </div>

                    <div class="checkbox mb-3">
                        <label>
                            <input type="checkbox" value="terms-use" /> By creating an account you are agreeing to our <a className='text-muted' href="/terms">Terms and Conditions.</a> View our <a className='text-muted' href="/privacy">Privacy Notice</a> to see how we manage your personal information.
                        </label>
                    </div>
                    <button class="w-100 btn btn-lg btn-success" type="submit">Sign Up with Email</button>
                    <p class="mt-5 mb-3 text-muted"><a href="/forgotp">Forgot Password?</a></p>
                    <p class="mb-3 text-muted">Don't have an account? <a href="/signup">Create an account</a></p>
                </form>
            </div>
        </div>
    )
}

export default login