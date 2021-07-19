import { Avatar } from "antd";
import React, { useState } from "react";
import BlankImage from "../../assets/svg/blank_card.svg";
import ReactPlayer from "react-player";
import "./CollectibleCard.css";

const PreviewCard = ({
  image,
  eth,
  title,
  sale,
  price,
  unlock,
  name,
  fileType,
}) => {
  return (
    <div className="collectible-item">
      <div className="collectible-preview">
        {fileType != undefined ? (
          fileType.type == "video" ? (
            <ReactPlayer width="100%" height="100%" light={""} url={image} />
          ) : (
            <img
              className="preview-image"
              src={image !== "" ? image : BlankImage}
              alt="preview"
            />
          )
        ) : null}
      </div>
      <div className="collectible-main-content">
        <div className="collectible-item-header">
          <Avatar.Group>
            <Avatar style={{ color: "#597ef7", backgroundColor: "#d6e4ff" }}>
              O
            </Avatar>
            <Avatar style={{ color: "#f56a00", backgroundColor: "#fde3cf" }}>
              C
            </Avatar>
            <Avatar
              src="https://www.eaclinic.co.uk/wp-content/uploads/2019/01/woman-face-eyes-1000x1000.jpg"
              alt="collectible avatar"
            />
          </Avatar.Group>
        </div>
        <div className="collectible-footer">
          <div className="collectible-content">
            <h3 className="name-text">{name}</h3>
            <h3>
              {sale ? "Auction" : "Not for sale"} <span> 1 of 1</span>
            </h3>
            <p>
              No bids yet <span></span>
            </p>
          </div>
        </div>
      </div>
      {/* {card.multiple && <div className="collectible-multi-cards1"></div>}
      {card.multiple && <div className="collectible-multi-cards2"></div>} */}
    </div>
  );
};

export default PreviewCard;
