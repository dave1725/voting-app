import React, { useState, useEffect } from 'react';
import { ConnectWallet } from '@thirdweb-dev/react';
import { useContract, useContractWrite } from "@thirdweb-dev/react";
import { ethers } from 'ethers';
import { useNavigate } from 'react-router-dom';


export default function ControlPanel() {
    const navigate = useNavigate();
    const { contract } = useContract("0x09909Ec45011C3f96cB19c336706A69E7676d8F7");
    const { mutateAsync: getCandidNames, isLoading } = useContractWrite(contract, "getCandidNames");

    const handleStart = () => {
        const size = localStorage.getItem("count");
        var count = 0;
        
        for(let i=1;i<=size;i++){
            const button = document.getElementById("button"+i);
            if(button.disabled){
                count++;
            }
        }
        if(count>=2){
            if(window.confirm("Confirm your action")){
                localStorage.setItem("results","false");
                localStorage.setItem("status","open");
                alert("Election started");
                navigate('/admin');
            }
            else{
                alert("Action aborted!");
            }    
        }
        else{
            alert("Please add atleast two candidates");
        }
    }

    const handleButtonClick = async (event) => {
        const str = event.target.id;
        let matches = str.match(/(\d+)/);
        const myString = document.getElementById("box"+matches[0]).value;
        if(myString===''){
            alert("Please enter the name of candidate!");
        }
        else{
            const buttonId = event.target.id;
            const button = document.getElementById(buttonId);
            try{ 
                button.disabled = true;
                const myBytes32 = ethers.utils.formatBytes32String(myString);
                const {data} = await getCandidNames({ args: [myBytes32] });
                console.log(data);
                localStorage.setItem("vote","true");
                alert("Candidate : "+myString+" Added!");
            } 
            catch (error){
                button.disabled = false;
                alert("Failed due to\n" + error);
            }
        }
    }
    
    const [size, setSize] = useState(0);

    const handleSubmit = () => {
        var inputs = "";
        const newSize = document.getElementById("how-many").value;
        localStorage.setItem("count",newSize);
        if(newSize>1){
            setSize(newSize);
            console.log(newSize);
            inputs += '<br/>';
            inputs += '<p>Atleast two candidate names have to be provided</p>';
            for (let i = 0; i < newSize; i++) {
                inputs += 'Candidate' + (i + 1) + '<input type="text" id="box' + (i+1) + '" name="box' + i + '"required/>';
                inputs += '<button class=common-btn id=button' + (i + 1) + '>ADD</button><br/>';
            }
            inputs += '<br/>';
            inputs += '<button id=submit>START ELECTION</button>';
            console.log(inputs);
            document.getElementById("control-container").innerHTML = inputs;
            const submit = document.getElementById("submit");
            submit.addEventListener("click",handleStart);
        }
        else{
            alert("Minimum number of candidates is two");
        }
    }

    useEffect(() => {
        for (let i = 0; i < size; i++) {
            const button = document.getElementById("button" + (i + 1));
            button.addEventListener("click", handleButtonClick);
        }

        return () => {
            // Cleanup: Remove event listeners when component unmounts
        for (let i = 0; i < size; i++) {
            const button = document.getElementById("button" + (i + 1));
            button.removeEventListener("click", handleButtonClick);
        }
        };
    }, [size]);

    return (
        <>
        <div id="control-container">
            <form onSubmit={handleSubmit}>
                <ConnectWallet required/>
                <h1>Number of participating candidates</h1>
                <h2>NOTE!</h2>
                <p>Once you press submit there's no coming back so be careful otherwise you have to reset the whole election!!</p>
                <p>After that you will have the option to start the election!!</p>
                <div className='field'>
                    <input id="how-many" type="number" placeholder="Enter here" required/>
                    <button id="submit">SUBMIT</button>
                </div>
            </form>
        </div>
        </>
    );
}
