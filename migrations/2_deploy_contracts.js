var Posts = artifacts.require("../src/contracts/Posts.sol");
var Elements = artifacts.require("../src/contracts/Elements.sol");
var GameItems = artifacts.require("../src/contracts/GameItems.sol");
var StoreHash = artifacts.require("../src/contracts/StoreHash.sol");
const AuctionContract = artifacts.require(
  "../src/contracts/AuctionContract.sol"
);
const ERC1155Tradable = artifacts.require(
  "../src/contracts/ERC1155Tradable.sol"
);
const Profile = artifacts.require("../src/contracts/UserProfile.sol");
module.exports = function (deployer) {
  deployer.deploy(ERC1155Tradable, "ERC", "ERC1155");
  deployer.deploy(Profile);
  deployer.deploy(StoreHash);
  deployer.deploy(Elements).then(function () {
    return deployer.deploy(AuctionContract, Elements.address);
  });
};
// module.exports = function (deployer) {
//   deployer.deploy(StoreHash);
// };
