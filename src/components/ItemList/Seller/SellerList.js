import { CaretDownOutlined } from "@ant-design/icons";
import { Dropdown, Menu } from "antd";
import React from "react";
import SellerListFun from "../../../functions/SellerListFun";
import SellerGroup from "../../Seller/SellerGroup";
import "./SellerList.css";

const sellerManu = (
  <Menu onClick={() => {}}>
    <Menu.Item key="1">Sellers</Menu.Item>
    <Menu.Item key="2">Buyers</Menu.Item>
  </Menu>
);

const dayMenu = (
  <Menu onClick={() => {}}>
    <Menu.Item key="1">1 day</Menu.Item>
    <Menu.Item key="2">7 days</Menu.Item>
    <Menu.Item key="3">30 days</Menu.Item>
  </Menu>
);

const SellerList = () => {
  const { items } = SellerListFun();

  return (
    <div className="seller-list">
      {/* <h1>
        Top
        <Dropdown
          onClick={() => {}}
          overlay={sellerManu}
          trigger={["click"]}
          placement="bottomCenter"
        >
          <div className="seller-list-title-seller">
            <span>sellers</span>
            <CaretDownOutlined style={{fontSize: '1.5rem'}} />
          </div>
        </Dropdown>
        in
        <Dropdown
          onClick={() => {}}
          overlay={dayMenu}
          trigger={["click"]}
          placement="bottomCenter"
        >
          <div className="seller-list-title-day">
            <span>1 day</span>
            <CaretDownOutlined style={{fontSize: '1.5rem'}} />
          </div>
        </Dropdown>
      </h1> */}
      <div className="seller-item-list">
        {items.map((item, index) => (
          <SellerGroup key={index} cards={item} />
        ))}
      </div>
    </div>
  );
};

export default SellerList;
