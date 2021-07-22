import { web3 } from "../../src/constants/constants";
const auction = require("../../src/abis/AuctionContract.json");

export const auctionContract = async () => {
  const t = await web3.eth.net.getId();
  const networkAddress = auction.networks[t].address;
  const abi = auction.abi;
  return new web3.eth.Contract(abi, networkAddress);
};
