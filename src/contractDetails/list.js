import { web3 } from "../../src/constants/constants";
const TodoList = require("../../src/abis/TodoList.json");

export const list = async () => {
  const t = await web3.eth.net.getId();
  const networkAddress = TodoList.networks[t].address;
  const abi = TodoList.abi;
  return new web3.eth.Contract(abi, networkAddress);
};
