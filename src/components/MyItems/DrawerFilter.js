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

const DrawerFilter = ({showFilter}) => {
  const listing = () => {
    console.log("clicked")
    document.getElementById("listing-btn-d").classList.toggle("listing-btn-back");
  };
  const purchase = () => {
    document
      .getElementById("purchase-btn-d")
      .classList.toggle("purchase-btn-back");
  };
  const sale = () => {
    document
      .getElementById("sale-btn-d")
      .classList.toggle("sale-btn-back");
  };
  const transfer = () => {
    document
      .getElementById("transfer-btn-d")
      .classList.toggle("transfer-btn-back");
  };
  const burn = () => {
    document
      .getElementById("burn-btn-d")
      .classList.toggle("burn-btn-back");
  };
  const bid = () => {
    document
      .getElementById("bid-btn-d")
      .classList.toggle("bid-btn-back");
  };
  const like = () => {
    document
      .getElementById("like-btn-d")
      .classList.toggle("like-btn-back");
  };
  const follow = () => {
    document
      .getElementById("follow-btn-d")
      .classList.toggle("follow-btn-back");
  };

return (
    <div className="drawer-filter">
      <div className="drawer-filter-buttons">
        <button id="listing-btn-d" onClick={listing}>
          <img src={ListingIcon} alt="listing icon" />
          Listing
        </button>
        <button id="purchase-btn-d" onClick={purchase}>
          <img src={PurchIcon} alt="purchase icon" />
          Purchases
        </button>
        <button id="sale-btn-d" onClick={sale}>
          <img src={SaleIcon} alt="sales icon" />
          Sales
        </button>
        <button id="transfer-btn-d" onClick={transfer}>
          <img src={TransferIcon} alt="transfer icon" />
          Transfers
        </button>
        <button id="burn-btn-d" onClick={burn}>
          <img src={BurnIcon} alt="burns icon" />
          Burns
        </button>
        <button id="bid-btn-d" onClick={bid}>
          <img src={BidIcon} alt="bid icon" />
          Bids
        </button>
        <button id="like-btn-d" onClick={like}>
          <img src={LikeIcon} alt="like icon" />
          Likes
        </button>
        <button id="follow-btn-d" onClick={follow}>
          <img src={FollowIcon} alt="following icon" />
          Followings
        </button>
      </div>
      <button onClick={showFilter} className="show-filter-button">Show</button>
    </div>
  );
};

export default DrawerFilter;
