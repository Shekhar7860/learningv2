pragma solidity ^0.5.0;

import "@openzeppelin/contracts/token/ERC721/ERC721Full.sol";
import "@openzeppelin/contracts/drafts/Counters.sol";


contract Elements is ERC721Full {
    string public name;
    uint256 public productCount = 0;

    mapping(uint256 => Product) public products;
    mapping(uint256 => Royality) public royalities;
    mapping(address => uint256[]) public tokenOwner;

    struct Product {
        uint256 id;
        string name;
        address payable owner;
        address payable creator;
        uint256 price;
        uint256 royaltyFee;
        uint256 webFee;
    }

    struct Royality {
        address payable owner;
        uint8 royaltyFee;
    }

    event ProductApproved(uint256 _productId);

    event TransferProduct(uint256 _productId);

    event ProductCreated(
        uint256 id,
        string _name,
        address payable owner,
        address payable created
    );

    event ProductUpdated(
        uint256 id,
        address from,
        address owner,
        uint256 price
    );

    constructor() public ERC721Full("Artabia", "ArtabiaCollection") {}

    function createProduct(
        address owner,
        string memory metadataURI,
        string memory _name,
        uint256 royaltyFee,
        uint256 webFee,
        uint256 price
    ) public {
        require(bytes(_name).length > 0);
        // // Required Valid Price
        // require(_price > 0);
        //Increment product count
        productCount++;
        _mint(msg.sender, productCount);
        addItemMetadata(productCount, metadataURI);
        tokenOwner[msg.sender].push(productCount);
        //create a product
        products[productCount] = Product(
            productCount,
            _name,
            msg.sender,
            msg.sender,
            price,
            royaltyFee,
            webFee
        );

        //Trigger the enter
        emit ProductCreated(productCount, _name, msg.sender, msg.sender);
       
    }

    function getAddress() public view returns (address) {
        address myaddress = address(this); //contract address
        return myaddress;
    }

    /**
     * @dev Gets an array of owned auctions
     * @param _owner address of the auction owner
     */
    function getTokensOf(address _owner)
        public
        view
        returns (uint256[] memory)
    {
        uint256[] memory ownedTokens = tokenOwner[_owner];
        return ownedTokens;
    }


    function addItemMetadata(uint256 _tokenId, string memory _uri)
        public
        returns (bool)
    {
        _setTokenURI(_tokenId, _uri);
        return true;
    }

      function transferToken(
        address _from,
        address payable _to,
        uint256 _token    ) public {
        safeTransferFrom(_from, _to, _token);
        Product memory _product = products[_token];
        // Fetch the Owner
        require(_product.id > 0 && _product.id <= productCount);
        // Check the product not be purchased before
        // require(!_product.purchased);
        // check the seller can't buy his own product
        // Transfer the ownership to buyer
        _product.owner = _to;
        deleteTokenOf(_from, _token);
        tokenOwner[_to].push(_token);



        // if(_product.royaltyFee > 0){
        //     _product.owner.transfer(_product.royaltyFee);
        // }
        // Mark as Purchase
        // _product.purchased = true;

        // Update the product
        products[_token] = _product;

        emit ProductUpdated(_token, _from, _product.owner,_product.price);
    }

    function deleteTokenOf(address _owner, uint256 _tokenId)
        public
        returns (uint256[] memory)
    {
        uint256[] memory ownedTokens = tokenOwner[_owner];
          for (uint i = 0; i<ownedTokens.length; i++){
             if(ownedTokens[i] == _tokenId){
                 delete ownedTokens[i];
            }
        }

        tokenOwner[_owner] = ownedTokens;
         return ownedTokens;
    }



    // function editToken(
    //     address _owner,
    //     address _from,
    //     uint256 _token    ) public {
    //     safeTransferFrom(_from, _to, _token);
    //     Product memory _product = products[_token];
    //     // Fetch the Owner
    //     require(_product.id > 0 && _product.id <= productCount);
    //     // Check the product not be purchased before
    //     // require(!_product.purchased);
    //     // check the seller can't buy his own product
    //     // Transfer the ownership to buyer
    //     _product.owner = _to;

    //     if(_product.royaltyFee > 0){
    //         _product.owner.transfer(_product.royaltyFee);
    //     }
    //     // Mark as Purchase
    //     // _product.purchased = true;

    //     // Update the product
    //     products[_token] = _product;

    //     emit ProductUpdated(_token, _from, _product.owner,_product.price);
    // }

    
  
}
