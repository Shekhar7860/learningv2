import { web3 } from "../../src/constants/constants";
const Elements = require("../../src/abis/Elements.json");
export const networkAddress = async () => {
  const t = await web3.eth.net.getId();
  const networkAddress = Elements.networks[t].address;
  return networkAddress;
};
export const postContract = async () => {
  const t = await web3.eth.net.getId();
  const networkAddress = Elements.networks[t].address;
  const abi = Elements.abi;
  return new web3.eth.Contract(abi, networkAddress);
};
