
pragma solidity ^0.5.0;

/**
 * @title Storage
 * @dev Store & retrieve value in a variable
 */
contract Profile {

    string metadata;

   
    function store(string memory data) public {
        metadata = data;
    }

   
    function retrieve() public view returns (string memory){
        return metadata;
    }
}