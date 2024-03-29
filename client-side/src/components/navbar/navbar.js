import React from 'react'
import "./navbar.css"

function navbar(props) {
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
                            <a className="nav-link" href="/pricing">Pricing</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/help">Help</a>
                        </li>
                        {!props.isAuth && (<li className="nav-item">
                            <a className="nav-link" href="/login">Login</a>
                        </li>)}
                        {!props.isAuth && (<li className="nav-item">
                            <a className="nav-link" href="/signup">Sign Up</a>
                        </li>)}
                        {props.isAuth && (<li className="nav-item">
                            <a className="nav-link" href="/help">Account</a>
                        </li>)}
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default navbar