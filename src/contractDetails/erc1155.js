import { web3 } from "../../src/constants/constants";
const erc1155 = require("../../src/abis/ERC1155Tradable.json");

export const postCollectible = async () => {
  const t = await web3.eth.net.getId();
  const networkAddress = erc1155.networks[t].address;
  const abi = erc1155.abi;
  return new web3.eth.Contract(abi, networkAddress);
};
