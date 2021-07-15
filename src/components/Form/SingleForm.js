import { Input, Form } from "antd";
import React, { useEffect } from "react";
import DialogFun from "../../functions/DialogFun";
import ConfirmCreateDialog from "../Dialogs/ConfirmCreateDialog";
import Web3 from "web3";
import { web3 } from "../../constants/constants";
import { METAMASK_RECEIVER_ACCOUNT } from "../../constants/constants";
import { postContract } from "../../contractDetails/post";
import { list } from "../../contractDetails/list";
import "./SingleForm.css";
import ipfs from "../../functions/Ipfs";
const StoreHash = require("./../../abis/StoreHash.json");

const SingleForm = ({ type, nameChange, imagehash }) => {
  const { toggleConfirmDialog, confirmDialog } = DialogFun();
  const submitData = async () => {
    // console.log("im", imagehash);
  };
  const onFinishFailed = (errorInfo) => {
    //  console.log("Failed:", errorInfo);
  };
  const onFinish = async (values) => {
    const contract = await postContract();
    const accounts = await web3.eth.getAccounts();
    try {
      const doc = JSON.stringify({
        file: `https://ipfs.infura.io/ipfs/${imagehash}`,
        ...values,
      });
      const added = await ipfs.add(doc);
      contract.methods.createProduct(added.path).send(
        {
          from: accounts[0],
        },
        (error, transactionHash) => {
          console.log(transactionHash);
          toggleConfirmDialog();
          // this.setState({ transactionHash });
        }
      );
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
