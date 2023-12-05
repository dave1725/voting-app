import '../App.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function LoginScreen(){
    const [aadhar, setAadhar] = useState({
        value:""
    });
    
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        var data = document.getElementById("login-input").value;
        localStorage.setItem("otp",data);
        
        axios.post('http://localhost:8081/login',aadhar)
        .then((res) =>{
            if(res.data === "admin"){
                console.log('admin login');
                navigate('/admin');
            }
            
            else if(res.data === "Success"){
                console.log(res.data);
                localStorage.setItem("OTP",data);
                navigate('/otp-form');
            }

            else{
                console.log(res);
                alert("Aadhar Number not found!");
            }
        })
        .catch((err) => console.log(err));
        console.log("aadhard no submitted");
    }
    
    return (
        <>
        <div className='login-container'>
            <form onSubmit={handleSubmit}>
                <h1>LOGIN</h1>
                <input id="login-input" type="number" placeholder='Aadhar Card No' onChange={(e) => setAadhar({ value: e.target.value})} required></input>
                
                <button id='login'>SUMBIT</button>
            </form>
        </div>
        </>
    );
}


