import "./App.css";
import "antd/dist/antd.css";
import Home from "./containers/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Route } from "react-router-dom";
import MyItems from "./containers/MyItems/MyItems";
import Following from "./containers/Following/Following";
import Activity from "./containers/Activity/Activity";
import TokenPage from "./containers/Token/TokenPage";
import Footer from "./components/Footer/Footer";
import Create from "./containers/Create/Create";
import EditProfile from "./containers/EditProfile/EditProfile";
import SearchPage from "./containers/SearchPage/SearchPage";
import HowItWork from "./containers/HowItWork/HowItWork";
import Support from "./containers/Support/Support";
import Discussion from "./containers/Discussion/Discussion";
import SellPage from "./containers/SellPage/SellPage";
import { useEffect } from "react";
import { initializeWeb3 } from "./constants/constants";

function App() {
  useEffect(() => {
    initializeWeb3();
  }, []);

  return (
    <div className="App">
      <Router>
        <Route path="/" exact>
          <Navbar />
          <Home />
          <Footer />
        </Route>
        <Route path="/my-items">
          <Navbar />
          <MyItems />
          <Footer />
        </Route>
        <Route path="/following">
          <Navbar />
          <Following />
          <Footer />
        </Route>
        <Route path="/activity">
          <Navbar />
          <Activity />
        </Route>
        <Route path="/token" exact>
          <Navbar />
          <TokenPage />
          <Footer />
        </Route>
        <Route path="/create/single">
          <Navbar />
          <Create type={"S"} />
          <Footer />
        </Route>
        <Route path="/create/multiple">
          <Navbar />
          <Create type={"M"} />
          <Footer />
        </Route>
        <Route path="/edit">
          <Navbar />
          <EditProfile />
          <Footer />
        </Route>
        <Route path="/token/:tokenId">
          <Navbar />
          <SellPage />
        </Route>
        <Route path="/search">
          <Navbar />
          <SearchPage />
        </Route>
        <Route path="/how-it-work">
          <HowItWork />
        </Route>
        <Route path="/support">
          <Support />
        </Route>
        <Route path="/discussion">
          <Discussion />
        </Route>
      </Router>
    </div>
  );
}

export default App;
