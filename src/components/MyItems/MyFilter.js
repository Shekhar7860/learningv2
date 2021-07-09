import React from "react";
import "./MyFilter.css";
import ListingIcon from "../../assets/svg/listing.svg";
import PurchIcon from "../../assets/svg/ethereum.svg";
import SaleIcon from "../../assets/svg/flash.svg";
import TransferIcon from "../../assets/svg/transfer.svg";
import BurnIcon from "../../assets/svg/fire.svg";
import BidIcon from "../../assets/svg/auction.svg";
import LikeIcon from "../../assets/svg/heart.svg";
import FollowIcon from "../../assets/svg/followers.svg";

const MyFilter = () => {
  const listing = () => {
    document.getElementById("listing-btn").classList.toggle("listing-btn-back");
  };
  const purchase = () => {
    document
      .getElementById("purchase-btn")
      .classList.toggle("purchase-btn-back");
  };
  const sale = () => {
    document
      .getElementById("sale-btn")
      .classList.toggle("sale-btn-back");
  };
  const transfer = () => {
    document
      .getElementById("transfer-btn")
      .classList.toggle("transfer-btn-back");
  };
  const burn = () => {
    document
      .getElementById("burn-btn")
      .classList.toggle("burn-btn-back");
  };
  const bid = () => {
    document
      .getElementById("bid-btn")
      .classList.toggle("bid-btn-back");
  };
  const like = () => {
    document
      .getElementById("like-btn")
      .classList.toggle("like-btn-back");
  };
  const follow = () => {
    document
      .getElementById("follow-btn")
      .classList.toggle("follow-btn-back");
  };

  return (
    <div className="my-filter">
      <h1>Filters</h1>
      <div className="my-filter-buttons">
        <button id="listing-btn" onClick={listing}>
          <img src={ListingIcon} alt="listing icon" />
          Listing
        </button>
        <button id="purchase-btn" onClick={purchase}>
          <img src={PurchIcon} alt="purchase icon" />
          Purchases
        </button>
        <button id="sale-btn" onClick={sale}>
          <img src={SaleIcon} alt="sales icon" />
          Sales
        </button>
        <button id="transfer-btn" onClick={transfer}>
          <img src={TransferIcon} alt="transfer icon" />
          Transfers
        </button>
        <button id="burn-btn" onClick={burn}>
          <img src={BurnIcon} alt="burns icon" />
          Burns
        </button>
        <button id="bid-btn" onClick={bid}>
          <img src={BidIcon} alt="bid icon" />
          Bids
        </button>
        <button id="like-btn" onClick={like}>
          <img src={LikeIcon} alt="like icon" />
          Likes
        </button>
        <button id="follow-btn" onClick={follow}>
          <img src={FollowIcon} alt="following icon" />
          Followings
        </button>
      </div>
    </div>
  );
};

export default MyFilter;
