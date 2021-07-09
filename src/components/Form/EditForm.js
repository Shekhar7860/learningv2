import { Input, Form } from "antd";
import React, { useEffect } from "react";
import "./EditForm.css";

const EditForm = ({ type }) => {
  useEffect(() => {
    var qs,
      js,
      q,
      s,
      d = document,
      gi = d.getElementById,
      ce = d.createElement,
      gt = d.getElementsByTagName,
      id = "typef_orm_share",
      b = "https://embed.typeform.com/";
    if (!gi.call(d, id)) {
      js = ce.call(d, "script");
      js.id = id;
      js.src = b + "embed.js";
      q = gt.call(d, "script")[0];
      q.parentNode.insertBefore(js, q);
    }
  });

  return (
    <Form className="edit-form">
      <div className="two-item">
        <Form.Item
          name="username"
          rules={[{ required: true, message: "Title should be something" }]}
        >
          <h3>Display name</h3>
          <Input placeholder="e.g. 'Redeemable T-Shirt with logo'" />
        </Form.Item>
        <Form.Item>
          <h3>Custom URL</h3>
          <Input placeholder="Enter your custom URL" />
        </Form.Item>
      </div>
      <div className="two-item">
        <Form.Item>
          <h3>Twitter Username</h3>
          <Input placeholder="@" />
          <p>Link your Twitter account to gain more trust on the marketplace</p>
        </Form.Item>
        <Form.Item>
          <h3>Personal site or portfolio</h3>
          <Input placeholder="https://" />
        </Form.Item>
      </div>
      <Form.Item
        name="bio"
        rules={[{ required: true, message: "Royalties must be a number" }]}
      >
        <div className="bio-box">
          <div className="royalti-input">
            <h3>Bio</h3>
            <Input.TextArea placeholder="Tell about yourself in a few words" />
          </div>
        </div>
      </Form.Item>
      <Form.Item>
        <h3>Email address</h3>
        <p>Your email for marketplace notifications</p>
        <Input placeholder="@" />
        <p>
          You must sign message to view or manage your email.
          <span> Sign message</span>
        </p>
      </Form.Item>
      <div className="two-item">
        <div className="verified-box">
          <h3>Verification</h3>
          <p>
            Procceed with verification proccess to get more visibility and gain
            trust on Rarible Marketplace. Please allow up to several weeks for
            the process.
          </p>
        </div>
        <a
            className="typeform-share button"
            href="https://form.typeform.com/to/QFObEPQU?typeform-medium=embed-snippet"
            data-mode="drawer_right"
            target="_blank"
          >
            Get verified
          </a>
        {/* <h4>Get verified</h4> */}
      </div>
      <Form.Item>
        <button className="submit-button" type="primary">
          Submit
        </button>
      </Form.Item>
    </Form>
  );
};

export default EditForm;
