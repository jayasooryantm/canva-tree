import React from 'react'
import { Link } from 'react-router-dom'

function Userdashboard() {
    return (
        <div>
            <Link to={"/login"}><button className="btn btn-primary">Login</button></Link>
            <Link to={"/workspace"}><button className="btn btn-primary">Workspace</button></Link>
        </div>
    )
}

export default Userdashboard