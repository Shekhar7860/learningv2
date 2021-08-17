import React, { useEffect, useState } from "react";
import SellFun from "../../functions/SellFun";
import "./SellStyle.css";
import OwnerItem from "./Item/OwnerItem";
import { auctionContract } from "../../contractDetails/auction";
import { web3 } from "../../constants/constants";
import { connect } from "react-redux";
import { postContract } from "../../contractDetails/item";
import { postCollectible } from "../../contractDetails/erc1155";
const BidList = ({ biddingData, callBack, productData, data }) => {
  const [bidsList, setBidsList] = useState([]);

  useEffect(() => {
    getAuctions();
  }, []);

  const getAuctions = async () => {
    const auction = await auctionContract();
    let list = [...bidsList];
    let highestBid = [];
    let highest = 0;
    if (biddingData.tokenId) {
      await auction.methods
        .getBidOfAuctions(biddingData.tokenId)
        .call({ from: data.user.data.account })
        .then(async (data) => {
          data.map(async (x) => {
            list.push({
              profile:
                "https://i2-prod.mirror.co.uk/incoming/article14334083.ece/ALTERNATES/s615/3_Beautiful-girl-with-a-gentle-smile.jpg",
              tag: `${web3.utils.fromWei(x.amount, "ether")} WETH`,
              sub: `by ${x.from}`,
              owner: x.from,
            });
          });
          highest = Math.max.apply(
            Math,
            data.map(function (o) {
              return o.amount;
            })
          );
          highestBid = data.filter(function (obj) {
            return obj.amount == highest;
          });
        });
    }
    setBidsList(list);
    callBack(highestBid);
  };

  const sellNFT = async () => {
    const auction = await auctionContract();
    const productsContract = await postContract();
    const erc1155 = await postCollectible();
    var today = new Date();
    today.setHours(today.getHours() + 1);
    var selectedTime = today.getTime() / 1000;
    await auction.methods
      .finalizeAuction(biddingData.tokenId, selectedTime.toFixed(0))
      .send({ from: data.user.data.account })
      .then(async (res) => {
        var fromAddress = res.events.AuctionFinalized.returnValues.from;
        var token = res.events.AuctionFinalized.returnValues.productId;
        if (biddingData.tokenType == "multiple") {
          await erc1155.methods
            .transferToken(data.user.data.account, fromAddress, token, 2)
            .send({ from: data.user.data.account })
            .then(async (result) => {});
        } else {
          await productsContract.methods
            .transferToken(data.user.data.account, fromAddress, token)
            .send({ from: data.user.data.account })
            .then(async (result) => {});
        }
      });
  };
  return (
    <>
      {bidsList.length > 0 ? (
        bidsList.map((info, index) => (
          <OwnerItem
            item={info}
            key={info.profile + index}
            page={"bid-list"}
            owner={productData.owner}
            onClick={sellNFT}
          />
        ))
      ) : (
        <div className="noBid">No Bid Found</div>
      )}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    data: state,
  };
};

export default connect(mapStateToProps, null)(BidList);
