import React from "react";
import PopularItemList from "../ItemList/PopularItem/PopularItemList";
import UserItemList from "../ItemList/UserItemList/UserItemList";
import CollectionItemList from "../ItemList/CollectionItemList/CollectionItemList";
import "./SearchDrop.css";
import { useHistory } from "react-router";
import FilterFun from "../../functions/FilterFun";

const SearchDrop = () => {
  const history = useHistory();
  const goToSearchPage = () => {
    history.push("/search");
  };

  const { items } = FilterFun();

  return (
    <div className="search-drop">
      <div className="search-drop-header">
        <h4 className="search-drop-search-text">
          Search results for <span>Hello</span>
        </h4>
        <button onClick={goToSearchPage}>All Results</button>
      </div>
      <div className="search-drop-items">
          <h4 className="popular-item-text">Categories</h4>
          {items.map((item) => (
          <div className="search-explore-item">
            <p>{item.title}</p>
          </div>
        ))}
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

export default SearchDrop;
