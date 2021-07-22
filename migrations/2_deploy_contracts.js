var Posts = artifacts.require("../src/contracts/Posts.sol");
var Items = artifacts.require("../src/contracts/Items.sol");
const ERC1155Tradable = artifacts.require("ERC1155Tradable");
const AuctionContract = artifacts.require("AuctionContract");
module.exports = function (deployer) {
  deployer.deploy(ERC1155Tradable, "ERC", "ERC1155");
  deployer.deploy(Items);
  deployer.deploy(AuctionContract, Items.address);
};
// module.exports = function (deployer) {
//   deployer.deploy(StoreHash);
// };
