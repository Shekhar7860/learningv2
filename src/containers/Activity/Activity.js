import React, { Component } from "react";
import "./Activity.css";
import { Drawer, Tabs } from "antd";
import ActivityList from "../../components/ItemList/Activity/ActivityList";
import MyFilter from "../../components/MyItems/MyFilter";
import ActivityFilter from "../../components/MyItems/ActivityFilter";
import EmptyContent from "../../components/Empty/EmptyContent";
import DrawerFilter from "../../components/MyItems/DrawerFilter";

const { TabPane } = Tabs;

class Activity extends Component {

  state = {
    visible: false
  }

  showFilter = () => {
    this.setState({visible: !this.state.visible})
  }

  render() {
    return (
      <div className="activity-container">
        <div className="activity-headline">
          <h1 className="activity-container-headline">Activity</h1>
          <div className="activity-main-filter">
            <ActivityFilter />
          </div>
          <button className="filter-toggle-button" onClick={this.showFilter}>Filter</button>
        </div>
        <div className="activity-container-context">
          <Tabs defaultActiveKey="1">
            <TabPane tab="All" key="1">
              <ActivityList />
            </TabPane>
            <TabPane tab="Following" key="2">
              <ActivityList />
            </TabPane>
            <TabPane tab="My Activity" key="3">
              <EmptyContent />
            </TabPane>
          </Tabs>
          {/* <MyFilter /> */}
          <Drawer
            title="Filters"
            placement="bottom"
            height="50vh"
            closable={true}
            onClose={this.showFilter}
            visible={this.state.visible}
            key="bottom"
          >
            <DrawerFilter showFilter={this.showFilter} />
          </Drawer>
        </div>
      </div>
    );
  }
}

export default Activity;
