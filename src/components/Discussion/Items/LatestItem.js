import { Avatar } from "antd";
import React from "react";
import "./LatestItem.css";

const LatestItem = ({ item }) => {
  const { topic, count, replies, views, activity, community } = item;
  return (
    <div className="latest-item">
      <div className="latest-item-text">
        <h3>{topic}</h3>
        <p>{community}</p>
      </div>
      <div className="latest-item-context">
        <div className="latest-item-profile">
          {count.map((profile, index) => (
            <Avatar size="small" src={profile.img} key={profile.img + index} />
          ))}
        </div>
        <h4>{replies}</h4>
        <h4>{views}</h4>
        <h4>{activity}</h4>
      </div>
    </div>
  );
};

export default LatestItem;
