import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import auth from "./auth";

function ProtectedRoutes() {
    let loggedIn = auth.isAuthenticated();
    return (
        loggedIn ? <Outlet /> : <Navigate to="/login" />
    )
}


export default ProtectedRoutes;