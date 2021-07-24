import { web3 } from "../../src/constants/constants";
const Items = require("../../src/abis/Items.json");

export const postContract = async () => {
  const t = await web3.eth.net.getId();
  const networkAddress = Items.networks[t].address;
  const abi = Items.abi;
  return new web3.eth.Contract(abi, networkAddress);
};
