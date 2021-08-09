import React, { useState } from "react";
import "./FollowCard.css";

const FollowCard = () => {
  const [buttonTag, setButtonTag] = useState("Follow");

  const changeStatus = () => {
    if (buttonTag == "Follow") {
      setButtonTag("UnFollow");
    } else {
      setButtonTag("Follow");
    }
  };
  return (
    <div className="follow-card">
      <div className="follow-context">
        <img
          src="https://images.rarible.com/?fit=outsize&n=-1&url=https%3A%2F%2Fipfs.rarible.com%2Fipfs%2FQmdSCpJb9MEjtMVVT93ahkX2mo4XR9mGmaWqzS5A6NTbWj&w=100"
          alt="following follower"
        />
        <div className="follow-content">
          <h2>Juliac</h2>
          <p>434 followers</p>
        </div>
      </div>
      <button onClick={changeStatus}>{buttonTag}</button>
    </div>
  );
};

export default FollowCard;
