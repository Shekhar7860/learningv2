import Web3 from "web3";
const ethereum = typeof window != undefined ? window.ethereum : {};
export const web3 = typeof window != undefined ? new Web3(window.ethereum) : {};
export const FORMATIC_API_KEY = "pk_live_9613401E26B091DA";
export const METAMASK_RECEIVER_ACCOUNT =
  "0xd8b717F6f1506526f1A037AfE4052A0dBec54D79";
