import Web3 from "web3";
const ethereum = typeof window != undefined ? window.ethereum : {};
export const web3 = typeof window != undefined ? new Web3(window.ethereum) : {};
