import { web3 } from "../../src/constants/constants";
const Posts = require("../../src/abis/Posts.json");

export const postContract = async () => {
  const t = await web3.eth.net.getId();
  const networkAddress = Posts.networks[t].address;
  const abi = Posts.abi;
  return new web3.eth.Contract(abi, networkAddress);
};
