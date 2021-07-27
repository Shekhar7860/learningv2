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
              "data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSc0MCcgaGVpZ2h0PSc0MCcgc3R5bGU9J2JhY2tncm91bmQtY29sb3I6cmdiYSgyNDYsMjQ2LDI0NiwxKTsnPjxnIHN0eWxlPSdmaWxsOnJnYmEoMzgsMjE3LDE2OSwxKTsgc3Ryb2tlOnJnYmEoMzgsMjE3LDE2OSwxKTsgc3Ryb2tlLXdpZHRoOjAuMjsnPjxyZWN0ICB4PScxOCcgeT0nMTInIHdpZHRoPSczJyBoZWlnaHQ9JzMnLz48cmVjdCAgeD0nMTgnIHk9JzE1JyB3aWR0aD0nMycgaGVpZ2h0PSczJy8+PHJlY3QgIHg9JzE4JyB5PScyNCcgd2lkdGg9JzMnIGhlaWdodD0nMycvPjxyZWN0ICB4PScxNScgeT0nMTInIHdpZHRoPSczJyBoZWlnaHQ9JzMnLz48cmVjdCAgeD0nMjEnIHk9JzEyJyB3aWR0aD0nMycgaGVpZ2h0PSczJy8+PHJlY3QgIHg9JzE1JyB5PScxOCcgd2lkdGg9JzMnIGhlaWdodD0nMycvPjxyZWN0ICB4PScyMScgeT0nMTgnIHdpZHRoPSczJyBoZWlnaHQ9JzMnLz48cmVjdCAgeD0nMTUnIHk9JzI0JyB3aWR0aD0nMycgaGVpZ2h0PSczJy8+PHJlY3QgIHg9JzIxJyB5PScyNCcgd2lkdGg9JzMnIGhlaWdodD0nMycvPjxyZWN0ICB4PScxMicgeT0nMTUnIHdpZHRoPSczJyBoZWlnaHQ9JzMnLz48cmVjdCAgeD0nMjQnIHk9JzE1JyB3aWR0aD0nMycgaGVpZ2h0PSczJy8+PC9nPjwvc3ZnPg==",
            tag: `${web3.utils.fromWei(x.amount, "ether")} WETH`,
            sub: `by ${x.from}`,
          });
        });
        // console.log(data, "data map");
      });
    setBidsList(list);
  };
  // const { bidsList } = SellFun();

  return (
    <div>
      {bidsList.map((info, index) => (
        <OwnerItem item={info} key={info.profile + index} />
      ))}
    </div>
  );
};

export default BidList;
