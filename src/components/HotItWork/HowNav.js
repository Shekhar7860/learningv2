import React, { useState } from "react";
import "./HowNav.css";
import Logo from "../../assets/png/logo.png";
import { SearchOutlined, InfoCircleOutlined } from "@ant-design/icons";
import { Dropdown, Input, Menu, Modal } from "antd";

const HowNav = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };
  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const searchMenu = (
    <Menu onClick={handleCancel}>
      <Menu.Item>
        <p style={{margin: '0', color: "#aaa"}}>social.com FAQ</p>
        <p style={{margin: '0'}}>NFT? ERC-267 tokens?</p>
      </Menu.Item>
      <Menu.Item>
        <p style={{margin: '0', color: "#aaa"}}>social.com FAQ</p>
        <p style={{margin: '0'}}>NFT? ERC-267 tokens?</p>
      </Menu.Item>
      <Menu.Item>
        <p style={{margin: '0', color: "#aaa"}}>social.com FAQ</p>
        <p style={{margin: '0'}}>NFT? ERC-267 tokens?</p>
      </Menu.Item>
      <Menu.Item>
        <p style={{margin: '0', color: "#aaa"}}>social.com FAQ</p>
        <p style={{margin: '0'}}>NFT? ERC-267 tokens?</p>
      </Menu.Item>
    </Menu>
  );

  return (
    <div className="how-nav">
      <div className="how-nav-logo">
        <img src={Logo} alt="brand logo" />
        <p>socialNFT.com FAQ</p>
      </div>
      <div className="how-nav-items">
        <div className="how-nav-item" onClick={showModal}>
          <SearchOutlined />
          <p>Search</p>
        </div>
        <div className="how-nav-item">
          <InfoCircleOutlined />
          <p>Notion</p>
        </div>
      </div>
      <Modal visible={isModalVisible} 
      onCancel={handleCancel} 
      footer={[]}>
        <Dropdown
          onClick={() => {}}
          overlay={searchMenu}
          trigger={["click"]}
          placement="bottomCenter"
        >
          <Input
            placeholder="Search in social.com FAQ..."
            prefix={<SearchOutlined />}
            allowClear
            style={{marginTop: '2rem'}}
          />
        </Dropdown>
      </Modal>
    </div>
  );
};

export default HowNav;
