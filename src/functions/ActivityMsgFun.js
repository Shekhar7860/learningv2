import React, { useEffect, useState } from "react";
import ListingIcon from "../assets/svg/listing.svg";
import PurchIcon from "../assets/svg/ethereum.svg";
import SaleIcon from "../assets/svg/flash.svg";
import TransferIcon from "../assets/svg/transfer.svg";
import BurnIcon from "../assets/svg/burn.svg";
import BidIcon from "../assets/svg/auction.svg";
import LikeIcon from "../assets/svg/heart.svg";
import FollowIcon from "../assets/svg/followers.svg";

const ActivityMsgFun = (card) => {
  const [msg, setMsg] = useState("");
  const [logo, setLogo] = useState("");

  useEffect(() => {
    switch (card.category) {
      case "LISTING":
        setMsg(
          <h3>
            listed by{" "}
            <div className="activity-creator">
              <img
                src={card.userThumb}
                alt={card.userId}
              />
              <span>{card.userId}</span>{" "}
            </div>{" "}
            for <span>{card.eth} SNFT</span> each
          </h3>
        );
        setLogo(
          <img
          className="activity-icon"
          src={ListingIcon}
          alt="activity representation"
        />
        )
        break;
        case "PURCHASE":
            setMsg(
                <h3>
                  purchased by{" "}
                  <div className="activity-creator">
                    <img
                      src={card.userThumb}
                      alt={card.userId}
                    />
                    <span>{card.userId}</span>{" "}
                  </div>{" "}
                  for <span>{card.eth} SNFT</span> from
                  {" "}
                  <div className="activity-creator">
                    <img
                      src={card.fromThum}
                      alt={card.from}
                    />
                    <span>{card.from}</span>{" "}
                  </div>
                </h3>
              );
              setLogo(
                <img
                className="activity-icon"
                src={PurchIcon}
                alt="activity representation"
              />
              )
            break;
        case "SALE":
            setMsg(
                <h3>
                  purchased by{" "}
                  <div className="activity-creator">
                    <img
                      src={card.userThumb}
                      alt={card.userId}
                    />
                    <span>{card.userId}</span>{" "}
                  </div>{" "}
                  for <span>{card.eth} SNFT</span> from
                  {" "}
                  <div className="activity-creator">
                    <img
                      src={card.fromThum}
                      alt={card.from}
                    />
                    <span>{card.from}</span>{" "}
                  </div>
                </h3>
              );
              setLogo(
                <img
                className="activity-icon"
                src={SaleIcon}
                alt="activity representation"
              />
              )
            break;
        case "TRANSFER":
            setMsg(
                <h3>
                  transfered from{" "}
                  <div className="activity-creator">
                    <img
                      src={card.userThumb}
                      alt={card.userId}
                    />
                    <span>{card.userId}</span>{" "}
                  </div>{" "}
                    to
                  {" "}
                  <div className="activity-creator">
                    <img
                      src={card.toThumb}
                      alt={card.to}
                    />
                    <span>{card.to}</span>{" "}
                  </div>
                </h3>
              );
              setLogo(
                <img
                className="activity-icon"
                src={TransferIcon}
                alt="activity representation"
              />
              )
            break;
        case "BURN":
            setMsg(
                <h3>
                  5 editions burned by{" "}
                  <div className="activity-creator">
                    <img
                      src={card.userThumb}
                      alt={card.userId}
                    />
                    <span>{card.userId}</span>{" "}
                  </div>
                </h3>
              );
              setLogo(
                <img
                className="activity-icon"
                src={BurnIcon}
                alt="activity representation"
              />
              )
            break;
        case "BID":
            setMsg(
                <h3>
                  <div className="activity-creator">
                    <img
                      src={card.userThumb}
                      alt={card.userId}
                    />
                    <span>{card.userId}</span>{" "}
                  </div>{" "}
                  offered <span>{card.eth} SNFT</span>
                </h3>
              );
              setLogo(
                <img
                className="activity-icon"
                src={BidIcon}
                alt="activity representation"
              />
              )
            break;
        case "LIKE":
            setMsg(
                <h3>
                  liked by{" "}
                  <div className="activity-creator">
                    <img
                      src={card.userThumb}
                      alt={card.userId}
                    />
                    <span>{card.userId}</span>{" "}
                  </div>
                </h3>
              );
              setLogo(
                <img
                className="activity-icon"
                src={LikeIcon}
                alt="activity representation"
              />
              )
            break;
        case "FOLLOWING":
            setMsg(
                <h3>
                  started following{" "}
                  <div className="activity-creator">
                    <img
                      src={card.userThumb}
                      alt={card.userId}
                    />
                    <span>{card.userId}</span>{" "}
                  </div>
                </h3>
              );
              setLogo(
                <img
                className="activity-icon"
                src={FollowIcon}
                alt="activity representation"
              />
              )
            break
      default:
        setMsg("");
    }
  }, [card]);

  return { msg, logo };
};

export default ActivityMsgFun;
