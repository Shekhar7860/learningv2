import React from "react";
import "./CollectionCard.css";
import Badge from "../../assets/svg/verified_badge.svg";
import { useHistory } from "react-router";
import { audioUrl } from "../../constants/constants";
import ReactPlayer from "react-player";
const CollectionCard = ({ card }) => {
  const history = useHistory();

  const goToSellPage = () => {
    history.push({
      pathname: `token/${card.tokenId}`,
      state: card,
    });
    // history.push({
    //   pathname: "/my-items",
    //   state: "user",
    // });
  };

  return (
    <div className="collection-item">
      <div className="collection-cover" onClick={goToSellPage}>
        {card.fileType != undefined ? (
          card.fileType.type == "video" ? (
            <video width="100%" height={"220"} controls autoPlay muted>
              <source src={card.url} type={card.fileType.fileType} />
            </video>
          ) : card.fileType.type == "audio" ? (
            <>
              <audio controls>
                <source src={card.url} type={card.fileType.fileType} />
              </audio>
              <img
                className="collection-cover-image"
                src={audioUrl}
                alt="collectible preview"
              />
            </>
          ) : (
            <img
              className="collection-cover-image"
              src={card.url}
              alt="collection card cover"
            />
          )
        ) : card.image == false ? (
          <ReactPlayer
            style={{ background: "black" }}
            playing
            controls
            loop
            playsinline
            url={card && card.cover}
          />
        ) : (
          <img
            className="collection-cover-image"
            src={card.url}
            alt="collection card cover"
          />
        )}

        <div className="collection-mask"></div>
        <div className="collection-seller-box">
          <div className="collection-seller-context"></div>
          <div className="collection-content">
            <h2>{card.name}</h2>
            <h3>{card.sub}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollectionCard;
