import React from "react";
import PopularItemList from "../ItemList/PopularItem/PopularItemList";
import UserItemList from "../ItemList/UserItemList/UserItemList";
import CollectionItemList from "../ItemList/CollectionItemList/CollectionItemList";
import "./SearchDrop.css";
import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { useHistory } from "react-router";

const SearchMobile = ({setVisibleSearch}) => {
  const history = useHistory();
  const keyDownChange = (e) => {
    const key = e.keyCode;
    if(key === 13) {
      history.push('/search')
      setVisibleSearch(false)
    } 
  }

  return (
    <div className="search-drop">
      <div className="search-drop-header">
        <Input onKeyDown={keyDownChange} prefix={<SearchOutlined />} placeholder="Search here..." />
      </div>
      <div className="search-drop-context">
        <div className="search-drop-items">
          <h4 className="popular-item-text">Popular Items</h4>
          <div className="search-drop-item-list">
            <PopularItemList />
          </div>
        </div>
        <div className="search-drop-items">
          <h4 className="popular-item-text">Popular Sellers</h4>
          <div className="search-drop-item-list">
            <UserItemList />
          </div>
        </div>
        <div className="search-drop-items">
          <h4 className="popular-item-text">Popular Collections</h4>
          <div className="search-drop-item-list">
            <CollectionItemList />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchMobile;
