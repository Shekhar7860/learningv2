import { Input, Form } from "antd";
import React from "react";
import DialogFun from "../../functions/DialogFun";
import ConfirmCreateDialog from "../Dialogs/ConfirmCreateDialog";
import Web3 from "web3";
import { web3 } from "../../constants/constants";
import { METAMASK_RECEIVER_ACCOUNT } from "../../constants/constants";
import "./SingleForm.css";
const StoreHash = require("./../../abis/StoreHash.json");
import { create } from "ipfs-http-client";
const client = create("https://ipfs.infura.io:5001/api/v0");

const SingleForm = ({ type, nameChange, selectedFile }) => {
  const { toggleConfirmDialog, confirmDialog } = DialogFun();

  const submitData = () => {
    console.log("myweb3", web3);
    // web3 = new Web3(web3.currentProvider);
    // console.log("myweb2", web3);
    const contract = new web3.eth.Contract(
      StoreHash.abi,
      "0xA57c6519b73510361f3B51F2cdF583c8be7AED35"
    );
    contract.methods
      .getHash()
      .call()
      .then(function (info) {
        console.log("info: ", info);
      });
    // contract.methods
    //   .getInfo()
    //   .call({ from: "0x572714280e8f3590ad133cD3388A97a1AB595909" })
    //   .then(function (info) {
    //     console.log("info: ", info);
    //   });
    console.log("contract", contract);
    // toggleConfirmDialog();
  };
  const onFinishFailed = (errorInfo) => {
    //  console.log("Failed:", errorInfo);
  };
  const onFinish = async (values) => {
    return false;
    console.log("selected", selectedFile);
    console.log("Success:", values);
    try {
      const doc = JSON.stringify({
        file: selectedFile,
        ...values,
      });
      const obj = {
        file: selectedFile,
        ...values,
      };
      console.log("doc", obj);
      const added = await client.add(selectedFile);
      console.log("added", added);
      // const url = `https://ipfs.infura.io/ipfs/${added.path}`
      //  updateFileUrl(url)
    } catch (error) {
      console.log("Error uploading file: ", error);
    }
    if (values.username && values.royalties) {
      const accounts = await web3.eth.getAccounts();
      // web3.eth.sendTransaction(
      //   {
      //     nonce: 56,
      //     from: accounts[0],
      //     to: METAMASK_RECEIVER_ACCOUNT,
      //     value: 45,
      //   },
      //   (err, transactionId) => {
      //     if (err) {
      //       console.log("err", err);
      //     } else {
      //       console.log("success", transactionId);
      //     }
      //   }
      // );
      // toggleConfirmDialog();
    }
  };
  return (
    <Form
      className="single-form"
      onFinishFailed={onFinishFailed}
      onFinish={onFinish}
    >
      <Form.Item
        name="username"
        rules={[
          {
            required: true,
            message: "Title should be something",
          },
        ]}
      >
        <div className="royalti-input">
          <h3>Name</h3>
          <Input
            onChange={nameChange}
            placeholder="e.g. 'Redeemable T-Shirt with logo'"
          />
        </div>
      </Form.Item>
      <Form.Item name="description">
        <div className="royalti-input">
          <h3>
            Description <span>(Optional)</span>
          </h3>
          <Input placeholder="e.g. 'After purchasing you will be able to get the real T-Shirt'" />
        </div>
      </Form.Item>
      <Form.Item
        name="royalties"
        rules={[{ required: true, message: "Royalties must be a number" }]}
      >
        <div className="single-multiple-copy">
          <div className="royalti-input">
            <h3>Royalties</h3>
            <Input placeholder="e.g. 10%" />
          </div>
          {type === "S" ? (
            ""
          ) : (
            <div className="copy-input">
              <h3>Number of copies</h3>
              <Input placeholder="E.g. 10" />
            </div>
          )}
        </div>
      </Form.Item>
      <Form.Item name="properties">
        <div className="royalti-input">
          <h3>
            Properties <span>(Optional)</span>
          </h3>
          <Input.Group className="input-group">
            <Input placeholder="e.g. Size" />
            <Input placeholder="e.g. M" />
          </Input.Group>
        </div>
      </Form.Item>
      <Form.Item>
        <button onClick={submitData}>Submit</button>
      </Form.Item>
      <ConfirmCreateDialog
        toggleDialog={toggleConfirmDialog}
        modalVisible={confirmDialog}
      />
    </Form>
  );
};

export default SingleForm;
