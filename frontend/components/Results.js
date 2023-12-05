import { ConnectWallet } from '@thirdweb-dev/react';
import { useContract } from "@thirdweb-dev/react";
import { ethers } from 'ethers';

export default function Result(){
    const candid1 = "Richard";
    const candid2 = "Dave";
    const candid3 = "Daniel";
    const candid4 = "Yohan";
    const myCandid1 = ethers.utils.formatBytes32String(candid1);
    const myCandid2 = ethers.utils.formatBytes32String(candid2);
    const myCandid3 = ethers.utils.formatBytes32String(candid3);
    const myCandid4 = ethers.utils.formatBytes32String(candid4);

    const { contract,isLoading } = useContract("0x09909Ec45011C3f96cB19c336706A69E7676d8F7");

    const action = async () =>{
        const isPublished = localStorage.getItem("results");
        if(isPublished === "true"){
            if(isLoading){
                alert("Please wait...");
            }
            const data = await contract.call("getVotes", [myCandid1]);
            const data1 = await contract.call("getVotes",[myCandid2]);
            const data2 = await contract.call("getVotes",[myCandid3]);
            const data3 = await contract.call("getVotes",[myCandid4]);
            
            
            if(data>data1 && data>data2 && data>data3){
                alert("Richard Votes : " + data + "\nDave Votes : " + data1 + "\nDaniel Votes : " + data2 + "\nYohan Votes : " + data3 + "\nWinner : Richard");
            }
            else if(data1>data && data1>data2 && data1>data3){
                alert("Richard Votes : " + data + "\nDave Votes : " + data1 + "\nDaniel Votes : " + data2 + "\nYohan Votes : " + data3 + "\nWinner : Dave");
            }
            else if(data2>data && data2>data1 && data2>data3){
                alert("Richard Votes : " + data + "\nDave Votes : " + data1 + "\nDaniel Votes : " + data2 + "\nYohan Votes : " + data3 + "\nWinner : Daniel");
            }
            else{
                alert("Richard Votes : " + data + "\nDave Votes : " + data1 + "\nDaniel Votes : " + data2 + "\nYohan Votes : " + data3 + "\nWinner  : Yohan");
            }
        }
        else{
            alert("Results are not published yet!!\nCome back another time");
        }
    }

    return (
        <>
            <div className="result-container">
                <p>Election closed!!</p>
                <p>Check for results!!</p>
                <button onClick={action}>GET RESULTS</button>
            </div>
        </>
    );
}