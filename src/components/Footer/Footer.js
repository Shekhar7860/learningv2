import React from "react";
import "./Footer.css";
import {
  InstagramFilled,
  TwitterOutlined,
  YoutubeFilled,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import PinterestIcon from "@material-ui/icons/Pinterest";

const Footer = () => {

  function openPageLink(url) {
    window.open(url);
  }

  return (
    <div className="footer-container">
      <div className="footer-subscribe">
        <h3>Get the latest SNFT updates</h3>
        <div className="footer-input-box">
          <input placeholder="Email address" />
          <button>Subscribe</button>
        </div>
      </div>
      <div className="footer-grid-container">
        <div className="footer-item">
          <h2>SNFT</h2>
          <p>
            © Social NFT, Inc.<br></br> All rights reserved since 2021
          </p>
        </div>
        <div className="footer-item">
          <h2>SNFT</h2>
          <div>
            <p>Explore</p>
            <p>How it works</p>
            <p>Create</p>
            <Link to="/support"><p>Support</p></Link>
          </div>
        </div>
        <div className="footer-item">
          <h2>Community</h2>
          <div>
            <p>SNFT Token</p>
            <p>Discussion</p>
            <p>Voting</p>
            <p>Suggest feature</p>
          </div>
        </div>
        <div className="footer-item">
          <h2>Further Information</h2>
          <div>
            <p>Terms & Conditions</p>
            <p>Privacy Policy</p>
          </div>
        </div>
        <div className="footer-item footer-last-item">
          <h2>Follow us</h2>
          <div className="footer-social-icons">
          <TwitterOutlined
        onClick={() => openPageLink("https://twitter.com/NftSocial")}
      />
      <InstagramFilled
        onClick={() =>
          openPageLink("https://www.instagram.com/social.nft.marketplace/")
        }
      />
      <YoutubeFilled
        onClick={() =>
          openPageLink("https://www.pinterest.ca/SocialNFTmarketplace/_saved/")
        }
      />
      <PinterestIcon
        onClick={() =>
          openPageLink("https://www.pinterest.ca/SocialNFTmarketplace/_saved/")
        }
      />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
