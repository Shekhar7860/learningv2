import React from "react";
import "./ActivityCard.css";
import ActivityMsgFun from "../../functions/ActivityMsgFun";

const ActivityCard = ({card}) => {

  const {msg, logo} = ActivityMsgFun(card)    

  return (
    <div className="activity-card">
      <div className="activity-box">
        <img
          className="box-preview"
          src={card.preview}
          alt={card.title}
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
