import React from "react";
import ActivityListFun from "../../../functions/ActivityListFun";
import ActivityCard from "../../Cards/ActivityCard";
import "./ActivityList.css";

const ActivityList = () => {
  const { list } = ActivityListFun();

  return (
    <div className="activity-list">
      <div className="activity-item-list">
        {list.map((item, index) => (
          <ActivityCard card={item} key={index + item.title} />
        ))}
      </div>
    </div>
  );
};

export default ActivityList;
