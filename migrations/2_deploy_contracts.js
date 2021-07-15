// const StoreHash = artifacts.require("StoreHash");
var Posts = artifacts.require("../src/contracts/Posts.sol");
// import {StoreHash} from '../src/contracts/StoreHash.sol'
module.exports = function (deployer) {
  deployer.deploy(Posts);
};
// module.exports = function (deployer) {
//   deployer.deploy(StoreHash);
// };
