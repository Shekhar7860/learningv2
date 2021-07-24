pragma solidity ^0.5.0;

contract Items {
  uint public productCount = 0;

  struct Product {
    uint id;
    string name;
    address payable owner;
  }

  mapping(uint => Product) public products;

  event ProductCreated(
    uint id,
    string name,
    address payable owner
  );


  constructor() public {
  
  }

  function createProduct(address owner,
        string memory _name)
         public {
    require(bytes(_name).length > 0);
    productCount ++;
    products[productCount] = Product(productCount, _name, msg.sender);
    emit ProductCreated(productCount, _name, msg.sender);
  }
}
