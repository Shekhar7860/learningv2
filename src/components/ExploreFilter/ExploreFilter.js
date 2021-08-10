import React, { useEffect, useState } from "react";
import FilterFun from "../../functions/FilterFun";
import "./ExploreFilter.css";
import { getCreators } from "../../redux/actions/creators";
import { connect } from "react-redux";
const ExploreFilter = ({ getCreatorsList, userdata }) => {
  const { items, data } = FilterFun();
  const [creators, setCreators] = useState([]);
  useEffect(() => {
    if (userdata.user.data != null && userdata.user.data != undefined) {
      getCreatorsList(userdata.user.data.account).then((response) => {
        setCreators(response.data);
      });
    }
  }, []);
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
        {items.map((item, index) => (
          <div className="explore-item" key={index}>
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

const mapDispatchToProps = (dispatch) => {
  return {
    getCreatorsList: (address) => dispatch(getCreators(address)),
  };
};
const mapStateToProps = (state) => {
  return {
    userdata: state,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ExploreFilter);
