import React, { Component } from "react";
import "./TokenPage.css";
import TokenLogo from "../../assets/png/snft.png";
import { QuestionOutlined } from "@ant-design/icons";

class TokenPage extends Component {
  render() {
    return (
      <div className="token-container">
        <div className="token-header">
          <div className="token-header-content">
            <img src={TokenLogo} alt="token logo" />
            <h1>Meet SNFT – Governance Token</h1>
            <p>
              We think that the best way to align platform development with
              customers' interests is to empower the ones who actively interact
              with protocol: creators and collectors
            </p>
            <button onClick={() => {window.open("https://www.medium.com")}}>Learn more about SNFT token</button>
          </div>
        </div>
        <div className="token-box">
          <div>
            <p>Your balance</p>
            <h2>0 SNFT</h2>
          </div>
          <div>
            <p>Available for claim</p>
            <h2>0 SNFT</h2>
          </div>
          <div className="token-box-action">
            <button>Nothing to claim</button>
            <QuestionOutlined />
          </div>
        </div>
        <div className="token-eligible">
          <h1>Who is eligible to participate in the airdrop?</h1>
          <div className="token-eligible-context">
            <div className="token-eligible-card">
              <div className="token-eligible-card-header">
                <h1>1</h1>
                <div>
                  <h3>Existing Social NFT users</h3>
                  <p>15/07/2020</p>
                </div>
              </div>
              <p>
                Active users will receive 2% of the total RARI supply according
                to the Liquidity Mining principle: based on the previous volume
                on Social NFT marketplace. Both buyers and sellers will receive
                50%.
              </p>
            </div>
            <div className="token-eligible-card">
              <div className="token-eligible-card-header">
                <h1>2</h1>
                <div>
                  <h3>Documented NFT holders/buyers</h3>
                  <p>15/07/2020</p>
                </div>
              </div>
              <p>
                In this stage, 4% will be distributed amoung Ethereum addresses
                of all NFTs with documented sales on Dune Analytics.
              </p>
            </div>
            <div className="token-eligible-card">
              <div className="token-eligible-card-header">
                <h1>3</h1>
                <div>
                  <h3>Remaining NFT owners</h3>
                  <p>15/07/2020</p>
                </div>
              </div>
              <p>
                As we believe that Dune Analytics might not hold all the data,
                we introduced the third stage for corrections. If you haven’t
                found yourself on the list, but you know you have significant
                NFT holdings — please reach out to us! The second airdrop wave
                will be announced later.
              </p>
            </div>
          </div>
        </div>
        <div className="token-how-context">
          <h1>How you can get SNFT</h1>
          <p>
            SNFT is not an investment and should be earned by active
            participation on the platform. 75,000 tokens are issued every week,
            with 50% reserved for buyers, and 50% for sellers
          </p>
          <div className="token-how-content">
            <h2>Create and Sell</h2>
            <h2>Collect NFT's</h2>
            <h2>Get airdrop as SNFT user</h2>
            <h2>Get airdrop as NFT holder</h2>
          </div>
        </div>
        <div className="token-how-context">
          <h1>How to use SNFT</h1>
          <div className="token-how-content">
            <h2>Hustle in SNFT DAO</h2>
            <h2>Vote for platform upgrades</h2>
            <h2>Choose featured artworks</h2>
            <h2>Participate in moderation</h2>
          </div>
        </div>
        <button onClick={() => {window.open("https://www.medium.com")}} >Learn more about SNFT token</button>
      </div>
    );
  }
}

export default TokenPage;
