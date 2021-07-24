import React from "react";
import "./ActivityCard.css";
import ActivityMsgFun from "../../functions/ActivityMsgFun";

const ActivityCard = ({ card }) => {
  const { msg, logo } = ActivityMsgFun(card);
  const onError = () => {
    console.log("error");
  };
  return (
    <div className="activity-card">
      <div className="activity-box">
        <img
          className="box-preview"
          src={card.preview}
          alt={card.title}
          onError={(e) => {
            e.target.src =
              "https://lh3.googleusercontent.com/dmO_RPpAXzTsGRpl26V9rg-jRNVO_P3dBTdQLT_M8mlTFcGUquJSjObMGp0RExuH71Z6ecVUs1xZya72I4Cr6AAK=s250";
          }}
        />

        <div className="activity-content">
          <h2>{card.userId}</h2>
          {msg}
          <p>{card.time} hours ago</p>
        </div>
      </div>
      {logo}
    </div>
  );
};

export default ActivityCard;
