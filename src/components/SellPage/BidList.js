import React, { useEffect, useState } from "react";
import SellFun from "../../functions/SellFun";
import OwnerItem from "./Item/OwnerItem";
import { auctionContract } from "../../contractDetails/auction";
import { web3 } from "../../constants/constants";
const BidList = ({ biddingData }) => {
  const [bidsList, setBidsList] = useState([]);
  useEffect(() => {
    getAuctions();
  }, []);

  const getAuctions = async () => {
    const auction = await auctionContract();
    const accounts = await web3.eth.getAccounts();
    let list = [...bidsList];
    await auction.methods
      .getBidOfAuctions(biddingData.tokenId)
      .call({ from: accounts[0] })
      .then(async (data) => {
        data.map(async (x) => {
          list.push({
            profile:
              "https://i2-prod.mirror.co.uk/incoming/article14334083.ece/ALTERNATES/s615/3_Beautiful-girl-with-a-gentle-smile.jpg",
            tag: `${web3.utils.fromWei(x.amount, "ether")} WETH`,
            sub: `by ${x.from}`,
          });
        });
        // console.log(data, "data map");
      });
    setBidsList(list);
  };

  return (
    <div>
      {bidsList.map((info, index) => (
        <OwnerItem item={info} key={info.profile + index} />
      ))}
    </div>
  );
};

export default BidList;
