import { useNavigate } from "react-router-dom";
import { useContract, useContractWrite, useContractRead, ConnectWallet } from "@thirdweb-dev/react";

const ethers = require('ethers');

export default function Result(){
    
    const Navigate = useNavigate();
    const button = document.getElementsByClassName("button");

    const { contract,isLoading } = useContract("0x09909Ec45011C3f96cB19c336706A69E7676d8F7");
    const { mutateAsync: resetElection, Loading } = useContractWrite(contract, "resetElection")

    const button1 = () => {
        var txt;
        if(window.confirm("Confirm your action")){
            const button = document.getElementById("start");
            button.disabled = true;
            Navigate('/control-panel');
        }
        else{
            txt = "Action aborted";
            alert(txt);
        }
    }

    const button2 = () => {
        var txt;
        if(window.confirm("Confirm your action")){
            localStorage.setItem("status","closed");
            txt = "Status Updated : Election closed!";
            alert(txt);
        }
        else{
            txt = "Action aborted";
            alert(txt);
        }
    }

    const button3 = () => {
        var txt;
        if(window.confirm("Confirm your action")){
            localStorage.setItem("results","true");
            txt = "Status Updated : Results Published";
            alert(txt);
        }
        else{
            txt = "Action aborted";
            alert(txt);
        }
    }

    const button4 = async () => {
        if(window.confirm("Confirm your action!")){
            try{
                const data = await resetElection({ args: [] })
                const button = document.getElementById("start");
                button.disabled  = false;
            }
            catch(err){
                alert(err);
            }
        }
    }

    const button5 = () =>{
        Navigate('/status');
    }
    
    return (
        <>
        <div className="admin-container">
            <ConnectWallet/>
            <p>Welcome Election Comissioner!</p>
            <h3>MAIN CONTROLS</h3>
            <button className="button" id="start" onClick={button1}>START THE ELECTION</button>
            <hr></hr>
            <button className="button" id="end" onClick={button2}>END THE ELECTION</button>
            <hr></hr>
            <button className="button" id="publish" onClick={button3}>PUBLISH THE RESULTS</button>
            <hr></hr>
            <button className="button" id="reset" onClick={button4}>RESET ELECTION</button>
            <hr></hr>
            <button className="button" id="status" onClick={button5}>STATUS</button>
            <hr></hr>
        </div>
        </>
    )
}