import React from "react";
import "./CollectionItem.css";

const CollectionItem = ({card}) => {
  return (
    <div className="search-collection-item">
      <img
        src={card.url}
        alt={card.name}
      />
      <div className="search-collection-item-info">
        <h4>{card.name}</h4>
        <p>{card.sub}</p>
      </div>
    </div>
  );
};

export default CollectionItem;
