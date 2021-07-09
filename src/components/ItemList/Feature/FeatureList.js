import React from "react";
import FeatureListFun from "../../../functions/FeatureListFun";
import FeatureCard from "../../Cards/FeatureCard";
import "./FeatureList.css";

const FeatureList = () => {
  const { items } = FeatureListFun();

  return (
    <div className="feature-list">
      <div className="feature-item-list">
        {items.map((card, index) => (
          <FeatureCard card={card} key={index + card.title} />
        ))}
      </div>
    </div>
  );
};

export default FeatureList;
