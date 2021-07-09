import React from "react";
import FilterFun from "../../functions/FilterFun";
import "./ExploreFilter.css";

const ExploreFilter = () => {

  const { items, data } = FilterFun();

  return (
    <div className="explore-filter">
      <div className="explore-tag">
        <h1>
          Categories
          {/* <span>
            <img src={ExploreIcon} alt="explore" />
          </span> */}
        </h1>
      </div>
      <div className="explore-item-list">
        {items.map(item => (
        <div className="explore-item">
          <p>{item.title}</p>
        </div>
        ))}
        {/* <div className="explore-item">
          <p>Memes</p>
        </div>
        <div className="explore-item">
          <p>Selfie</p>
        </div>
        <div className="explore-item">
          <p>Motivational</p>
        </div>
        <div className="explore-item">
          <p>Quotes</p>
        </div>
        <div className="explore-item">
          <p>GIFs</p> 
        </div>
        */}
      </div>
      {/* <div className="explore-item-filter">
        <Filter />
      </div> */}
    </div>
  );
};

export default ExploreFilter;
