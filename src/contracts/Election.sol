pragma solidity >=0.4.21 <0.6.0;

contract Election {
    // Read/write candidate
    string public candidate;

    // Constructor
    constructor() public {
        candidate = "Candidate 1";
    }
}