import React from "react";
import "./HowContent.css";
import Logo from "../../assets/png/logo.png";
import HowCollapse from "./HowCollapse";
import HowItWorkFun from "../../functions/HowItWorkFun";
import { Link } from "react-router-dom";
import { ArrowLeftOutlined } from "@ant-design/icons";

const HowContent = () => {

    const {items} = HowItWorkFun();

  return (
    <div className="how-content">
      <div className="how-head">
        <ArrowLeftOutlined />
        <Link to="/">Go back</Link>
      </div>
      <img src={Logo} alt="brand logo" />
      <h1>socialNFT.com FAQ</h1>
      <div className="how-collapse-content">
        <HowCollapse headline="Marketplace" items={items.Marketplace} />
      </div>
      <div className="how-collapse-content">
        <HowCollapse headline="Governance" items={items.Governance} />
      </div>
    </div>
  );
};

export default HowContent;
