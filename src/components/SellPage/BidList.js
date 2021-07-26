import React, { useEffect } from "react";
import SellFun from "../../functions/SellFun";
import OwnerItem from "./Item/OwnerItem";
import { auctionContract } from "../../contractDetails/auction";
import { web3 } from "../../constants/constants";
const BidList = () => {
  useEffect(() => {
    getAuctions();
  }, []);

  const getAuctions = async () => {
    const auction = await auctionContract();
    const accounts = await web3.eth.getAccounts();
    await auction.methods
      .getBidOfAuctions(7)
      .call({ from: accounts[0] })
      .then(async (data) => {
        data.map(async (x) => {
          console.log(x, "x");
        });
        console.log(data, "data map");
      });
  };
  const { bidsList } = SellFun();

  return (
    <div>
      {bidsList.map((info, index) => (
        <OwnerItem item={info} key={info.profile + index} />
      ))}
    </div>
  );
};

export default BidList;
