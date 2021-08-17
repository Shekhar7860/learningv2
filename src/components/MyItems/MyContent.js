import React, { useState } from "react";
import { Tabs } from "antd";
import "./MyContent.css";
import SaleList from "../ItemList/SaleList/SaleList";
import EmptyContent from "../Empty/EmptyContent";
import ActivityList from "../ItemList/Activity/ActivityList";
import FollowList from "../ItemList/FollowList/FollowList";
import DrawerControlerFun from "../../functions/DrawerControlerFun";
import MyFilter from "./MyFilter";

const { TabPane } = Tabs;

const MyContent = () => {
  const [productsCount, setProductsCount] = useState(0);
  const [saleProductsCount, setSaleProductsCount] = useState(0);
  const { show, changeDrawer, activeTab, changeTab, key, changeKey } =
    DrawerControlerFun();

  const callback = (key) => {
    changeKey(key);
    if (key === "6" || key === "7") {
      changeDrawer();
      changeTab(activeTab);
    } else {
      changeTab(key);
    }
  };
  const callBack = (products, param) => {
    if (param == "sale") {
      setSaleProductsCount(products.length);
    } else {
      setProductsCount(products.length);
    }
  };
  return (
    <div className="my-content">
      <Tabs defaultActiveKey="1" onChange={callback} activeKey={activeTab}>
        <TabPane tab={`On sale(${saleProductsCount})`} key="1">
          <SaleList onCallBack={callBack} sale={true} />
        </TabPane>
        <TabPane tab="Collectible(0)" key="2">
          <EmptyContent />
        </TabPane>
        <TabPane tab={`Created(${productsCount})`} key="3">
          <SaleList onCallBack={callBack} sale={false} />
        </TabPane>
        <TabPane tab="Liked(543)" key="4">
          <EmptyContent />
        </TabPane>
        <TabPane tab="Activity" key="5">
          <div className="my-content-activity-list">
            <ActivityList />
            <MyFilter />
          </div>
        </TabPane>
        <TabPane tab="Following(54)" key="6"></TabPane>
        <TabPane tab="Followers(26.5k)" key="7"></TabPane>
        {key === "6" ? (
          <FollowList
            type={"Following"}
            show={show}
            changeDrawer={changeDrawer}
          />
        ) : (
          <FollowList
            type={"Followers"}
            show={show}
            changeDrawer={changeDrawer}
          />
        )}
      </Tabs>
    </div>
  );
};

export default MyContent;
