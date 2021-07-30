import { Avatar } from "antd";
import React from "react";
import "./OwnerItem.css";
import { connect } from "react-redux";
const OwnerItem = ({ item, page, data, owner, onClick }) => {
  const { profile, tag, sub } = item;
  const isOwner = () => {
    let d = false;
    if (owner == data.user.data.account) {
      d = true;
    }
    return d;
  };
  return (
    <div className="owner-item">
      <Avatar size="large" src={profile} alt={profile} />
      <div className="owner-content">
        <div className="owner-info">
          <p>{tag}</p>
          <h5>{sub}</h5>
        </div>
        {page == "bid-list" ? (
          isOwner() == true ? (
            <button className="sell-button" onClick={onClick}>
              Sell
            </button>
          ) : null
        ) : null}
      </div>
      {tag === "Creator" && <span>10% of sales will go to creator</span>}
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    data: state,
  };
};

export default connect(mapStateToProps, null)(OwnerItem);
