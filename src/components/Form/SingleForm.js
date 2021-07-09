import { Input, Form } from "antd";
import React from "react";
import DialogFun from "../../functions/DialogFun";
import ConfirmCreateDialog from "../Dialogs/ConfirmCreateDialog";
import "./SingleForm.css";

const SingleForm = ({ type, nameChange }) => {

  const { toggleConfirmDialog, confirmDialog } = DialogFun();

  return (
    <Form className="single-form">
      <Form.Item
        name="username"
        rules={[{ required: true, message: "Title should be something" }]}
      >
        <h3>Name</h3>
        <Input onChange={nameChange} placeholder="e.g. 'Redeemable T-Shirt with logo'" />
      </Form.Item>
      <Form.Item>
        <h3>
          Description <span>(Optional)</span>
        </h3>
        <Input placeholder="e.g. 'After purchasing you will be able to get the real T-Shirt'" />
      </Form.Item>
      <Form.Item
        name="royalties"
        rules={[{ required: true, message: "Royalties must be a number" }]}
      >
        <div className="single-multiple-copy">
          <div className="royalti-input">
            <h3>Royalties</h3>
            <Input  placeholder="e.g. 10%" />
          </div>
          {type === "S"?"":
          <div className="copy-input">
            <h3>Number of copies</h3>
            <Input  placeholder="E.g. 10" />
          </div>
        }
        </div>
      </Form.Item>
      <Form.Item>
        <h3>
          Properties <span>(Optional)</span>
        </h3>
        <Input.Group className="input-group">
          <Input placeholder="e.g. Size" />
          <Input placeholder="e.g. M" />
        </Input.Group>
      </Form.Item>
      <Form.Item>
        <button onClick={toggleConfirmDialog}>
          Submit
        </button>
      </Form.Item>
      <ConfirmCreateDialog toggleDialog={toggleConfirmDialog} modalVisible={confirmDialog} />
    </Form>
  );
};

export default SingleForm;
