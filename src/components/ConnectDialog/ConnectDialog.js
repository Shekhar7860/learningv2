import { Modal } from "antd";
import React from "react";
import Web3 from "web3";
import "./ConnectDialog.css";
import { connect } from "react-redux";
import { setLoggedIn } from "./../../redux/actions/user";
const ethereum = typeof window != undefined ? window.ethereum : {};
const web3 = typeof window != undefined ? new Web3(window.ethereum) : {};

const ConnectDialog = ({
  modalVisible,
  showConnectDialog,
  toggleWalletDialog,
  setLoggedData,
}) => {
  const connectToWallet = async () => {
    //console.log("sss", setLoggedIn);
    setLoggedData(true);
    // setLogged(true);
    showConnectDialog();
    if (ethereum !== undefined) {
      await window.ethereum.request({ method: "eth_requestAccounts" });
    } else {
      alert("Please Install Metamask");
    }
    const accounts = await web3.eth.getAccounts();

    if (window.localStorage.getItem("loggedIn") == null) {
      if (accounts[0].length > 0) {
        const signature = await web3.eth.personal.sign(
          `Connecting MetaMask`,
          accounts[0],
          "" // MetaMask will ignore the password argument here
        );
        localStorage.setItem("loggedIn", "yes");
      }
    } else {
    }
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
        onOk={showConnectDialog}
        onCancel={showConnectDialog}
        footer={[]}
      >
        <div className="connect-dialog">
          {/* <img
            className="connect-main-image"
            src="https://i.pinimg.com/originals/d5/c8/7c/d5c87c9160550d386791069339bbd762.jpg"
            alt="connect wallet background"
          /> */}
          <div className="connect-container">
            <h1>Connect you wallet</h1>
            <h3>
              Connect with one of available wallet providers or create a new
              wallet.
              <span onClick={toggleWalletDialog}> What is wallet?</span>
            </h3>
            <div className="connect-item-container">
              <div className="connect-item" onClick={connectToWallet}>
                <img
                  src="https://rarible.com/static/15b466863644140afb0f0edd08fa74b0.svg"
                  alt="metamask"
                />
                <h2>Metamask</h2>
              </div>
              <div className="connect-item">
                <img
                  src="https://rarible.com/static/bd9302c4068517e1072e192479e2d6c8.svg"
                  alt="metamask"
                />
                <h2>Fortmatic</h2>
              </div>
              <div className="connect-item">
                <img
                  src="https://rarible.com/static/4705c8de03ce7004d56aafa558ff5237.svg"
                  alt="metamask"
                />
                <h2>WalletConnect</h2>
              </div>
              <div className="connect-item">
                <img
                  src="https://rarible.com/static/c664363eba7d752c71a281c293701085.svg"
                  alt="metamask"
                />
                <h2>Coinbase Wallet</h2>
              </div>
              <div className="connect-item">
                <img
                  src="https://rarible.com/static/9d2f89bb2f394cd58bbebe88acef00fc.svg"
                  alt="metamask"
                />
                <h2>MyEtherWallet</h2>
              </div>
              <div className="connect-item">
                <img
                  src="https://rarible.com/static/0597a58ee0e97d636a2b03c15dfe8cb6.svg"
                  alt="metamask"
                />
                <h2>Torus</h2>
              </div>
            </div>
            <h3>
              We do not own your private keys and cannot access your funds
              without your confirmation.
            </h3>
          </div>
        </div>
      </Modal>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    data: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setLoggedData: (url) => dispatch(setLoggedIn(url)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ConnectDialog);
