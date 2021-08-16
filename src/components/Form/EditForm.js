import { Input, Form } from "antd";
import React, { useEffect, useReducer } from "react";
import "./EditForm.css";
import { connect } from "react-redux";
import { profileContract } from "../../contractDetails/profile";
import ipfs from "../../functions/Ipfs";

const initialData = {
  displayName: "",
  customURL: "",
  twitterUserName: "",
  portfolio: "",
  bio: "",
  email: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "DISPLAY_NAME":
      return { ...state, displayName: action.payload };
    case "CUSTOM_URL":
      return { ...state, customURL: action.payload };
    case "TWITTER_NAME":
      return { ...state, twitterUserName: action.payload };
    case "BIO":
      return { ...state, bio: action.payload };
    case "EMAIL":
      return { ...state, email: action.payload };
    case "PORTFOLIO":
      return { ...state, portfolio: action.payload };
    default:
      return state;
  }
};

const EditForm = ({ type, image, hash, data, userData }) => {
  const [state, dispatch] = useReducer(reducer, initialData);
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

    dispatch({ type: "DISPLAY_NAME", payload: userData.username });
    dispatch({ type: "CUSTOM_URL", payload: userData.customUrl });
    dispatch({ type: "TWITTER_NAME", payload: userData.twitterUserName });
    dispatch({ type: "BIO", payload: userData.bio });
    dispatch({ type: "EMAIL", payload: userData.email });
    dispatch({ type: "PORTFOLIO", payload: userData.personalSite });
  }, [userData]);

  const onFinishFailed = () => {};

  const handleChange = (e, param) => {
    if (param == "displayName") {
      dispatch({ type: "DISPLAY_NAME", payload: e.target.value });
    } else if (param == "customUrl") {
      dispatch({ type: "CUSTOM_URL", payload: e.target.value });
    } else if (param == "twitterUserName") {
      dispatch({ type: "TWITTER_NAME", payload: e.target.value });
    } else if (param == "bio") {
      dispatch({ type: "BIO", payload: e.target.value });
    } else if (param == "email") {
      dispatch({ type: "EMAIL", payload: e.target.value });
    } else if (param == "portfolio") {
      dispatch({ type: "PORTFOLIO", payload: e.target.value });
    }
  };
  const onFinish = async (selectedData) => {
    let contract = await profileContract();
    try {
      const doc = JSON.stringify({
        file: `https://ipfs.infura.io/ipfs/${hash}`,
        ...selectedData,
      });
      const added = await ipfs.add(doc);
      contract.methods.createUser(data.user.data.account, added.path).send(
        {
          from: data.user.data.account,
        },
        (error, transactionHash) => {
          console.log("error", transactionHash);
        }
      );
    } catch (error) {
      console.log("Error uploading file: ", error);
    }
  };

  return (
    <Form
      className="edit-form"
      onFinishFailed={onFinishFailed}
      onFinish={onFinish}
    >
      <div className="two-item">
        <Form.Item
          name="username"
          rules={[{ required: true, message: "Title should be something" }]}
        >
          <div className="royalti-input">
            <h3>Display name</h3>
            <Input
              placeholder="e.g. 'Redeemable T-Shirt with logo'"
              value={state.displayName}
              onChange={(e) => {
                handleChange(e, "displayName");
              }}
            />
          </div>
        </Form.Item>
        <Form.Item name="customUrl">
          <div className="royalti-input">
            <h3>Custom URL</h3>
            <Input
              placeholder="Enter your custom URL"
              // value={userData ? userData.customUrl : null}
              value={state.customURL}
              onChange={(e) => {
                handleChange(e, "customUrl");
              }}
            />
          </div>
        </Form.Item>
      </div>
      <div className="two-item">
        <Form.Item name="twitterUserName">
          <div className="royalti-input">
            <h3>Twitter Username</h3>
            <Input
              placeholder="@"
              // value={userData ? userData.twitterUserName : null}
              value={state.twitterUserName}
              onChange={(e) => {
                handleChange(e, "twitterUserName");
              }}
            />
            <p>
              Link your Twitter account to gain more trust on the marketplace
            </p>
          </div>
        </Form.Item>
        <Form.Item name="personalSite">
          <div className="royalti-input">
            <h3>Personal site or portfolio</h3>
            <Input
              placeholder="https://"
              // value={userData ? userData.personalSite : null}
              value={state.portfolio}
              onChange={(e) => {
                handleChange(e, "portfolio");
              }}
            />
          </div>
        </Form.Item>
      </div>
      <Form.Item
        name="bio"
        rules={[{ required: true, message: "Bio should be something" }]}
      >
        <div className="bio-box">
          <div className="royalti-input">
            <h3>Bio</h3>
            <Input.TextArea
              placeholder="Tell about yourself in a few words"
              // value={userData ? userData.bio : null}
              value={state.bio}
              onChange={(e) => {
                handleChange(e, "bio");
              }}
            />
          </div>
        </div>
      </Form.Item>
      <Form.Item name="email">
        <div className="royalti-input">
          <h3>Email address</h3>
          <p>Your email for marketplace notifications</p>
          <Input
            placeholder="@"
            value={state.email}
            onChange={(e) => {
              handleChange(e, "email");
            }}
          />
          <p>
            You must sign message to view or manage your email.
            <span> Sign message</span>
          </p>
        </div>
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

const mapStateToProps = (state) => {
  return {
    data: state,
  };
};

export default connect(mapStateToProps, null)(EditForm);
