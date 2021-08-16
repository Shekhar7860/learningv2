import Web3 from "web3";
const ethereum = typeof window != undefined ? window.ethereum : {};
export const web3 = typeof window != undefined ? new Web3(window.ethereum) : {};
export const FORMATIC_API_KEY = "pk_live_9613401E26B091DA";
export const METAMASK_RECEIVER_ACCOUNT =
  "0xd8b717F6f1506526f1A037AfE4052A0dBec54D79";
export const initializeWeb3 = async () => {
  if (ethereum !== undefined) {
    await window.ethereum.request({ method: "eth_requestAccounts" });
  } else {
    alert("Please Install Metamask");
  }
};
export const apiUrl = "https://artabia.com:3002/api";
export const serviceFee = 0.004725;
export const audioUrl =
  "https://firebasestorage.googleapis.com/v0/b/testfirebase-ba78c.appspot.com/o/musicplayer.jpeg?alt=media&token=694a4c58-ae4c-4166-a010-3f45cf63146b";
export const pic =
  "https://image.freepik.com/free-photo/young-beautiful-woman-standing-yacht-luxury-travel-boat-cruise-vacation_146377-4040.jpg";
