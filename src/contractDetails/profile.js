import { web3 } from "../../src/constants/constants";
const profile = require("../../src/abis/UserProfile.json");

export const profileContract = async () => {
  const t = await web3.eth.net.getId();
  const networkAddress = profile.networks[t].address;
  const abi = profile.abi;
  return new web3.eth.Contract(abi, networkAddress);
};
