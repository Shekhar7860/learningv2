import React from "react";
import "./DiscussionSearch.css";
import { Button, Input, Select } from "antd";
import DiscussionFun from "../../functions/DiscussionFun";
import SerachItem from "./Items/SerachItem";
import { SearchOutlined } from '@ant-design/icons';

const { Search } = Input;
const { Option } = Select;

const DiscussionSearch = () => {
  const { searchItems, items } = DiscussionFun();

  return (
    <div className="discussion-search">
      <div className="discussion-search-container">
        <Search
          placeholder="Search topics or posts"
          onSearch={() => {}}
          enterButton
        />
        <div className="discussion-search-header">
          <p>
            50+ results for <span>Hello</span>
          </p>
          <div className="discussion-search-header-sort">
            <p>sort by</p>
            <Select
              defaultValue="jack"
              style={{ width: 120 }}
              onChange={() => {}}
            >
              <Option value="jack">Relevance</Option>
              <Option value="lucy">Latest Post</Option>
              <Option value="disabled">Most Liked</Option>
              <Option value="Yiminghe">Most Viewed</Option>
              <Option value="Yiminghe">Latest Topic</Option>
            </Select>
          </div>
        </div>
        <div className="discussion-search-content">
          {searchItems.map((item, index) => (
            <SerachItem item={item} key={item.title + index} />
          ))}
        </div>
      </div>
      <div className="discussion-search-filter">
        <div className="discussion-search-filter-header">
          <h4>Advanced Search</h4>
        </div>
        <div className="discussion-search-filter-item">
          <p>Posted by</p>
          <Input />
        </div>
        <div className="discussion-search-filter-item">
          <p>Categorized</p>
          <Select
            defaultValue="All Categories"
            style={{ width: "100%" }}
            onChange={() => {}}
          >
            {items.map((obj, index) => (
              <Option key={obj.title + index} value={obj.title}>
                {obj.title}
              </Option>
            ))}
          </Select>
        </div>
        <div className="discussion-search-filter-item">
          <p>Categorized</p>
          <Select
            defaultValue="any"
            style={{ width: "100%" }}
            onChange={() => {}}
          >
            <Option value="are very">are the very first post</Option>
            <Option value="are pinned">are pinned</Option>
            <Option value="are wiki">are wiki</Option>
            <Option value="include">include image(s)</Option>
          </Select>
        </div>
        <div className="discussion-search-filter-item">
          <p>Categorized</p>
          <Select
            defaultValue="any"
            style={{ width: "100%" }}
            onChange={() => {}}
          >
            <Option value="are open">are open</Option>
            <Option value="are closed">are closed</Option>
            <Option value="are public">are public</Option>
            <Option value="are arch">are archieved</Option>
            <Option value="have">have zero replies</Option>
            <Option value="contain">contain a single user</Option>
          </Select>
        </div>
        <div className="discussion-search-filter-item">
          <p>Categorized</p>
          <Select
            defaultValue="any"
            style={{ width: "100%" }}
            onChange={() => {}}
          >
            <Option value="before">before</Option>
            <Option value="after">after</Option>
          </Select>
        </div>
        <div className="discussion-search-filter-item">
          <p>Minimum Post Count</p>
          <Input />
        </div>
        <Button icon={<SearchOutlined />} type="primary">Submit</Button>
      </div>
    </div>
  );
};

export default DiscussionSearch;
