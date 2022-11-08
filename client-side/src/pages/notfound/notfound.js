import React from 'react'
import { Link } from 'react-router-dom'
import "./notfound.css"

function notfound() {
    return (
        <div className='container outer'>
            <h1 class="display-1 fw-bold">404</h1>
            <p class="fs-3"> <span class="text-danger">Opps!</span> Page not found.</p>
            <p class="lead">
                The page you’re looking for doesn’t exist.
            </p>
            <Link to="/"><button class="btn btn-lg btn-outline-success" type="button">Home</button></Link>
        </div >
    )
}

export default notfound