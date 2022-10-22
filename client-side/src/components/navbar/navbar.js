import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap/dist/js/bootstrap.min.js";
import "@popperjs/core/dist/umd/popper.min.js"
import "./navbar.css"

function navbar() {
    return (
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">CanvaTree</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="/">Pricing</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">Help</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">Login</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">Sign Up</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default navbar