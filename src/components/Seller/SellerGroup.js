import React from "react";
import "./SellerGroup.css";
import SellerItem from "./SellerItem";

const SellerGroup = ({ cards }) => {
  return (
    <div className="seller-group">
      <SellerItem item={cards} />
    </div>
  );
};

export default SellerGroup;
