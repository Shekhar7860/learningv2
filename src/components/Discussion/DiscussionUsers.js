import React from "react";
import "./DiscussionUsers.css";
import { Select } from "antd";
import DiscussionFun from "../../functions/DiscussionFun";
import { Table } from 'antd';

const { Option } = Select;

const DiscussionUsers = () => {

    const {columns, data} = DiscussionFun();

  return (
    <div className="discussion-users">
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
      <div className="discussion-users-container">
        <Table columns={columns} dataSource={data} />
      </div>
    </div>
  );
};

export default DiscussionUsers;
