import React, { Component } from "react";
import AllItemList from "../../components/ExploreFilter/AllItemList";
import ExploreFilter from "../../components/ExploreFilter/ExploreFilter";
import CollectionList from "../../components/ItemList/Collection/CollectionList";
import FeatureList from "../../components/ItemList/Feature/FeatureList";
import HotBidList from "../../components/ItemList/HotBid/HotBidList";
import SellerList from "../../components/ItemList/Seller/SellerList";
import "./Home.css";

class Home extends Component {
  render() {
    return (
      <div className="home">
        <FeatureList />
        <ExploreFilter />
        <SellerList />
        <HotBidList />
        <CollectionList />
        {/* <AllItemList /> */}
      </div>
    );
  }
}

export default Home;
