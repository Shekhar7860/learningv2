// const StoreHash = artifacts.require("StoreHash");
var StoreHash = artifacts.require("../src/contracts/StoreHash.sol");
// import {StoreHash} from '../src/contracts/StoreHash.sol'
module.exports = function (deployer) {
  deployer.deploy(StoreHash);
};
// module.exports = function (deployer) {
//   deployer.deploy(StoreHash);
// };
