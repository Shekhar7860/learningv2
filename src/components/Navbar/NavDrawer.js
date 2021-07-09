import {
  InstagramFilled,
  TwitterOutlined,
  YoutubeFilled,
} from "@ant-design/icons";
import { Drawer } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import PinterestIcon from "@material-ui/icons/Pinterest";

const NavDrawer = ({
  showDrawer,
  showMobileDrawer,
  showConnectDialog,
  showCreateDialog,
  showSocialDialog
}) => {
  const showConnect = () => {
    showConnectDialog();
    showMobileDrawer();
  };

  const showCreate = () => {
    // showCreateDialog();
    showSocialDialog();
    showMobileDrawer();
  };

  function openPageLink(url) {
    window.open(url);
  }

  return (
    <div>
      <Drawer
        title="Title"
        placement="top"
        height="90vh"
        closable={true}
        onClose={showMobileDrawer}
        visible={showDrawer}
        key="top"
      >
        <div className="nav-drawer-body">
          <div>
            <div className="nav-drawer-first">
              <Link to="/">
                <h2 onClick={showMobileDrawer}>Explore</h2>
              </Link>
              <Link to="/my-items">
                <h2 onClick={showMobileDrawer}>My items</h2>
              </Link>
              <Link to="/following">
                <h2 onClick={showMobileDrawer}>Following</h2>
              </Link>
              <Link to="/activity">
                <h2 onClick={showMobileDrawer}>Activity</h2>
              </Link>
              <Link to="/how-it-work">
                <h2 onClick={showMobileDrawer}>How it works</h2>
              </Link>
            </div>
            <div className="nav-drawer-second">
              <h2 className="drawer-item-theme">Community</h2>
              <Link to="/token">
                <h2 onClick={showMobileDrawer}>XYZ Token</h2>
              </Link>
              <Link to="/discussion">
                <h2 onClick={showMobileDrawer}>Discussion</h2>
              </Link>
              <a target="__blank" href="https://www.snapshot.org">
                <h2 onClick={showMobileDrawer}>Voting</h2>
              </a>
              <a target="__blank" href="https://www.nolt.io">
                <h2 onClick={showMobileDrawer}>Suggest feature</h2>
              </a>
              <a target="__blank" href="https://www.substack.com">
                <h2 onClick={showMobileDrawer}>Subscribe</h2>
              </a>
            </div>
          </div>
          <div className="nav-drawer-third">
            <div className="drawer-social-box">
              <TwitterOutlined
                onClick={() => openPageLink("https://twitter.com/NftSocial")}
              />
              <InstagramFilled
                onClick={() =>
                  openPageLink(
                    "https://www.instagram.com/social.nft.marketplace/"
                  )
                }
              />
              <YoutubeFilled
                onClick={() =>
                  openPageLink(
                    "https://www.pinterest.ca/SocialNFTmarketplace/_saved/"
                  )
                }
              />
              <PinterestIcon
                onClick={() =>
                  openPageLink(
                    "https://www.pinterest.ca/SocialNFTmarketplace/_saved/"
                  )
                }
              />
            </div>
            <div className="drawer-action-box">
              <button onClick={showCreate} className="create-button">
                Create
              </button>
              <button onClick={showConnect} className="connect-button">
                Connect wallet
              </button>
            </div>
          </div>
        </div>
      </Drawer>
    </div>
  );
};

export default NavDrawer;
