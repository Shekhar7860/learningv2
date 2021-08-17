import React, { useState } from "react";
import "./Dialog.css";
import { Input, Modal, Spin } from "antd";
import { connect } from "react-redux";
import { auctionContract } from "../../contractDetails/auction";
import { web3, serviceFee } from "../../constants/constants";
const BidDialog = ({
  modalVisible,
  toggleDialog,
  check,
  data,
  biddingData,
  selected,
}) => {
  const [loading, setLoading] = useState(false);
  const [price, setPrice] = useState(0);
  const { name, sub, multiple, tokenId } = selected;
  const handleChange = (e) => {
    setPrice(e.target.value);
  };
  const placeBid = async () => {
    setLoading(true);
    const ether = web3.utils.toWei(price, "ether");
    const accounts = await web3.eth.getAccounts();
    const contract = await auctionContract();
    await contract.methods
      .bidOnAuction(biddingData != undefined ? biddingData.tokenId : tokenId)
      .send({ from: accounts[0], value: ether })
      .then(async (val) => {
        setLoading(false);
        toggleDialog();
      })
      .then(async (error) => {
        console.log("auction bid", error);
      });
    // setLoading(true);
    // setTimeout(() => {
    //   setLoading(false);
    //   toggleDialog();
    // }, 3000);
  };
  return (
    <Modal
      title="Place a bid"
      maskStyle={{ background: "rgba(0, 0, 0, .7)" }}
      style={{ top: 100 }}
      width={window.screen.width > 500 ? "25vw" : "90vw"}
      visible={modalVisible}
      onOk={toggleDialog}
      onCancel={toggleDialog}
      footer={[]}
    >
      <div className="purchase-dialog-main">
        {loading ? (
          <div className="purchase-dialog-action">
            <Spin size="large" />
            <button className="disabled-btn">In Progress...</button>
          </div>
        ) : (
          <div className="purchase-dialog">
            <p>
              You are about to place a Bid <span>{name}</span> from{" "}
              <span>{sub}</span>
            </p>
            <div className="purchase-dialog-item">
              <h3>Your bid</h3>
              <div className="purchase-dialog-item-select">
                <input
                  bordered={false}
                  type="number"
                  placeholder="Enter bid"
                  onChange={handleChange}
                />
                <select>
                  <option>WETH</option>
                  <option>DAI</option>
                  <option>NSFT</option>
                  <option>ATRI</option>
                  <option>ABST</option>
                </select>
              </div>
            </div>
            {check && (
              <div className="purchase-dialog-item">
                <h3>
                  <p>Enter quantity. {multiple == false ? 1 : 4} available</p>
                </h3>
                <input bordered={false} placeholder="Enter quantity" />
              </div>
            )}
            <div className="purchase-dialog-item flex-container">
              <p>Your balance</p>
              <h4>{data ? data.balance : 0} ETH</h4>
            </div>
            <div className="purchase-dialog-item flex-container">
              <p>Service fee</p>
              <h4>{serviceFee} ETH</h4>
            </div>
            <div className="purchase-dialog-item flex-container">
              <p>You will pay</p>
              <h4>
                {data ? (price !== "" ? parseInt(price) + serviceFee : 0) : 0}{" "}
                ETH
              </h4>
            </div>
            <div className="purchase-dialog-action">
              <button onClick={placeBid} className="proceed-btn">
                Place a bid
              </button>
              {/* <button onClick={toggleDialog}>Cancel</button> */}
            </div>
          </div>
        )}
      </div>
    </Modal>
  );
};
const mapStateToProps = (state) => {
  return {
    data: state.user.data,
  };
};

export default connect(mapStateToProps, null)(BidDialog);
