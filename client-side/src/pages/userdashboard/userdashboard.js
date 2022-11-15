import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import auth from '../../components/authenticator/auth';

function Userdashboard() {
    let navigate = useNavigate()
    return (
        <div style={{ display: "flex", position: "relative" }}>

            <div className="d-flex flex-column flex-shrink-0 p-3 bg-light" >
                <Link to="/userdashboard" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">

                    <span className="fs-4">Menu</span>
                </Link>
                <hr />
                <ul className="nav nav-pills flex-column mb-auto">
                    <li className="nav-item">
                        <Link to="/userdashboard" className="nav-link" aria-current="page">

                            Dashboard
                        </Link>
                    </li>
                    <li>
                        <Link to="/workspace" className="nav-link link-dark">

                            Workspace
                        </Link>
                    </li>
                    <li>
                        <Link href="#" className="nav-link link-dark">

                            Membership
                        </Link>
                    </li>
                    <li>
                        <Link href="#" className="nav-link link-dark">

                            Profile
                        </Link>
                    </li>
                    <li>
                        <Link href="#" className="nav-link link-dark">

                            Settings
                        </Link>
                    </li>
                </ul>
                <hr />
                <ul className="nav nav-pills flex-column mb-auto">
                    <li className="nav-item">
                        <button className='nav-link link-dark' onClick={() => {
                            auth.logout(() => {
                                navigate("/");
                            });
                        }}>Sign Out</button>

                    </li>
                </ul>

            </div>

            <div className="d-flex flex-column flex-shrink-0 p-3 bg-light" >

                <p>User Dashboard</p>
            </div>

        </div>
    )
}

export default Userdashboard