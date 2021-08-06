
pragma solidity ^0.5.0;

/**
 * @title Storage
 * @dev Store & retrieve value in a variable
 */
contract Profile {
    string metadata;

    function store(address _owner, string memory data) public {
        _owner =0x40B14c9f91942032777754Abdd29886143c42E95;
        metadata = data;
    }

   
    function retrieve(address _owner) public view returns (string memory){
        _owner = 0x40B14c9f91942032777754Abdd29886143c42E95;
        return metadata;
    }
}