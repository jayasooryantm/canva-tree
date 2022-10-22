import React from 'react'
import "./login.css"

function login() {
    return (
        <div className='container'>
            <br></br>
            <div className='outerForm'>
                <form>
                    <h1 class="h3 mb-3 fw-normal">Log In to Your Account</h1>

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
                            <input type="checkbox" value="remember-me" /> Remember me
                        </label>
                    </div>
                    <button class="w-100 btn btn-lg btn-success" type="submit">Sign in</button>
                    <p class="mt-5 mb-3 text-muted"><a href="/forgotp">Forgot Password?</a></p>
                    <p class="mb-3 text-muted">Don't have an account? <a href="/signup">Create an account</a></p>
                </form>
            </div>
        </div>
    )
}

export default login