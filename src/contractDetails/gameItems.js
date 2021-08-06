import { web3 } from "../../src/constants/constants";
const gameItems = require("../../src/abis/GameItems.json");

export const gameContract = async () => {
  const t = await web3.eth.net.getId();
  const networkAddress = gameItems.networks[t].address;
  const abi = gameItems.abi;
  return new web3.eth.Contract(abi, networkAddress);
};
