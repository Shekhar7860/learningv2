import { web3 } from "../../src/constants/constants";
const hash = require("../../src/abis/StoreHash.json");

export const hashContract = async () => {
  const t = await web3.eth.net.getId();
  const networkAddress = hash.networks[t].address;
  const abi = hash.abi;
  return new web3.eth.Contract(abi, networkAddress);
};
