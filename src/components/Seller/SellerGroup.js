import React from "react";
import "./SellerGroup.css";
import SellerItem from "./SellerItem";

const SellerGroup = ({ cards }) => {
  return (
    <div className="seller-group">
      {cards.map((item) => (
        <SellerItem item={item} key={item.count + item.name} />
      ))}
    </div>
  );
};

export default SellerGroup;
