import React from "react";
import SellFun from "../../functions/SellFun";
import OwnerItem from "./Item/OwnerItem";

const OwnersList = ({ biddingData }) => {
  const { ownerList } = SellFun();

  return (
    <div>
      <OwnerItem item={biddingData} page={"owner"} />
    </div>
  );
};

export default OwnersList;
