var Posts = artifacts.require("../src/contracts/Posts.sol");
var Elements = artifacts.require("../src/contracts/Elements.sol");
const AuctionContract = artifacts.require(
  "../src/contracts/AuctionContract.sol"
);
const ERC1155Tradable = artifacts.require(
  "../src/contracts/ERC1155Tradable.sol"
);
module.exports = function (deployer) {
  deployer.deploy(ERC1155Tradable, "ERC", "ERC1155");
  deployer.deploy(Elements).then(function () {
    return deployer.deploy(AuctionContract, Elements.address);
  });
};
// module.exports = function (deployer) {
//   deployer.deploy(StoreHash);
// };
