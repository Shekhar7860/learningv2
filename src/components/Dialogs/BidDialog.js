import React, { useState } from "react";
import "./Dialog.css";
import { Input, Modal, Spin } from "antd";

const BidDialog = ({ modalVisible, toggleDialog, check }) => {

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
      title="Place a bid"
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
            You are about to place a Bid <span>Galore \\ Golden Baguettes</span>{" "}
            from <span>maximkuzlin</span>
          </p>
          <div className="purchase-dialog-item">
              <h3>Your bid</h3>
              <div className="purchase-dialog-item-select">
                <input bordered={false} placeholder="Enter bid" />
                <select>
                    <option>WETH</option>
                    <option>DAI</option>
                    <option>NSFT</option>
                    <option>ATRI</option>
                    <option>ABST</option>
                </select>
            </div>
          </div>
          {check&&
          <div className="purchase-dialog-item">
            <h3>Enter quantity <span>(5 available)</span></h3>
            <input bordered={false} placeholder="Enter quantity" />
          </div>  
          }  
          <div className="purchase-dialog-item flex-container">
            <p>Your balance</p>
            <h4>0 ETH</h4>
          </div>
          <div className="purchase-dialog-item flex-container">
            <p>Service fee</p>
            <h4>0 ETH</h4>
          </div>
          <div className="purchase-dialog-item flex-container">
            <p>You will pay</p>
            <h4>0 ETH</h4>
          </div>
          <div className="purchase-dialog-action">
            <button onClick={setProgressOn} className="proceed-btn">Place a bid</button>
            {/* <button onClick={toggleDialog}>Cancel</button> */}
          </div>
        </div>
        }
      </div>
    </Modal>
  );
};

export default BidDialog;