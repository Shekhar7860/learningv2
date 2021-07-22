import { Modal } from "antd";
import React, { useState } from "react";
import "./ConnectDialog.css";
import Instagram from "../../assets/svg/instagram.svg";
import Twitter from "../../assets/svg/twitter.svg";
import Pinterest from "../../assets/svg/pinterest_social.svg";
import TikTok from "../../assets/svg/tik-tok.svg";
import YouTube from "../../assets/svg/youtube.svg";
import GIF from "../../assets/gifs/check-animation.gif";

const SocialDialog = ({
  modalVisible,
  toggleDialog,
  setSocialLogged,
  toggleCreate,
}) => {
  const [loading, setLoading] = useState(false);

  const connectToSocial = () => {
    setLoading(true);
    setSocialLogged(true);
    setTimeout(() => {
      setLoading(false);
      toggleDialog();
      toggleCreate();
    }, 1500);
  };

  return (
    <div>
      <Modal
        width={window.screen.width > 500 ? "30vw" : "90vw"}
        mask={true}
        style={{ top: 15 }}
        maskStyle={{ background: "rgba(0, 0, 0, .8)" }}
        title="Connect"
        visible={modalVisible}
        onOk={toggleDialog}
        onCancel={toggleDialog}
        footer={[]}
      >
        <div className="connect-dialog">
          {loading ? (
            <div className="social-connect-dialog">
              <img
                className="social-done-gif"
                src={GIF}
                alt="gif social animation"
              />
              <h2>Connected to your account</h2>
              <p>Please wait for a moment</p>
            </div>
          ) : (
            <div className="connect-container">
              <h1>Connect your social account</h1>
              <h3>Login with one of your social media account</h3>
              <div className="connect-item-container">
                <div className="connect-item" onClick={connectToSocial}>
                  <img src={Instagram} alt="instagram" />
                  <h2>Instagram</h2>
                </div>
                <div className="connect-item" onClick={connectToSocial}>
                  <img src={Twitter} alt="twitter" />
                  <h2>Twitter</h2>
                </div>
                <div className="connect-item" onClick={connectToSocial}>
                  <img src={Pinterest} alt="pinterest" />
                  <h2>Pinterest</h2>
                </div>
                <div className="connect-item" onClick={connectToSocial}>
                  <img src={TikTok} alt="tiktok" />
                  <h2>TikTok</h2>
                </div>
                <div className="connect-item" onClick={connectToSocial}>
                  <img src={YouTube} alt="youtube" />
                  <h2>YouTube</h2>
                </div>
              </div>
              <h3>
                We do not share your account details to anyone. We care about
                your privacy
              </h3>
            </div>
          )}
        </div>
      </Modal>
    </div>
  );
};

export default SocialDialog;
