import React, { useState, useEffect } from "react";
import "./Navbar.css";
import Logo from "../../assets/png/logo.png";
import Identicon from "identicon.js";
import {
  BellFilled,
  CaretDownOutlined,
  InstagramFilled,
  MenuOutlined,
  PlusCircleOutlined,
  SearchOutlined,
  TwitterOutlined,
  WalletOutlined,
  YoutubeFilled,
} from "@ant-design/icons";
import { connect } from "react-redux";
import { Avatar, Button, Dropdown, Menu } from "antd";
import { Input } from "antd";
import { Link, useHistory } from "react-router-dom";
import SearchDrop from "../Search/SearchDrop";
import CreateDialogFun from "../../functions/CreateDialogFun";
import CreateDialog from "../CreateDialog/CreateDialog";
import ConnectDialog from "../ConnectDialog/ConnectDialog";
import ConnectDialogFun from "../../functions/ConnectDialogFun";
import NavDrawer from "./NavDrawer";
import NotificationDrop from "../Notification/NotificationDrop";
import MobileDrawerFun from "../../functions/MobileDrawerFun";
import SearchMobile from "../Search/SearchMobile";
import ProfileDrop from "../Profile/ProfileDrop";
import PinterestIcon from "@material-ui/icons/Pinterest";
import WalletDialog from "../Dialogs/WalletDialog";
import AutoPlayFun from "../../functions/AutoPlayFun";
import SocialDialog from "../ConnectDialog/SocialDialog";

const searchDrop = <SearchDrop />;
const searchMobile = (setVisibleSearch) => (
  <SearchMobile setVisibleSearch={setVisibleSearch} />
);
const notiMenu = <NotificationDrop />;
const profileMenu = (toggleAutoplay, autoPlay) => (
  <ProfileDrop toggleAutoplay={toggleAutoplay} autoPlay={autoPlay} />
);

function openPageLink(url) {
  window.open(url);
}

const menu = (
  <Menu onClick={() => {}}>
    <Menu.Item key="1">
      <Link to="/token">SNFT Token</Link>
    </Menu.Item>
    <Menu.Item key="2">
      <Link to="/discussion">Discussion</Link>
    </Menu.Item>
    <Menu.Item key="3">
      <a target="__blank" href="https://www.snapshot.org">
        Voting
      </a>
    </Menu.Item>
    <Menu.Item key="4">
      <a target="__blank" href="https://www.nolt.io">
        Suggested feature
      </a>
    </Menu.Item>
    <Menu.Item key="5">
      <a target="__blank" href="https://www.substack.com">
        Subscribe
      </a>
    </Menu.Item>
    <div className="nav-community-menu-social">
      <TwitterOutlined
        onClick={() => openPageLink("https://twitter.com/NftSocial")}
      />
      <InstagramFilled
        onClick={() =>
          openPageLink("https://www.instagram.com/social.nft.marketplace/")
        }
      />
      <YoutubeFilled
        onClick={() =>
          openPageLink("https://www.pinterest.ca/SocialNFTmarketplace/_saved/")
        }
      />
      <PinterestIcon
        onClick={() =>
          openPageLink("https://www.pinterest.ca/SocialNFTmarketplace/_saved/")
        }
      />
    </div>
  </Menu>
);

