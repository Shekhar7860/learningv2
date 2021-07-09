import React, { useState } from "react";
import "./Dialog.css";
import { Input, Modal, Spin } from "antd";

const PurchaseDialog = ({ modalVisible, toggleDialog }) => {

    const [loading, setLoading] = useState(false)

    const setProgressOn = () => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false);
            toggleDialog()
        }, 3000);
    }

  return (
    <Modal
      title="Checkout"
      maskStyle={{background: 'rgba(0, 0, 0, .7)'}}
      style={{ top: 100 }}
      width={window.screen.width > 500 ? "25vw": "90vw"}
      visible={modalVisible}
      onOk={toggleDialog}
      onCancel={toggleDialog}
      footer={[]}
    >
      <div className="purchase-dialog-main">
          {loading ?
          <div className="purchase-dialog-action">
            <Spin size="large" />
            <button className="disabled-btn">In Progress...</button>
          </div>:
        <div className="purchase-dialog">
          <p>
            You are about to purchase <span>Galore \\ Golden Baguettes</span>{" "}
            from <span>maximkuzlin</span>
          </p>
          <div className="purchase-dialog-item">
            <input bordered={false} placeholder="Enter quantity" />
            <p>Enter quantity. 5 available</p>
          </div>
          <div className="purchase-dialog-item flex">
            <p>0.11</p>
            <h4>SNFT</h4>
          </div>
          <div className="purchase-dialog-item flex-container">
            <p>Your balance</p>
            <h4>0 SNFT</h4>
          </div>
          <div className="purchase-dialog-item flex-container">
            <p>Service fee</p>
            <h4>0 SNFT</h4>
          </div>
          <div className="purchase-dialog-item flex-container">
            <p>You will pay</p>
            <h4>0 SNFT</h4>
          </div>
          <div className="purchase-dialog-action">
            <button onClick={setProgressOn} className="proceed-btn">Proceed to payment</button>
            <button onClick={toggleDialog}>Cancel</button>
          </div>
        </div>
        }
      </div>
    </Modal>
  );
};

export default PurchaseDialog;
