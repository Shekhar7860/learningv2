import React from "react";
import "./UserItem.css";

const UserItem = ({card}) => {
  return (
    <div className="search-user-item">
      <img
        src={card.url}
        alt={card.name}
      />
      <div className="search-user-item-info">
        <h4>{card.name}</h4>
        <p>{card.followers} followers</p>
      </div>
    </div>
  );
};

export default UserItem;
