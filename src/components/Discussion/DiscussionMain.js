import { Select } from "antd";
import React, { useState } from "react";
import "./DiscussionMain.css";
import { Tabs } from "antd";
import DiscussionFun from "../../functions/DiscussionFun";
import CategoryItem from "./Items/CategoryItem";
import UserItem from "./Items/UserItem";
import LatestItem from "./Items/LatestItem";

const { TabPane } = Tabs;
const { Option } = Select;

const DiscussionMain = () => {
  const { items, latestItems } = DiscussionFun();
  const [all, setAll] = useState(true)

  const communityChange = (key) => {
    if(key === "All Categories") {
        setAll(true)
    }else {
      setAll(false)
    }
  }

  return (
    <div className="discussion-main">
      <div className="discussion-main-header">
        <Select
          showSearch
          style={{ width: 200 }}
          placeholder="Select a category"
          defaultValue="All Categories"
          onChange={communityChange}
          optionFilterProp="children"
          filterOption={(input, option) =>
            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
          }
        >
          {items.map((opt, index) => (
          <Option key={opt.title+index} value={opt.title}>{opt.title}</Option>
          ))}
        </Select>
      </div>
      <Tabs defaultActiveKey="1">
        {all&&
        <TabPane tab="Categories" key="1">
          <div className="discussion-category">
            <div className="discussion-category-container">
              <div className="discussion-category-header">
                <p>Category</p>
                <p>Topics</p>
              </div>
              {items.map((item, index) => (
                <CategoryItem item={item} key={item.title + index} />
              ))}
            </div>
            <div className="discussion-latest-container">
              <div className="discussion-latest-header">
                <p>Latest</p>
                <p></p>
              </div>
              {items.map((item, index) => (
                <UserItem item={item} key={item.title + index} />
              ))}
            </div>
          </div>
        </TabPane>}
        <TabPane tab="Latest" key="2">
          <div className="discussion-latest">
            <div className="latest-item">
              <div className="latest-item-text">
                <p>Topic</p>
              </div>
              <div className="latest-item-context">
                <div className="latest-item-profile">
                  <p></p>
                </div>
                <h4>Replies</h4>
                <h4>Views</h4>
                <h4>Activity</h4>
              </div>
            </div>
            {latestItems.map((item, index) => (
              <LatestItem item={item} key={item.title + index} />
            ))}
          </div>
        </TabPane>
        <TabPane tab="Top" key="3">
          <div className="discussion-latest">
          <Select
            showSearch
            style={{ width: 200 }}
            placeholder="Select Date"
            defaultValue="All Time"
            optionFilterProp="children"
            filterOption={(input, option) =>
              option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
          >
            <Option value="alltime">All Time</Option>
            <Option value="yar">Year (Apr 16, 2020 - Apr 16, 2021</Option>
            <Option value="quarter">Quarter (JAN 16, APR 16)</Option>
            <Option value="month">Month (APR 16, APR 16)</Option>
            <Option value="week">Week (APR 9, APR 16)</Option>
            <Option value="today">Today (APR 16TH)</Option>
          </Select>
            <div className="latest-item">
              <div className="latest-item-text">
                <p>Topic</p>
              </div>
              <div className="latest-item-context">
                <div className="latest-item-profile">
                  <p></p>
                </div>
                <h4>Replies</h4>
                <h4>Views</h4>
                <h4>Activity</h4>
              </div>
            </div>
            {latestItems.splice(0, 4).map((item, index) => (
              <LatestItem item={item} key={item.title + index} />
            ))}
          </div>
        </TabPane>
      </Tabs>
    </div>
  );
};

export default DiscussionMain;
