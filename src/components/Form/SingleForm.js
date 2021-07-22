import { Input, Form } from "antd";
import React, { useEffect, useRef } from "react";
import DialogFun from "../../functions/DialogFun";
import ConfirmCreateDialog from "../Dialogs/ConfirmCreateDialog";
import Web3 from "web3";
import { web3 } from "../../constants/constants";
import { METAMASK_RECEIVER_ACCOUNT } from "../../constants/constants";
// import { postContract } from "../../contractDetails/post";
import { postContract } from "../../contractDetails/item";
import { postCollectible } from "../../contractDetails/erc1155";
import "./SingleForm.css";
import { withRouter } from "react-router-dom";
import ipfs from "../../functions/Ipfs";
import { useHistory } from "react-router-dom";
const SingleForm = ({ type, nameChange, imagehash, collectionType }) => {
  const history = useHistory();
  const childRef = useRef();
  useEffect(() => {
    getHashData();
  }, []);
  const { toggleConfirmDialog, confirmDialog } = DialogFun();

  const getHashData = async () => {
    // Triggering of events from block chain
    const contract = await postContract();
    contract.events
      .ProductCreated({}, function (error, event) {
        childRef.current.hideLoading();
        toggleConfirmDialog();
        setTimeout(() => {
          history.push("/my-items");
        }, 1000);
      })
      .on("data", function (event) {
        //console.log("data", event); // same results as the optional callback above
      })
      .on("changed", function (event) {
        // remove event from local database
      })
      .on("error", console.error);
  };
  const submitData = async () => {
    // console.log("im", imagehash);
  };
  const onFinishFailed = (errorInfo) => {
    //  console.log("Failed:", errorInfo);
  };
  const onFinish = async (values) => {
    if (collectionType == "S") {
      toggleConfirmDialog();
      const contract = await postContract();
      const accounts = await web3.eth.getAccounts();
      try {
        const doc = JSON.stringify({
          file: `https://ipfs.infura.io/ipfs/${imagehash}`,
          fileType: type,
          ...values,
        });
        const added = await ipfs.add(doc);
        contract.methods.createProduct(accounts[0], added.path).send(
          {
            from: accounts[0],
          },
          (error, transactionHash) => {
            console.log(transactionHash);
          }
        );
      } catch (error) {
        console.log("Error uploading file: ", error);
      }
    } else {
      toggleConfirmDialog();
      const contractMultiple = await postCollectible();
      const accounts = await web3.eth.getAccounts();
      try {
        const doc = JSON.stringify({
          file: `https://ipfs.infura.io/ipfs/${imagehash}`,
          fileType: type,
          ...values,
        });
        const added = await ipfs.add(doc);
        const tx1 = await contractMultiple.methods
          .create(accounts[0], values.copies, added.path, "0x0")
          .send({ from: accounts[0] })
          .once(
            "receipt",
            async (receipt) => {
              console.log("receipt1", receipt.events.URI.returnValues._id);
              childRef.current.hideLoading();
              toggleConfirmDialog();
              setTimeout(() => {
                history.push("/my-items");
              }, 1000);
            },
            () => {}
          );
      } catch (error) {
        console.log("Error uploading file: ", error);
      }
      // console.log("data", contractMultiple);
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
        </div>
      </Form.Item>
      {collectionType == "M" ? (
        <Form.Item
          name="copies"
          rules={[{ required: true, message: "Copies must not be empty" }]}
        >
          <div className="copy-input">
            <h3>Number of copies</h3>
            <Input placeholder="E.g. 10" />
          </div>
        </Form.Item>
      ) : null}

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
        ref={childRef}
        toggleDialog={toggleConfirmDialog}
        modalVisible={confirmDialog}
      />
    </Form>
  );
};

export default withRouter(SingleForm);
