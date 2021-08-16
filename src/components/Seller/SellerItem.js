import React, { useEffect, useState } from "react";
import "./SellerItem.css";
import Badge from "../../assets/svg/verified_badge.svg";
import SellerLoader from "../ContentLoaders/SellerLoader";
import { useHistory } from "react-router";

const SellerItem = ({ item }) => {
  const [loading, setLoading] = useState(true);
  const history = useHistory();

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  const goToProfilePage = (item) => {
    history.push({
      pathname: "/my-items",
      state: item,
    });
  };

  return (
    <div className="seller-item" onClick={() => goToProfilePage(item)}>
      {loading ? (
        <SellerLoader />
      ) : (
        <div className="seller-item-container">
          <p className="seller-item-number">{item.count}</p>
          <div className="seller-item-content">
            <h3>{item.name}</h3>
            <p>{item.ether} SNFT</p>
          </div>
          <div className="seller-item-image">
            <img
              className="seller-avatar"
              src={item.urlImage}
              alt={item.name}
            />
            <img className="seller-badge" src={Badge} alt="verified badge" />
          </div>
        </div>
      )}
    </div>
  );
};

export default SellerItem;
