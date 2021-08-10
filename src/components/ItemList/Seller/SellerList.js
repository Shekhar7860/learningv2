import { CaretDownOutlined } from "@ant-design/icons";
import { Dropdown, Menu } from "antd";
import React, { useEffect, useState } from "react";
import SellerListFun from "../../../functions/SellerListFun";
import SellerGroup from "../../Seller/SellerGroup";
import "./SellerList.css";
import { getCreators } from "../../../redux/actions/creators";
import { connect } from "react-redux";
import { web3 } from "../../../constants/constants";
import { getDeprecatableDirectiveNodes } from "@graphql-tools/load/node_modules/@graphql-tools/utils";
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

const SellerList = ({ userdata, getCreatorsList }) => {
  const { items } = SellerListFun();
  const [creators, setCreators] = useState([]);
  useEffect(() => {
    const getList = async () => {
      const accounts = await web3.eth.getAccounts();
      getCreatorsList(accounts[0]).then((response) => {
        console.log("res", response.data);
        setCreators(response.data);
      });
    };
    getList();
  }, []);
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
        {creators.map((item, index) => (
          <SellerGroup key={index} cards={item} />
        ))}
      </div>
    </div>
  );
};
const mapDispatchToProps = (dispatch) => {
  return {
    getCreatorsList: (address) => dispatch(getCreators(address)),
  };
};
const mapStateToProps = (state) => {
  return {
    userdata: state,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SellerList);
