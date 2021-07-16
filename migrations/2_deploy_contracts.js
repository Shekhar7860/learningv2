var Posts = artifacts.require("../src/contracts/Posts.sol");
var Items = artifacts.require("../src/contracts/Items.sol");
module.exports = function (deployer) {
  deployer.deploy(Items);
};
// module.exports = function (deployer) {
//   deployer.deploy(StoreHash);
// };
