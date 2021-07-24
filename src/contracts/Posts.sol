pragma solidity ^0.5.0;

contract Posts {
  uint public productCount = 0;

  struct Product {
    uint id;
    string content;
    bool completed;
  }

  mapping(uint => Product) public products;

  event ProductCreated(
    uint id,
    string content,
    bool completed
  );


  constructor() public {
  
  }

  function createProduct(string memory _content) public {
    productCount ++;
    products[productCount] = Product(productCount, _content, false);
    emit ProductCreated(productCount, _content, false);
  }

  

}