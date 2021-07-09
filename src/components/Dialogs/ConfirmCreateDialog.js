import React, { useState, useEffect } from "react";
import "./Dialog.css";
import { Modal, Spin } from "antd";
import { CheckOutlined } from "@ant-design/icons";

const ConfirmCreateDialog = ({ modalVisible, toggleDialog }) => {
  const [loading1, setLoading1] = useState(false);
  const [loading2, setLoading2] = useState(false);
  const [loading3, setLoading3] = useState(false);

  const setProgressOn = () => {
    setLoading1(true);
    setTimeout(() => {
      setLoading1(false);
      setLoading2(true);
      setTimeout(() => {
        setLoading2(false);
        setLoading3(true);
        setTimeout(() => {
          setLoading3(false);
        }, 3000);
      }, 3000);
    }, 3000);
  };

  useEffect(() => {
    setProgressOn();
}, [modalVisible]);

  return (
    <Modal
      title="Follow steps"
      maskStyle={{ background: "rgba(0, 0, 0, .7)" }}
      style={{ top: 100 }}
      width={window.screen.width > 500 ? "25vw": "90vw"}
      visible={modalVisible}
      onOk={toggleDialog}
      onCancel={toggleDialog}
      footer={[]}
    >
      <div className="confirm-create-dialog">
        <div className="confirm-item">
          <div className="confirm-flex-item">
            <div>{loading1 ? <Spin /> : <CheckOutlined />}</div>
            <div className="confirm-info">
              <h2>Approve</h2>
              <p>Approve perfoming transactions with your wallet</p>
            </div>
          </div>
          <div>
            {loading1 ? (
              <button className="in-progress-btn">In progress...</button>
            ) : (
              <button className="done-btn">Done</button>
            )}
          </div>
        </div>
        <div className="confirm-item">
          <div className="confirm-flex-item">
            <div>{loading2 ? <Spin /> : <CheckOutlined />}</div>
            <div className="confirm-info">
              <h2>Upload files & Mint token</h2>
              <p>Call contract method</p>
            </div>
          </div>
          <div>
            {loading2 ? (
              <button onClick={setProgressOn} className="in-progress-btn">
                In progress...
              </button>
            ) : (
              <button className="done-btn">Done</button>
            )}
          </div>
        </div>
        <div className="confirm-item">
          <div className="confirm-flex-item">
            <div>{loading3 ? <Spin /> : <CheckOutlined />}</div>
            <div className="confirm-info">
              <h2>Sign sell order</h2>
              <p>Sign sell order using your wallet</p>
            </div>
          </div>
          <div>
            {loading3 ? (
              <button onClick={setProgressOn} className="in-progress-btn">
                In progress...
              </button>
            ) : (
              <button className="done-btn">Done</button>
            )}
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ConfirmCreateDialog;
