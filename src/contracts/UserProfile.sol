pragma solidity ^0.5.0;
contract UserProfile {
    
  mapping(address => uint) private addressToIndex;
  mapping(string => uint) private usernameToIndex;
  address[] private addresses;
  string[] private usernames;
  string[] private ipfsHashes;
function User() public {
    // mappings are virtually initialized to zero values so we need to "waste" the first element of the arrays
    // instead of wasting it we use it to create a user for the contract itself
    addresses.push(msg.sender);
    usernames.push('self');
    ipfsHashes.push('not-available');
}
function hasUser(address userAddress) public view returns(bool hasIndeed) 
  {
    return (addressToIndex[userAddress] > 0 || userAddress == addresses[0]);
  }
function usernameTaken(string memory username) public view returns(bool takenIndeed) 
  {
    return (usernameToIndex[username] > 0);
  }
  
  function createUser(string memory username, string memory ipfsHash) public returns(bool success)
  {
addresses.push(msg.sender);
    usernames.push(username);
    ipfsHashes.push(ipfsHash);
addressToIndex[msg.sender] = addresses.length - 1;
    usernameToIndex[username] = addresses.length - 1;
  }
function updateUser(string memory ipfsHash) public returns(bool success)
  {
    require(hasUser(msg.sender));
    
    ipfsHashes[addressToIndex[msg.sender]] = ipfsHash;
    return true;
  }  
 
  function getUserCount() public view returns(uint count)
  {
    return addresses.length;
  }
// get by index
  function getUserByIndex(uint index) public view returns(address userAddress, string memory username, string memory ipfsHash) {
    require(index < addresses.length);
return(addresses[index], usernames[index], ipfsHashes[index]);
  }
function getAddressByIndex(uint index) public view returns(address userAddress)
  {
    require(index < addresses.length);
return addresses[index];
  }
function getUsernameByIndex(uint index) public view returns(string memory username)
  {
    require(index < addresses.length);
return usernames[index];
  }
function getIpfsHashByIndex(uint index) public view returns(string memory ipfsHash)
  {
return ipfsHashes[index];
  }
// get by address
  function getUserByAddress(address userAddress) public view returns(uint index, string memory username, string memory ipfsHash) {
    require(index < addresses.length);
return(addressToIndex[userAddress], usernames[addressToIndex[userAddress]], ipfsHashes[addressToIndex[userAddress]]);
  }
function getIndexByAddress(address userAddress) public view returns(uint index)
  {
    require(hasUser(userAddress));
return addressToIndex[userAddress];
  }
function getUsernameByAddress(address userAddress) public view returns(string memory username)
  {
    require(hasUser(userAddress));
return usernames[addressToIndex[userAddress]];
  }
function getIpfsHashByAddress(address userAddress) public view returns(string memory ipfsHash)
  {
    require(hasUser(userAddress));
return ipfsHashes[addressToIndex[userAddress]];
  }
// get by username
  function getUserByUsername(string memory username) public view returns(uint index, address userAddress, string memory ipfsHash) {
    require(usernameToIndex[username] < addresses.length);
return(usernameToIndex[username], addresses[usernameToIndex[username]], ipfsHashes[usernameToIndex[username]]);
  }
function getIndexByUsername(string memory username) public view returns(uint index)
  {
    require(usernameTaken(username));
return usernameToIndex[username];
  }
function getAddressByUsername(string memory username) public view returns(address userAddress)
  {
    require(usernameTaken(username));
return addresses[usernameToIndex[username]];
  }
function getIpfsHashByUsername(string memory username) public view returns(string memory ipfsHash)
  {
    require(usernameTaken(username));
return ipfsHashes[usernameToIndex[username]];
  }
}