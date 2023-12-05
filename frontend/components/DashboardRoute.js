import React, { useState, useEffect } from "react";
import { Outlet, Navigate } from "react-router-dom";
import axios from 'axios';

const useAuth = () => {
    const a = localStorage.getItem('user');
    return Boolean(a);
}

const useVoted = () => {
    const [voted, setVoted] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            const aadhar = localStorage.getItem("OTP");

            try {
                const res = await axios.post("http://localhost:8081/otp-form", { value1: aadhar });
                if (res.data === "yes") {
                    setVoted(true);
                } else {
                    setVoted(false);
                }
            } catch (err) {
                console.log(err);
                setVoted(false);
            }
        };

        fetchData();
    }, []);

    return voted;
}

const useStatus = () => {
    const status = localStorage.getItem("status");
    return status === "open";
}

const DashboardRoute = () => {
    const auth = useAuth();
    const status = useStatus();
    const voted = useVoted();

    return (
        ((auth && voted) && status) ? <Navigate to="/notice"/> :
        (auth && !status) ? <Navigate to="/results" /> :
        (auth && status) ? <Outlet /> : <Navigate to="/login" />
    );
}

export default DashboardRoute;
