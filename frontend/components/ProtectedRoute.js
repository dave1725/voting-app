import React from "react";
import { Outlet, Navigate} from 'react-router-dom';

const useAuth = () =>{
    const a = localStorage.getItem("otp");
    if(a)
        return true;
    if(!a)
        return false;
}

const ProtectedRoute = () =>{
    const auth = useAuth();
    localStorage.removeItem('otp');
    return(
        auth ?<Outlet />: <Navigate to="/login"/>
    );
};

export default ProtectedRoute;



