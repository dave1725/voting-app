import { useNavigate } from 'react-router-dom';
import '../App.css';

let otp = '';

function generate_otp(){
    var digits = '0123456789';
    for(let i=0;i<4;i++){
        otp+=digits[Math.floor(Math.random()*10)];
    }
    alert("OTP :" + otp);
    const button = document.getElementById("otp-button");
    button.disabled = true;
}

export default function OtpScreen(props){
    const navigate = useNavigate();

    function handler(event){
        const temp = document.getElementById("otp");
    
        if(temp.value === otp && temp.value!==''){
            otp = '';
            const aadhar_data = localStorage.getItem("OTP");
            localStorage.setItem("user",aadhar_data);
            alert("login succeeded");
            navigate('/Dashboard');
        }
        else{
            alert("login failed");
        }
    }
    
    return (
        <>
        <div className='otp-area'>
            <form onSubmit={handler}>
                <h1>OTP</h1>
                <input id="otp" type="number" max="9999"></input>
                <button id="otp" >SUBMIT</button>
                <button id="otp-button" onClick={generate_otp}>GET OTP</button>
            </form>
        </div>
        </>
    );
}

