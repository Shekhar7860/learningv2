import React from "react";
import "./CategoryItem.css";

const CategoryItem = ({ item }) => {
    const {title, para, sub} = item;
  return (
    <div className="category-item">
      <div className="category-left">
        <h1>{title}</h1>
        <p>{para}</p>
      </div>
      <p className="category-sub">{sub}</p>
    </div>
  );
};

export default CategoryItem;
