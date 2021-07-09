import React, { Component } from "react";
import "./SearchPage.css";
import { Tabs } from "antd";
import MyFilter from "../../components/MyItems/MyFilter";
// import EmptyContent from "../../components/Empty/EmptyContent";
import UserItemList from "../../components/ItemList/UserItemList/UserItemList";
import CollectionItemList from "../../components/ItemList/CollectionItemList/CollectionItemList";
import SaleList from "../../components/ItemList/SaleList/SaleList";

const { TabPane } = Tabs;

class SearchPage extends Component {
  render() {
    return (
      <div className="search-page">
        <h1 className="search-page-headline">Search results for <span>Hello</span></h1>
        <div className="search-page-context">
          <Tabs defaultActiveKey="1">
            <TabPane tab="Items" key="1">
              <SaleList />
            </TabPane>
            <TabPane tab="Users" key="2">
              <UserItemList />
            </TabPane>
            <TabPane tab="Collections" key="3">
              <CollectionItemList />
            </TabPane>
          </Tabs>
        </div>
      </div>
    );
  }
}

export default SearchPage;
