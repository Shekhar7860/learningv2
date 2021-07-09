import React, { Component } from "react";
import { Route } from "react-router";
import DiscussionBadge from "../../components/Discussion/DiscussionBadge";
import DiscussionMain from "../../components/Discussion/DiscussionMain";
import DiscussionNav from "../../components/Discussion/DiscussionNav";
import DiscussionSearch from "../../components/Discussion/DiscussionSearch";
import DiscussionUsers from "../../components/Discussion/DiscussionUsers";

class Discussion extends Component {
  render() {
    return (
      <div>
        <DiscussionNav />
        <Route path="/discussion" exact>
          <DiscussionMain />
        </Route>
        <Route path="/discussion/search">
          <DiscussionSearch />
        </Route>
        <Route path="/discussion/badges">
          <DiscussionBadge />
        </Route>
        <Route path="/discussion/users">
          <DiscussionUsers />
        </Route>
      </div>
    );
  }
}

export default Discussion;
