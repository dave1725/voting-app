import '../App.css';
import { ConnectWallet } from '@thirdweb-dev/react';
import knights from '../assets/knights.png';
import league from '../assets/league.png';
import pheonix from '../assets/pheonix.png';
import winner from '../assets/winner.png';
import { useContract, useContractWrite } from "@thirdweb-dev/react";
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

const ethers = require('ethers');

function disable() {
    const button1 = document.getElementById("vote1");
    button1.disabled = true;
    const button2 = document.getElementById("vote2");
    button2.disabled = true;
    const button3 = document.getElementById("vote3");
    button3.disabled = true;
    const button4 = document.getElementById("vote4");
    button4.disabled = true;
}

export default function Dashboard(){
    const { contract } = useContract("0x09909Ec45011C3f96cB19c336706A69E7676d8F7");
    const { mutateAsync: updateVotes, isLoading } = useContractWrite(contract, "updateVotes")

    const navigate = useNavigate();

    const button1 = async () => {
        if(isLoading){
            alert("Please wait....");
        }
        else{
            disable();
            
            const myString = "Richard";
            const myBytes32 = ethers.utils.formatBytes32String(myString);
            const data = await updateVotes({ args: [myBytes32] });
            console.log(data);
    
            const a = localStorage.getItem("OTP");
            console.log(a);

            axios.post('http://localhost:8081/Dashboard',{value : a})
            .then((res) => {
                if(res.data==="Success"){
                    alert("Vote Submitted to Richard");
                    localStorage.removeItem("user");
                    navigate("/login");
                }
                else{
                    alert(res.data);
                }
            })
            .catch((err)=>{
                console.log(err);
            })
        }
    }

    const button2 = async () => {
        if(isLoading){
            alert("Please wait....");
        }
        else{
            disable();
            const myString = "Dave";
            const myBytes32 = ethers.utils.formatBytes32String(myString);
            const data = await updateVotes({ args: [myBytes32] });
            console.log(data);

            const a = localStorage.getItem("OTP");
            console.log(a);

            axios.post('http://localhost:8081/Dashboard',{value : a})
            .then((res) => {
                if(res.data==="Success"){
                    alert("Vote Submitted to Dave");
                    localStorage.removeItem("user");
                    navigate("/login");
                }
            })
            .catch((err)=>{
                console.log(err);
            })
        }
    }
    
    const button3 = async () => {
        if(isLoading){
            alert('Please wait....');
        }
        else{
            disable();
            const myString = "Daniel";
            const myBytes32 = ethers.utils.formatBytes32String(myString);
            const data = await updateVotes({ args: [myBytes32] });
            console.log(data);

            const a = localStorage.getItem("OTP");
            console.log(a);

            axios.post('http://localhost:8081/Dashboard',{value:a})
            .then((res) => {
                if(res.data==="Success"){
                    alert("Vote Submitted to Daniel");
                    localStorage.removeItem("user");
                    navigate("/login");
                }
            })
            .catch((err)=>{
                console.log(err);
            })
        }
    }
    
    const button4 = async () => {
        if(isLoading){
            alert("Please wait....");
        }
        else{
            disable();
            const myString = "Yohan";
            const myBytes32 = ethers.utils.formatBytes32String(myString);
            const data = await updateVotes({ args: [myBytes32] });
            console.log(data);

            const a = localStorage.getItem("OTP");
            console.log(a);

            axios.post('http://localhost:8081/Dashboard',{value : a})
            .then((res) => {
                if(res.data==="Success"){
                    alert("Vote Submitted to Yohan");
                    localStorage.removeItem("user");
                    navigate("/login");
                }
            })
            .catch((err)=>{
                console.log(err);
            })
        }
    }

    return (
        <>
        
            <div className="dash-container">
                <ConnectWallet />
                <table>
                    <thead>
                        <tr>
                            <th>Symbol</th>
                            <th>Party</th>
                            <th>Candidate Name</th>
                            <th>Vote</th>
                        </tr> 
                    </thead>

                    <tbody>
                        <tr>
          	                <td><img id="first" src={knights} alt=" " height="42" width="42"/></td>
          	                <td>Knowledge Knights</td>
                            <td id="cand1">Richard</td>
                            <td ><button id="vote1" class="btn waves-effect waves-light" type="submit" name="action" onClick={button1}>Vote</button></td>
                        
                        </tr>
                        <tr>
                            <td><hr></hr></td>
                            <td><hr></hr></td>
                            <td><hr></hr></td>
                            <td><hr></hr></td>
                        </tr>
                        <tr>
                            <td><img src={league} alt=" "height="42" width="42"/></td>
                            <td>League of Warriors</td>
                            <td id="cand2">Dave</td>
                            <td><button onClick={button2} id="vote2"  class="btn waves-effect waves-light" type="submit" name="action">Vote</button></td>
                        </tr>

                        <tr>
                            <td><hr></hr></td>
                            <td><hr></hr></td>
                            <td><hr></hr></td>
                            <td><hr></hr></td>
                        </tr>

                        <tr>
                            <td><img src={pheonix} alt=" "height="42" width="42"/></td>
                            <td>Pheonix</td>
                            <td id="cand3">Daniel</td>
                            <td><button onClick={button3} id="vote3"  class="btn waves-effect waves-light" type="submit" name="action">Vote</button></td>
                        </tr>

                        <tr>
                            <td><hr></hr></td>
                            <td><hr></hr></td>
                            <td><hr></hr></td>
                            <td><hr></hr></td>
                        </tr>

                        <tr>
                            <td><img src={winner} alt=" "height="42" width="42"/></td>
                            <td>Winners League</td>
                            <td id="cand4">Yohan</td>
                            <td><button onClick={button4} id="vote4" class="btn waves-effect waves-light" type="submit" name="action">Vote</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
}