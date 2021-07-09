import React from "react";
import "./CollectionCard.css";
import Badge from "../../assets/svg/verified_badge.svg";
import { useHistory } from "react-router";

const CollectionCard = ({ card }) => {
  const history = useHistory();

  const goToProfilePage = () => {
    history.push({
      pathname: "/my-items",
      state: "user",
    });
  };

  return (
    <div className="collection-item">
      <div className="collection-cover">
        <img
          onClick={goToProfilePage}
          className="collection-cover-image"
          src={card.cover}
          alt="collection card cover"
        />
        <div className="collection-mask"></div>
        <div className="collection-seller-box">
          <div className="collection-seller-context">
            <img
              onClick={goToProfilePage}
              className="collection-seller-image"
              src={card.profile}
              alt="collection seller profile"
            />
            <img
              className="collection-badge"
              src={Badge}
              alt="verified badge"
            />
          </div>
          <div className="collection-content">
            <h2 onClick={goToProfilePage}>{card.name}</h2>
            <h3>{card.sub}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollectionCard;
