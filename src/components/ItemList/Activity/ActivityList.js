import React, { useEffect } from "react";
import ActivityListFun from "../../../functions/ActivityListFun";
import ActivityCard from "../../Cards/ActivityCard";
import "./ActivityList.css";

const ActivityList = () => {
  const { list } = ActivityListFun();

  return (
    <div className="activity-list" style={{ flex: 1 }}>
      <div className="activity-item-list">
        {list.map((item, index) => (
          <ActivityCard card={item} key={index + item.title} />
        ))}
      </div>
    </div>
  );
};

export default ActivityList;
