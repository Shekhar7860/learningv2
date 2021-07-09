import React from "react";
import "./Dialog.css";
import { Modal } from "antd";

import {
  EmailShareButton,
  EmailIcon,
  FacebookShareButton,
  FacebookIcon,
  PinterestShareButton,
  PinterestIcon,
  TelegramShareButton,
  TelegramIcon,
  TwitterShareButton,
  TwitterIcon,
} from "react-share";

const ShareDialog = ({ modalVisible, toggleDialog }) => {
  return (
    <Modal
      title="Share this NFT"
      maskStyle={{ background: "rgba(0, 0, 0, .7)" }}
      style={{ top: 200 }}
      width={window.screen.width > 500 ? "25vw": "90vw"}
      visible={modalVisible}
      onOk={toggleDialog}
      onCancel={toggleDialog}
      footer={[]}
    >
      <div className="share-dialog">
        <TwitterShareButton
          url={`http://snft.com/post/`}
          title={`Sharing this NFT from socialNFT`}
          hashtag="SNFT"
        >
          <TwitterIcon round size={48} />
        </TwitterShareButton>
        <FacebookShareButton
          url={`http://snft.com/post/`}
          quote={`Sharing this NFT from socialNFT`}
          hashtag="SNFT"
        >
          <FacebookIcon round size={48} />
        </FacebookShareButton>
        <TelegramShareButton
          url={`http://snft.com/post/`}
          title={`Sharing this NFT from socialNFT`}
        >
          <TelegramIcon round size={48} />
        </TelegramShareButton>
        <EmailShareButton>
          <EmailIcon round size={48}
          url={`http://snft.com/post/`}
          subject={`Sharing this NFT from socialNFT`}
           />
        </EmailShareButton>
        <PinterestShareButton
          url={`http://snft.com/post/`}
          description={`Sharing this NFT from socialNFT`}
          media="http://snft.com/posturl"
        >
          <PinterestIcon round size={48} />
        </PinterestShareButton>
      </div>
    </Modal>
  );
};

export default ShareDialog;
