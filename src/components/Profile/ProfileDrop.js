import { Avatar, Switch } from "antd";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AutoPlayFun from "../../functions/AutoPlayFun";
import "./ProfileDrop.css";
import { connect } from "react-redux";
import { setLoggedIn } from "../../redux/actions/user";
import { web3 } from "../../constants/constants";

const ProfileDrop = ({
  toggleAutoplay,
  autoPlay,
  loggedOf,
  data,
  profileData,
}) => {
  const [account, setAccount] = useState("");
  const [balance, setBalance] = useState(0);
  const [icon, setIcon] = useState("");
  const [image, setImage] = useState("");
  const [name, setUserName] = useState("");
  useEffect(() => {
    setData();
  }, []);

  const setData = () => {
    const { user } = data;
    if (user.data.params != undefined) {
      setAccount(user.data.params[0].accounts[0]);
      setIcon(user.data.params[0].peerMeta.icons[0]);
    } else if (user.data.chainId != undefined) {
      setAccount(user.data.accounts[0]);
    } else {
      setAccount(user.data.account);
      setBalance(user.data.balance);
      console.log("dh", profileData);
      if (profileData) {
        setImage(profileData.file);
        setUserName(profileData.username);
      }
    }
  };
  // const getdata = async () => {
  //   const accounts = await web3.eth.getAccounts();
  //   if (accounts.length > 0) {
  //     setAccount(accounts[0]);
  //     let balance = await web3.eth.getBalance(accounts[0]);
  //     balance = web3.utils.fromWei(balance, "ether");
  //     setBalance(balance);
  //   }
  // };
  const { darkTheme, toggleDarkTheme } = AutoPlayFun();
  const disconnect = () => {
    loggedOf(false);
    localStorage.removeItem("loggedIn");
  };
  const changeSwitch = (e) => {
    toggleDarkTheme(e);
    if (e) {
      document.body.classList.add("dark-theme");
    } else {
      document.body.classList.remove("dark-theme");
    }
  };

  const changeAutoPlay = (e) => {
    toggleAutoplay();
    if (e) {
      const images = document.getElementsByClassName("collectible-img");
      let i = 0;
      for (i = 0; i < images.length; i++) {
        images[i].style.visibility = "visible";
      }
    } else {
      const images = document.getElementsByClassName("collectible-img");
      let i = 0;
      for (i = 0; i < images.length; i++) {
        images[i].style.visibility = "hidden";
      }
    }
  };

  return (
    <div className="profile-drop">
      <div className="profile-drop-header">
        <Avatar
          size="large"
          style={{ background: "#ead3ff", color: "#420080" }}
          src={image}
        >
          S
        </Avatar>
        <div className="profile-drop-header-context">
          <h4>{name}</h4>
          <p>{account}</p>
        </div>
      </div>
      <div className="profile-drop-account">
        <div className="profile-drop-header">
          <Avatar size="large">B</Avatar>
          <div className="profile-drop-header-context">
            <p>Balance</p>
            <p>
              <span>{balance} Ether</span> $0.00
            </p>
          </div>
        </div>
        <div className="profile-drop-header">
          <Avatar
            size="large"
            style={{ background: "#e0f7fa", color: "#420080" }}
          >
            B
          </Avatar>
          <div className="profile-drop-header-context">
            <p>Bidding Balance</p>
            <p>
              <span>{balance} Ether</span> $0.00
            </p>
          </div>
        </div>
      </div>
      <div className="profile-drop-manage">
        <button>Manage Funds</button>
      </div>
      <div className="profile-drop-menu">
        <div className="profile-drop-menu-item">
          <Link to="/my-items">
            <h3>My Socials</h3>
          </Link>
        </div>
        <div className="profile-drop-menu-item">
          <Link to="/my-items">
            <h3>Edit profile</h3>
          </Link>
        </div>
        <div className="profile-drop-menu-item">
          <h3>Autoplay</h3>
          <Switch checked={autoPlay} onChange={changeAutoPlay} size="small" />
        </div>
        <div className="profile-drop-menu-item">
          <h3>Dark theme</h3>
          <Switch checked={darkTheme} onChange={changeSwitch} size="small" />
        </div>
        <div className="profile-drop-menu-item" onClick={disconnect}>
          <h3>Disconnect</h3>
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    data: state,
    profileData: state.user.profileData,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loggedOf: (url) => dispatch(setLoggedIn(url)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileDrop);
