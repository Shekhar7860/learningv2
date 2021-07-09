import { Avatar } from "antd";
import React from "react";
import "./OwnerItem.css";

const OwnerItem = ({ item }) => {
  const { profile, tag, sub } = item;

  return (
    <div className="owner-item">
      <div className="owner-content">
        <Avatar size="large" src={profile} alt={profile} />
        <div className="owner-info">
          <p>{tag}</p>
          <h5>{sub}</h5>
        </div>
      </div>
      {tag === "Creator" && <button>10% of sales will go to creator</button>}
    </div>
  );
};

export default OwnerItem;
