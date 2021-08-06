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
import { connect } from "react-redux";
import { useEffect } from "react";
import { initializeWeb3, web3 } from "./constants/constants";
import { saveUserData, setProfileData } from "./redux/actions/user";
import { CheckCircleOutlineOutlined } from "@material-ui/icons";
import { useState } from "react";
import ErrorDialog from "./components/Dialogs/ErrorDialog";
import ipfs from "./functions/Ipfs";
import { profileContract } from "./contractDetails/profile";
import { contents } from "./functions/ipfsContents";
function App(props) {
  const [error, setError] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  useEffect(() => {
    onChangeAccount();
    initializeWeb3();
    checkNetWorkId();
  }, []);

  const checkNetWorkId = async () => {
    const networkId = await web3.eth.net.getId();
    if (networkId != 4 && networkId != 5777) {
      setError(true);
      setModalVisible(true);
    } else {
      setError(false);
    }
  };

  const onChangeAccount = async () => {
    window.ethereum.on("accountsChanged", async function (accounts) {
      const accounts2 = await web3.eth.getAccounts();
      let balance = 0;
      if (accounts.length > 0) {
        balance = await web3.eth.getBalance(accounts[0]);
        balance = web3.utils.fromWei(balance, "ether");
        balance = parseFloat(balance).toFixed(4);
      }
      props.setUserData({ account: accounts2[0], balance });

      let contract = await profileContract();
      const d = await contract.methods
        .getIpfsHashByAddress(accounts2[0])
        .call();
      const ipfsData = await contents(d);
      const jsonData = JSON.parse(ipfsData);
      props.saveProfileData(jsonData);
      window.location.reload();
    });
    window.ethereum.on("networkChanged", function (networkId) {
      if (networkId != 4 && networkId != 5777) {
        setModalVisible(true);
        setError(true);
      } else {
        setError(false);
      }
    });
  };

  const hideDialog = () => {
    setModalVisible(false);
  };

  return (
    <div className="App">
      <Router>
        <Route path="/" exact>
          <Navbar />
          {error == false ? <Home /> : null}
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
      <ErrorDialog
        modalVisible={modalVisible}
        toggleDialog={() => hideDialog()}
      />
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    setUserData: (data) => dispatch(saveUserData(data)),
    saveProfileData: (data) => dispatch(setProfileData(data)),
  };
};

export default connect(null, mapDispatchToProps)(App);
