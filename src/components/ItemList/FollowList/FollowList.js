import { CloseCircleOutlined } from "@ant-design/icons";
import { Drawer } from "antd";
import React from "react";
import FollowCard from "../../Follower/FollowCard";
import "./FollowList.css";

const FollowList = ({ show, changeDrawer, type }) => {
  return (
    <div className="follow-list">
      <Drawer
        title={type}
        placement="left"
        closable={true}
        width={window.screen.width > 500 ? "400px" : "90vw"}
        onClose={changeDrawer}
        visible={show}
        closeIcon={<CloseCircleOutlined />}
      >
        <FollowCard />
        <FollowCard />
        <FollowCard />
        <FollowCard />
        <FollowCard />
        <FollowCard />
        <FollowCard />
        <FollowCard />
        <FollowCard />
        <FollowCard />
        <FollowCard />
        <FollowCard />
        <FollowCard />
        <FollowCard />
        <FollowCard />
      </Drawer>
    </div>
  );
};

export default FollowList;
