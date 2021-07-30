import React from "react";
import "./Dialog.css";
import { Modal } from "antd";

const ErrorDialog = ({ modalVisible, toggleDialog }) => {
  return (
    <Modal
      title={"Wrong Network"}
      maskStyle={{ background: "rgba(0, 0, 0, .7)" }}
      style={{ top: 100 }}
      width={window.screen.width > 500 ? "25vw" : "90vw"}
      visible={modalVisible}
      onOk={toggleDialog}
      onCancel={toggleDialog}
      footer={[]}
    >
      <div className="purchase-dialog-main">
        <div className="thanks-dialog">
          <p>Please Connect To Rinkeby NetWork</p>
        </div>
      </div>
    </Modal>
  );
};

export default ErrorDialog;
