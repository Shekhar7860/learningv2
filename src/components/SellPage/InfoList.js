import React from "react";
import SellFun from "../../functions/SellFun";
import OwnerItem from "./Item/OwnerItem";

const InfoList = ({ biddingData }) => {
  const { infoList } = SellFun();

  return (
    <div>
      <OwnerItem
        item={
          biddingData != null
            ? biddingData
            : { name: "", multiple: false, sub: "" }
        }
        page={"info"}
      />
    </div>
  );
};

export default InfoList;
