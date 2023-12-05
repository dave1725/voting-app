import React from "react";
import { Outlet,Navigate } from "react-router-dom";

const useAuth = () => {
    const a = localStorage.getItem('user');
    if(a)
        return true;
    if(!a)
        return false;
}

const PrivateRoute = () => {
    const auth = useAuth();
    
    return (
        auth ?  <Navigate to="/Dashboard"/> :<Outlet/>
    );
}

export default PrivateRoute;