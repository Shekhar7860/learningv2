pragma solidity ^0.5.0;
pragma experimental ABIEncoderV2;

import "./Elements.sol";
import "@openzeppelin/contracts/math/SafeMath.sol";
/**
 * @title Auction Repository
 * This contracts allows auctions to be created for non-fungible tokens
 * Moreover, it includes the basic functionalities of an auction house
 */

contract AuctionContract {
    using SafeMath for uint;
    uint[] public hotAuctions;
    // Array with all auctions
    Auction[] public auctions;

    // Mapping from auction index to user bids
    mapping(uint256 => Bid[]) public auctionBids;

    Elements public NFTContract;

    // Mapping from owner to a list of owned auctions
    mapping(address => uint256[]) public auctionOwner;

    // Bid struct to hold bidder and amount
    struct Bid {
        address payable from;
        uint256 amount;
    }

    address payable _webOwner = 0xF2392C6DE6B5731118f5CA1752D77DFa358DFb68;
    address payable _Owner = 0x0C66201b578a46B9ac05D10c7F0EEf3B60cFc0fA;

    address public _add;

    event AddedValuesByCall(address a, address b, uint256 productId, address c);

    event BidSuccess(address _from, uint256 _auctionId);

    // AuctionCreated is fired when an auction is created
    event AuctionCreated(address _owner, uint256 _auctionId);

    // AuctionFinalized is fired when an auction is finalized
    event AuctionFinalized(address _owner, uint256 _auctionId, address from, uint256 productId);

    // AuctionCancelled is fired when an auction is cancelled
    event AuctionCancelled(address _owner, uint256 _auctionId, address from, uint256 productId);

    event Contract(  uint256 id, string name, address owner, uint256 price, uint256 royaltyFee);

    // Auction struct which holds all the required info
    struct Auction {
        uint256 id;
        string name;
        uint256 startPrice;
        uint256 endPrice;
        string metadata;
        uint256 productId;
        address deedRepositoryAddress;
        address payable owner;
        bool active;
        uint256 royalityFee;
        uint256 startDate;
        uint256 endDate;
    }

      constructor(address _NFTAddress) public {
      NFTContract = Elements(_NFTAddress);
  }

    /**
     * @dev Guarantees msg.sender is owner of the given auction
     * @param _auctionId uint ID of the auction to validate its ownership belongs to msg.sender
     */
    modifier isOwner(uint256 _auctionId) {
        require(auctions[_auctionId].owner == msg.sender);
        _;
    }

    /**
     * @dev Guarantees this contract is owner of the given deed/token
     * @param _deedRepositoryAddress address of the deed repository to validate from
     * @param _productId uint256 ID of the deed which has been registered in the deed repository
     */
    modifier contractIsProductOwner(
        address _deedRepositoryAddress,
        uint256 _productId
    ) {
        address productOwner = Elements(_deedRepositoryAddress).ownerOf(_productId);
        require(productOwner == msg.sender);
        _;
    }

    /**
     * @dev Disallow payments to this contract directly
     */
    // function() public{
    //     revert();
    // }

    /**
     * @dev Gets the length of auctions
     * @return uint representing the auction count
     */
    function getCount() public view returns (uint256) {
        return auctions.length;
    }

    /**
     * @dev Gets the bid counts of a given auction
     * @param _auctionId uint ID of the auction
     */
    function getBidsCount(uint256 _auctionId) public view returns (uint256) {
        return auctionBids[_auctionId].length;
    }

    /**
     * @dev Gets an array of owned auctions
     * @param _owner address of the auction owner
     */
    function getAuctionsOf(address _owner)
        public
        view
        returns (uint256[] memory)
    {
        uint256[] memory ownedAuctions = auctionOwner[_owner];
        return ownedAuctions;
    }

    /**
     * @dev Gets an array of owned auctions
     * @param _auctionId address of the auction owner
     */
    function getBidOfAuctions(uint256 _auctionId)
        public
        view
        returns (Bid[] memory)
    {
        Bid[] memory ownedBids = auctionBids[_auctionId];
        return ownedBids;
    }

    /**
     * @dev Gets an array of owned auctions
     * @param _auctionId uint of the auction owner
     * @return amount uint256, address of last bidder
     */
    function getCurrentBid(uint256 _auctionId)
        public
        view
        returns (uint256, address)
    {
        uint256 bidsLength = auctionBids[_auctionId].length;
        // if there are bids refund the last bid
        if (bidsLength > 0) {
            Bid memory lastBid = auctionBids[_auctionId][bidsLength - 1];
            return (lastBid.amount, lastBid.from);
        }
        return (0, address(0) );
    }

    /**
     * @dev Gets the total number of auctions owned by an address
     * @param _owner address of the owner
     * @return uint total number of auctions
     */
    function getAuctionsCountOfOwner(address _owner)
        public
        view
        returns (uint256)
    {
        return auctionOwner[_owner].length;
    }

    /**
     * @dev Gets the info of a given auction which are stored within a struct
     * @param _auctionId uint ID of the auction
     * @return string name of the auction
     * @return uint256 starting price of the auction
     * @return string representing the metadata of the auction
     * @return uint256 ID of the deed registered in DeedRepository
     * @return address Address of the DeedRepository
     * @return address owner of the auction
     * @return bool whether the auction is active
     * @return bool whether the auction is finalized
     * @return uint256 starting price of the auction
     * @return uint256 starting price of the auction
     */
    function getAuctionById(uint256 _auctionId)
        public
        view
        returns (
            uint256 id,
            string memory name,
            uint256 startPrice,
            uint256 endPrice,
            string memory metadata,
            uint256 productId,
            address deedRepositoryAddress,
            address owner,
            bool active,
            uint256 royalityFee,
            uint256 startDate,
            uint256 endDate
        )
    {
        Auction memory auc = auctions[_auctionId];
        return (
            auc.id,
            auc.name,
            auc.startPrice,
            auc.endPrice,
            auc.metadata,
            auc.productId,
            auc.deedRepositoryAddress,
            auc.owner,
            auc.active,
            auc.royalityFee,
            auc.startDate,
            auc.endDate
        );
    }

    // /**
    //  * @dev Gets the info of a given auction which are stored within a struct
    //  * @param _auctionId uint ID of the auction
    //  * @return uint256 bidding amount of the auction
    //  * @return address owner of the bidder
    //  */
    // function getAuctionBids(uint256 _auctionId)
    //     public
    //     view
    //      returns (Bid[] memory)
    // {
    //     Bid[] memory ownedAuctionBids = auctionBids[_auctionId];
    //     return ownedAuctionBids;
    // }


    /**
     * @dev Creates an auction with the given informatin
     * @param _deedRepositoryAddress address of the DeedRepository contract
     * @param _productId uint256 of the deed registered in DeedRepository
     * @param _auctionTitle string containing auction title
     * @param _metadata string containing auction metadata
     * @param _startPrice uint256 starting price of the auction
     * @param _endPrice uint256 starting price of the auction
     * @param _startDate uint256 starting price of the auction
     * @param _endDate uint256 starting price of the auction
     * @return bool whether the auction is created
     */
    function createAuction(
        address _deedRepositoryAddress,
        uint256 _productId,
        string memory _auctionTitle,
        string memory _metadata,
        uint256 _startPrice,
        uint256 _endPrice,
        uint256 _startDate,
        uint256 _endDate,
        uint256 _royalityFee
    ) public returns (bool) {
        uint256 auctionId = auctions.length;
        Auction memory newAuction;
        newAuction.id = auctionId;
        newAuction.name = _auctionTitle;
        newAuction.startPrice = _startPrice;
        newAuction.endPrice = _endPrice;
        newAuction.metadata = _metadata;
        newAuction.productId = _productId;
        newAuction.deedRepositoryAddress = _deedRepositoryAddress;
        newAuction.owner = msg.sender;
        newAuction.active = true;
        newAuction.royalityFee = _royalityFee;
        newAuction.startDate = _startDate;
        newAuction.endDate = _endDate;

        auctions.push(newAuction);
        auctionOwner[msg.sender].push(auctionId);

        
        //  (bool success, bytes memory result) = _deedRepositoryAddress.delegatecall(abi.encodeWithSignature("products(uint256)",_productId));

        

        emit AuctionCreated(msg.sender, auctionId );
        return true;
    }

   
    /**
     * @dev Finalized an ended auction
     * @dev The auction should be ended, and there should be at least one bid
     * @dev On success Deed is transfered to bidder and auction owner gets the amount
     * @param _auctionId uint ID of the created auction
     @param _endDate uint ID of the created auction
     */
    function finalizeAuction(uint256 _auctionId,uint256 _endDate) public {
        Auction memory myAuction = auctions[_auctionId];
        uint256 bidsLength = auctionBids[_auctionId].length;

        require(myAuction.owner == msg.sender);
        
        ( uint256 id, string memory name, address payable owner, address payable creator, uint256 price, uint256 royaltyFee, uint256 webFee) = NFTContract.products(myAuction.productId); 
        

      

        // 1. if auction not ended just revert
        // if (block.timestamp < myAuction.blockDeadline) revert();

        // if there are no bids cancel
        if (bidsLength == 0) {
            // cancelAuction(_auctionId);
        } else {
            // 2. the money goes to the auction owner
            Bid memory lastBid = auctionBids[_auctionId][bidsLength - 1];
            // (bool resp, bytes memory data) = myAuction.deedRepositoryAddress.delegatecall(abi.encodeWithSignature("div(uint256,uint256)", 25, 1000));
            // uint256 webOwnerAmount = mul(div(25,1000) , lastBid.amount);
            // uint256 AuctionOwnerAmount = sub(lastBid.amount , webOwnerAmount);
            //  if (!_webOwner.send(lastBid.webOwnedAmount)) {
            //     revert();
            // }
            // if (!myAuction.owner.send(lastBid.auctionOwnerAmount)) {
            //     revert();
            // }
           
            uint256 remaining = lastBid.amount.sub(lastBid.amount.div(100).mul(royaltyFee)+lastBid.amount.div(100).mul(webFee));
            if (!owner.send(remaining)) {
                revert();
            }
            if (!creator.send(lastBid.amount.div(100).mul(royaltyFee))) {
                revert();
            }

            // require(NFTContract.ownerOf(myAuction.productId) == msg.sender, "NOT OWNER");
            // NFTContract.approve(address(this) to, uint256 tokenId)(msg.sender, address(this));
            // NFTContract.setApprovalForAll(address(this), true);
            // NFTContract.safeTransferFrom( msg.sender, lastBid.from , myAuction.productId);

            // approve and transfer from this contract to the bid winner
              // approve and transfer from this contract to the bid winner 
            // if(approveAndTransfer(address(this), lastBid.from, myAuction.deedRepositoryAddress, myAuction.productId)){
                if(true){
                auctions[_auctionId].active = false;
                auctions[_auctionId].endPrice = lastBid.amount;
                auctions[_auctionId].endDate = _endDate;    
                emit AuctionFinalized(msg.sender, _auctionId, lastBid.from, myAuction.productId );
                // emit Contract( id, name, owner, price,royaltyFee);
            }
        }
    }

       /**
     * @dev Finalized an ended auction
     * @dev The auction should be ended, and there should be at least one bid
     * @dev On success Deed is transfered to bidder and auction owner gets the amount
     * @param _auctionId uint ID of the created auction
     */
    function cancelAuction(uint256 _auctionId) public {
        Auction memory myAuction = auctions[_auctionId];
        uint256 bidsLength = auctionBids[_auctionId].length;

        // require(myAuction.owner == msg.sender);
        
        // 1. if auction not ended just revert
        // if (block.timestamp < myAuction.blockDeadline) revert();

        // if there are no bids cancel
        if (bidsLength == 0) {
            // cancelAuction(_auctionId);
               auctions[_auctionId].active = false;
        } else {
            // 2. the money goes to the auction owner
            Bid memory lastBid = auctionBids[_auctionId][bidsLength - 1];
            // (bool resp, bytes memory data) = myAuction.deedRepositoryAddress.delegatecall(abi.encodeWithSignature("div(uint256,uint256)", 25, 1000));
            // uint256 webOwnerAmount = mul(div(25,1000) , lastBid.amount);
            // uint256 AuctionOwnerAmount = sub(lastBid.amount , webOwnerAmount);
           
            if (!myAuction.owner.send(lastBid.amount)) {
                revert();
            }

            // approve and transfer from this contract to the bid winner
              // approve and transfer from this contract to the bid winner 
            // if(approveAndTransfer(address(this), lastBid.from, myAuction.deedRepositoryAddress, myAuction.productId)){
                if(true){
                auctions[_auctionId].active = false;
                emit AuctionCancelled(msg.sender, _auctionId, lastBid.from, myAuction.productId);
            }
        }
    }

    function getHotAuctions() public view returns (uint[] memory) {
       return hotAuctions;
    }
    /**
     * @dev Bidder sends bid on an auction
     * @dev Auction should be active and not ended
     * @dev Refund previous bidder if a new bid is valid and placed.
     * @param _auctionId uint ID of the created auction

     */
    function bidOnAuction(uint256 _auctionId ) public payable {
        uint256 ethAmountSent = msg.value;

        // owner can't bid on their auctions
        Auction memory myAuction = auctions[_auctionId];
        if (myAuction.owner == msg.sender) {
             revert();
        }

        // if auction is expired
        // if (block.timestamp > myAuction.blockDeadline) revert();

        uint256 bidsLength = auctionBids[_auctionId].length;
        uint256 tempAmount = myAuction.startPrice;
        Bid memory lastBid;

        // there are previous bids
        if (bidsLength > 0) {
            lastBid = auctionBids[_auctionId][bidsLength - 1];
            tempAmount = lastBid.amount;
        }



        // check if amound is greater than previous amount
        if (ethAmountSent < tempAmount){
             revert();
        }

        // refund the last bidder
        if (bidsLength > 0) {
            if (!lastBid.from.send(lastBid.amount)) {
                revert();
            }
        }

       
        // insert bid
        Bid memory newBid;
        newBid.from = msg.sender;
        newBid.amount = ethAmountSent;
        // newBid.auctionOwnerAmount = _auctionOwnerAmount;
        // newBid.webOwnedAmount = _webOwnedAmount;
        auctionBids[_auctionId].push(newBid);
        hotAuctions.push(_auctionId);
        emit BidSuccess(msg.sender, _auctionId);
        
        
    }
}
