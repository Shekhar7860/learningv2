import { Avatar, Form } from "antd";
import React, { useState } from "react";
import { Input, Modal, Spin } from "antd";
import "./Dialog.css";
import Preview from "../../assets/svg/preview.svg";
import CreateFun from "../../functions/CreateFun";

const CreateCollectionDialog = ({
  modalVisible,
  toggleDialog,
  toggleConfDialog,
}) => {
  const selectFile = () => {
    document.getElementById("my-file").click();
  };

  const [name, setName] = useState("");
  const [token, setToken] = useState("");

  const toggleBothDialog = () => {
    if (name !== "" && token !== "") {
      toggleDialog();
      toggleConfDialog();
    }
  };

  const nameChange = (e) => {
    setName(e.target.value);
  };

  const tokenChange = (e) => {
    setToken(e.target.value);
  };

  const { pickCreateFile, createImage } = CreateFun();

  return (
    <Modal
      title="Place a bid"
      maskStyle={{ background: "rgba(0, 0, 0, .7)" }}
      style={{ top: 50 }}
      width={window.screen.width > 500 ? "30vw" : "90vw"}
      visible={modalVisible}
      onOk={toggleDialog}
      onCancel={toggleDialog}
      footer={[]}
    >
      <div className="create-coll-dialog">
        <div className="create-coll-top">
          <img
            src={createImage === "" ? Preview : createImage}
            alt="preview collection"
          />
          <div className="create-coll-header">
            <p>We recommend an image of at least 400x400. Gifs work too.</p>
            <div className="create-coll-upload">
              <input
                onClick={selectFile}
                type="button"
                id="my-button"
                value="Select Files"
              />
            <a target="__blank" href="https://www.instagram.com"><button>Upload from social</button></a>
            </div>
            <input
              onChange={pickCreateFile}
              type="file"
              name="my_file"
              id="my-file"
            />
          </div>
        </div>
        <Form className="create-coll-dialog-container">
          <Form.Item
            className="purchase-dialog-item"
            name="displayname"
            rules={[
              { required: true, message: "Name is not allowed to be empty" },
            ]}
          >
            <h3>
              Display name <span>(required)</span>
            </h3>
            <input onChange={nameChange} placeholder="Enter token name" />
            <p>token name can not be changed later</p>
          </Form.Item>
          <Form.Item
            className="purchase-dialog-item"
            name="symbol"
            rules={[
              { required: true, message: "Symbol is not allowed to be empty" },
            ]}
          >
            <h3>
              Symbol <span>(required)</span>
            </h3>
            <input onChange={tokenChange} placeholder="Enter token symbol" />
          </Form.Item>
          <Form.Item className="purchase-dialog-item">
            <h3>
              Description <span>(optional)</span>
            </h3>
            <input placeholder="Describe something about your token collection" />
          </Form.Item>
          <Form.Item className="purchase-dialog-item">
            <h3>
              Short url <span></span>
            </h3>
            <input placeholder="Enter short url" />
            <p>Will be used as public URL</p>
          </Form.Item>
          <Form.Item className="purchase-dialog-item">
            <button onClick={toggleBothDialog} htmlType="submit">
              Submit
            </button>
          </Form.Item>
        </Form>
      </div>
    </Modal>
  );
};

export default CreateCollectionDialog;
