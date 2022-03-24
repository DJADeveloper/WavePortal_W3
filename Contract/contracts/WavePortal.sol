// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.0;

import "hardhat/console.sol"; // this allows us to console.log()

contract WavePortal {

    uint totalWaves;
    string public message;
    address[] public listOfWavers;

    constructor() {
        message = "Yo whats good my guy!";
        console.log(message);
    }

    function wave() public {
        totalWaves += 1;
        console.log("%s has waved", msg.sender); //the person calling the function
    }

    function getTotalWaves() public view returns (uint) {
        console.log("We have %d total waves!", totalWaves);
        return totalWaves;
    }

    function showWavers() public view returns(address[] memory){
        return listOfWavers;
    }

    function sendMessage(string memory _message) public {
        message = _message;
    }

    function getMessage() public view returns (string memory) {
        return message;
    }

}