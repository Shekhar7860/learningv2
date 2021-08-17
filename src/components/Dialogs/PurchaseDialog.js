import React, { useState } from "react";
import "./Dialog.css";
import { Input, Modal, Spin } from "antd";
import { connect } from "react-redux";
import { serviceFee } from "../../constants/constants";
import { postContract } from "../../contractDetails/item";
import { auctionContract } from "../../contractDetails/auction";
import { web3 } from "../../constants/constants";
const PurchaseDialog = ({ modalVisible, toggleDialog, selected, data }) => {
  const [loading, setLoading] = useState(false);
  const [quantity, setQuantity] = useState(0);
  const { name, sub, multiple } = selected;
  const setProgressOn = async () => {
    const auction = await auctionContract();
    const accounts = await web3.eth.getAccounts();
    const ether = web3.utils.toWei(selected.bid.toString(), "ether");
    if (quantity == 1) {
      setLoading(true);
      await auction.methods
        .purchasePriceAuction(selected.tokenId)
        .send({ from: accounts[0], value: ether })
        .then(async (val) => {
          setLoading(false);
          toggleDialog();
        })
        .catch((error) => {
          setLoading(false);
          toggleDialog();
        });
    } else {
      alert("invalid quantity");
    }
  };

  const handleChange = (e) => {
    setQuantity(e.target.value);
  };

  return (
    <Modal
      title="Checkout"
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
              You are about to purchase <span>{name}</span> from{" "}
              <span>{sub}</span>
            </p>
            <div className="purchase-dialog-item">
              <input
                type="number"
                bordered={false}
                placeholder="Enter quantity"
                onChange={handleChange}
              />
              <p>Enter quantity. {multiple == false ? 1 : 4} available</p>
            </div>
            <div className="purchase-dialog-item flex">
              <p>0.11</p>
              <h4>SNFT</h4>
            </div>
            <div className="purchase-dialog-item flex-container">
              <p>Your balance</p>
              <h4>{data ? data.balance : 0} SNFT</h4>
            </div>
            <div className="purchase-dialog-item flex-container">
              <p>Service fee</p>
              <h4>{serviceFee} SNFT</h4>
            </div>
            <div className="purchase-dialog-item flex-container">
              <p>You will pay</p>
              <h4>
                {data
                  ? quantity == 0
                    ? parseInt(quantity) + serviceFee
                    : 0
                  : 0}{" "}
                SNFT
              </h4>
            </div>
            <div className="purchase-dialog-action">
              <button onClick={setProgressOn} className="proceed-btn">
                Proceed to payment
              </button>
              <button onClick={toggleDialog}>Cancel</button>
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

export default connect(mapStateToProps, null)(PurchaseDialog);
