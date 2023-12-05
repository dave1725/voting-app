import React from 'react';
import { NavLink } from 'react-router-dom';
import '../App.css';


export default function Navbar(){


    const logout = () =>{
        localStorage.removeItem("user");
        alert("logged out");
    }
    
    return (
        <nav className='nav-bar'>
            <NavLink id="navigator" to='/'>Home</NavLink>
            <NavLink id="navigator" to='/login'>Login</NavLink>
            <NavLink id="navigator" to='/About'>About</NavLink>
            <NavLink id="navigator" onClick={logout} to='/login'>Logout</NavLink>
        </nav>
    );
}