const Navbar = (props) => {
  const history = useHistory();
  const [selected, setSelected] = useState(1);
  const [visibleSearch, setVisibleSearch] = useState(false);
  const [logged, setLogged] = useState(false);
  const [socialLogged, setSocialLogged] = useState(false);

  useEffect(() => {
    // console.log("prrr", props);
    if (props.data == true) {
      setLogged(true);
    }
  }, [props.data]);
  const selecteHeaderItem = (key) => {
    setSelected(key);
  };

  const goToHomePage = () => {
    selecteHeaderItem(1);
    history.push("/");
  };

  const { showCreateDialog, showDialog } = CreateDialogFun();
  const {
    dialogVisible,
    showConnectDialog,
    toggleWalletDialog,
    walletDialog,
    socialDialog,
    toggleSocialDialog,
  } = ConnectDialogFun();
  const { showDrawer, showMobileDrawer } = MobileDrawerFun();
  const { toggleAutoplay, autoPlay } = AutoPlayFun();
  const { loggedIn } = props;
  // const goToDarkMode = () => {
  //   document.body.classList.toggle("dark-theme");
  // };

  return (
    <div className="navbar">
      <div className="nav-context">
        <div className="nav-logo">
          <img onClick={goToHomePage} src={Logo} alt="learning logo" />
        </div>
        <div className="nav-items">
          <ul>
            <li onClick={() => selecteHeaderItem(1)}>
              <Link className={`${selected === 1 ? "active" : ""}`} to="/">
                Explore
              </Link>
            </li>
            <li onClick={() => selecteHeaderItem(2)}>
              <Link
                className={`${selected === 2 ? "active" : ""}`}
                to="/my-items"
              >
                My Socials
              </Link>
            </li>
            <li onClick={() => selecteHeaderItem(3)}>
              <Link
                className={`${selected === 3 ? "active" : ""}`}
                to="/following"
              >
                Following
              </Link>
            </li>
            <li onClick={() => selecteHeaderItem(4)}>
              <Link
                className={`${selected === 4 ? "active" : ""}`}
                to="/activity"
              >
                Activity
              </Link>
            </li>
            <li onClick={() => selecteHeaderItem(5)}>
              <Link
                className={`${selected === 5 ? "active" : ""}`}
                to="/how-it-work"
              >
                How It Work
              </Link>
            </li>
            <li>
              <Dropdown
                onClick={() => {}}
                overlay={menu}
                trigger={["click"]}
                placement="bottomCenter"
              >
                <div className="navbar-community">
                  <p>Community</p>
                  <CaretDownOutlined />
                </div>
              </Dropdown>
            </li>
          </ul>
        </div>
        <div className="nav-search">
          <Dropdown
            placement="bottomCenter"
            overlay={searchDrop}
            trigger={["click"]}
          >
            <Input
              placeholder="Search by collection, collectible or creator"
              allowClear
              suffix={<SearchOutlined style={{ color: "#595959" }} />}
            />
          </Dropdown>
        </div>
        <div className="nav-actions">
          <div className="tablet-search">
            <Dropdown
              placement="bottomCenter"
              overlay={searchMobile}
              trigger={["click"]}
            >
              <SearchOutlined />
            </Dropdown>
          </div>
          {!loggedIn ? (
            <div className="nav-actions-container">
              <Button
                onClick={socialLogged ? showCreateDialog : toggleSocialDialog}
                icon={<PlusCircleOutlined />}
              >
                Create
              </Button>
              <Button onClick={showConnectDialog} icon={<WalletOutlined />}>
                Connect wallet
              </Button>
            </div>
          ) : (
            <div className="nav-actions-container">
              <Button onClick={showCreateDialog} icon={<PlusCircleOutlined />}>
                Create
              </Button>
              <div className="nav-bell-icon">
                <Dropdown
                  onClick={() => {}}
                  overlay={notiMenu}
                  trigger={["click"]}
                  placement="bottomLeft"
                >
                  <BellFilled
                    style={{ color: "#595959", fontSize: "1.2rem" }}
                  />
                </Dropdown>
              </div>
              <div className="navbar-account">
                <Dropdown
                  onClick={() => {}}
                  overlay={profileMenu(toggleAutoplay, autoPlay)}
                  trigger={["click"]}
                  placement="bottomLeft"
                >
                  <img
                    src={`data:image/png;base64,${new Identicon(
                      "asdhf9878fa8sdf78a7d4c2xewcwtr4r",
                      30
                    ).toString()}`}
                    alt="navbar account profile"
                  />
                </Dropdown>
              </div>
            </div>
          )}
        </div>
        <div className="mobile-drawer">
          <Dropdown
            placement="bottomCenter"
            overlay={searchMobile(setVisibleSearch)}
            trigger={["click"]}
            onVisibleChange={(e) => setVisibleSearch(e)}
            visible={visibleSearch}
          >
            <SearchOutlined />
          </Dropdown>
          <MenuOutlined onClick={showMobileDrawer} />
          {loggedIn && (
            <Dropdown
              onClick={() => {}}
              overlay={notiMenu}
              trigger={["click"]}
              placement="bottomLeft"
            >
              <BellFilled style={{ color: "#595959", fontSize: "1.2rem" }} />
            </Dropdown>
          )}
          {loggedIn && (
            <div className="navbar-account">
              <Dropdown
                onClick={() => {}}
                overlay={profileMenu}
                trigger={["click"]}
                placement="bottomLeft"
              >
                <img
                  src={`data:image/png;base64,${new Identicon(
                    "asdhf9878fa8sdf78a7d4c2xewcwtr4r",
                    30
                  ).toString()}`}
                  alt="navbar account profile"
                />
              </Dropdown>
            </div>
          )}
        </div>
      </div>
      <NavDrawer
        showConnectDialog={showConnectDialog}
        showCreateDialog={showCreateDialog}
        showDrawer={showDrawer}
        showMobileDrawer={showMobileDrawer}
        showSocialDialog={toggleSocialDialog}
      />
      <SocialDialog
        modalVisible={socialDialog}
        toggleDialog={toggleSocialDialog}
        setSocialLogged={setSocialLogged}
        toggleCreate={showCreateDialog}
      />
      <CreateDialog
        modalVisible={showDialog}
        showCreateDialog={showCreateDialog}
      />
      <ConnectDialog
        setLogged={true}
        modalVisible={dialogVisible}
        showConnectDialog={showConnectDialog}
        toggleWalletDialog={toggleWalletDialog}
      />
      <WalletDialog
        modalVisible={walletDialog}
        toggleDialog={toggleWalletDialog}
      />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    loggedIn: state.user,
  };
};

export default connect(mapStateToProps, null)(Navbar);
