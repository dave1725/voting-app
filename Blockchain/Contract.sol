// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.0;

contract voting {
    //create a mapping to store votes for each candidate
    mapping (bytes32 => uint ) candidVote;
    //create list of candidates
    bytes32[] candidNames;

    //function to receive candidnames and store it
    function getCandidNames(bytes32 name) public {
        candidNames.push(name);
    }

    //function to check validity of candidate
    function checkValid(bytes32 name) view public returns(bool){
        for(uint i=0;i<candidNames.length;i++){
            if(candidNames[i]==name)
                return true;
        }
        return false;
    }

    //function to clear candidates
    function resetElection() public {
        for(uint i=0;i<candidNames.length;i++){
            candidVote[candidNames[i]] = 0;
        }

        for(uint i = 0;i<candidNames.length;i++){
            candidNames[i] = 0x0;
        }
    }


    //function to update votes of candidate
    function updateVotes(bytes32 name) public{
        if(checkValid(name))
            candidVote[name] ++;
    }
    
    //function to get votes of a candidate
    function getVotes(bytes32 name) view public returns(uint){
        return candidVote[name];
    }
}
