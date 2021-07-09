import { HeartOutlined, MoreOutlined } from "@ant-design/icons";
import { Tooltip, Avatar, Menu, Dropdown } from "antd";
import React, { useState } from "react";
import { useHistory } from "react-router";
import DialogFun from "../../functions/DialogFun";
import BidDialog from "../Dialogs/BidDialog";
import PurchaseDialog from "../Dialogs/PurchaseDialog";
import ReportDialog from "../Dialogs/ReportDialog";
import ShareDialog from "../Dialogs/ShareDialog";
import ThanksDialog from "../Dialogs/ThanksDialog";
import ReactPlayer from "react-player";
import VideoThumbnail from "react-video-thumbnail";

import "./CollectibleCard.css";
import { VideocamOutlined } from "@material-ui/icons";

const menu = (
  togglePurchaseDialog,
  toggleShareDialog,
  toggleBidDialog,
  toggleReportDialog
) => (
  <Menu onClick={() => {}}>
    <Menu.Item key="0" onClick={togglePurchaseDialog}>
      Purchase now
    </Menu.Item>
    <Menu.Item key="1" onClick={toggleBidDialog}>
      Place a bid
    </Menu.Item>
    {/* <Menu.Item key="2">
      <a target="__blank" href="https://www.opensea.io">
        View on OpenSea
      </a>
    </Menu.Item> */}
    <Menu.Item key="3" onClick={toggleShareDialog}>
      Share
    </Menu.Item>
    <Menu.Item key="4" onClick={toggleReportDialog}>
      Report
    </Menu.Item>
  </Menu>
);

const CollectibleCard = ({ card }) => {
  const history = useHistory();
  const {
    togglePurchaseDialog,
    purchaseDialog,
    toggleBidDialog,
    bidDialog,
    shareDialog,
    toggleShareDialog,
    toggleReportDialog,
    reportDialog,
    thanksDialog,
    toggleThanksDialog,
  } = DialogFun();

  const goToSellPage = (card) => {
    history.push({
      pathname: "/token/tokenId",
      state: card,
    });
  };

  const makeVisible = (e) => {
    // const img = e.target.children;
    // if(!autoPlay) {
    //   if(img.length !== 0) {
    //     img[0].style.visibility = "visible"
    //   }
    // }
  };
  const makeInvisible = (e) => {
    // const img = e.target;
    // if(!autoPlay) {
    //   img.style.visibility = "hidden"
    // }
  };

  const [thumb, setThumb] = useState("");

  return (
    <div className="collectible-item">
      <div
        onMouseLeave={makeInvisible}
        onMouseOver={makeVisible}
        id="my-preview"
        className="collectible-preview"
        onClick={() => goToSellPage(card)}
      >
        {card.image ? (
          <img
            className="collectible-img"
            src={card.url}
            alt="collectible preview"
          />
        ) : (
          <div>
            <VideoThumbnail
              videoUrl={card.url}
              cors
              thumbnailHandler={(thumbnail) => setThumb(thumbnail)}
              width={1}
              height={1}
            />
            <VideocamOutlined className="video-preview-svg" />
            <ReactPlayer
              width="100%"
              height="100%"
              light={thumb}
              url={card.url}
            />
          </div>
        )}
      </div>
      <div className="collectible-main-content">
        <div className="collectible-footer">
          <div className="collectible-content">
            <h2 onClick={() => goToSellPage(card)}>VIBE Zone 2.0</h2>
            <h3>
              Auction <span>1 of 1</span>
            </h3>
            <p>
              Bid <span>3.4 SNFT</span>
            </p>
          </div>
          <div className="collectible-more-icon">
            <Dropdown
              onClick={() => {}}
              overlay={menu(
                togglePurchaseDialog,
                toggleShareDialog,
                toggleBidDialog,
                toggleReportDialog
              )}
              trigger={["click"]}
              placement="bottomCenter"
            >
              <MoreOutlined />
            </Dropdown>
          </div>
        </div>
        <div className="collectible-item-header">
          <div className="collectible-item-heart">
            <HeartOutlined />
            <p>107</p>{" "}
          </div>
          <Avatar.Group>
            <Tooltip title="Collection: Learnings" placement="top">
              <Avatar
                src="https://www.sk-ii.com/content/assets/images/article/4-tips-how-to-use-a-face-mask/face-2.png"
                alt="collectible avatar"
              />
            </Tooltip>
            <Tooltip title="Owner: ryan_renold" placement="top">
              <Avatar
                src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                alt="collectible avatar"
              />
            </Tooltip>
            <Tooltip title="Creator: SuperTrip64" placement="top">
              <Avatar
                src="https://www.eaclinic.co.uk/wp-content/uploads/2019/01/woman-face-eyes-1000x1000.jpg"
                alt="collectible avatar"
              />
            </Tooltip>
          </Avatar.Group>
        </div>
      </div>
      <PurchaseDialog
        modalVisible={purchaseDialog}
        toggleDialog={togglePurchaseDialog}
      />
      <BidDialog
        check={true}
        modalVisible={bidDialog}
        toggleDialog={toggleBidDialog}
      />
      <ShareDialog
        modalVisible={shareDialog}
        toggleDialog={toggleShareDialog}
      />
      <ReportDialog
        modalVisible={reportDialog}
        toggleDialog={toggleReportDialog}
        toggleThanksDialog={toggleThanksDialog}
      />
      <ThanksDialog
        modalVisible={thanksDialog}
        toggleDialog={toggleThanksDialog}
      />
      {card.multiple && <div className="collectible-multi-cards1"></div>}
      {card.multiple && <div className="collectible-multi-cards2"></div>}
    </div>
  );
};

export default CollectibleCard;
