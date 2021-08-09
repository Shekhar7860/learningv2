import {
  CopyOutlined,
  EllipsisOutlined,
  GlobalOutlined,
  ShareAltOutlined,
  SettingFilled,
} from "@ant-design/icons";
import React, { useEffect, useState } from "react";
import "./MyHeader.css";
import ReadMoreReact from "read-more-react";
import { useHistory } from "react-router";
import { Dropdown, Menu } from "antd";
import DialogFun from "../../functions/DialogFun";
import ReportDialog from "../Dialogs/ReportDialog";
import ThanksDialog from "../Dialogs/ThanksDialog";
import {
  EmailShareButton,
  EmailIcon,
  FacebookShareButton,
  FacebookIcon,
  TelegramShareButton,
  TelegramIcon,
  TwitterShareButton,
  TwitterIcon,
} from "react-share";
import ConnectDialogFun from "../../functions/ConnectDialogFun";
import SocialDialog from "../ConnectDialog/SocialDialog";
import { connect } from "react-redux";
const MyHeader = ({ data, profileData }) => {
  const history = useHistory();

  const [userState, setUserState] = useState(false);
  const [follow, setFollow] = useState(false);
  const [user, setUser] = useState(null);

  const goToEditPage = () => {
    history.push("/edit");
  };

  useEffect(() => {
    const state = history.location.state;
    if (state) {
      setUserState(true);
    } else {
      setUserState(false);
    }
    if (profileData) {
      setProfile(profileData.file);
    }
    setUser(data);
  }, []);

  const { toggleReportDialog, reportDialog, thanksDialog, toggleThanksDialog } =
    DialogFun();

  const { socialDialog, toggleSocialDialog } = ConnectDialogFun();
  const shareMenu = (
    <Menu onClick={() => {}}>
      <div className="social-share-body">
        <h3 className="social-share-title">Share link to this page</h3>
        <div className="social-share-tags">
          <TwitterShareButton
            url={`http://snft.com/post/`}
            title={`Sharing this NFT from socialNFT`}
            hashtag="SNFT"
          >
            <TwitterIcon round size={48} />
          </TwitterShareButton>
          <FacebookShareButton
            url={`http://snft.com/post/`}
            quote={`Sharing this NFT from socialNFT`}
            hashtag="SNFT"
          >
            <FacebookIcon round size={48} />
          </FacebookShareButton>
          <TelegramShareButton
            url={`http://snft.com/post/`}
            title={`Sharing this NFT from socialNFT`}
          >
            <TelegramIcon round size={48} />
          </TelegramShareButton>
          <EmailShareButton>
            <EmailIcon
              round
              size={48}
              url={`http://snft.com/post/`}
              subject={`Sharing this NFT from socialNFT`}
            />
          </EmailShareButton>
        </div>
      </div>
    </Menu>
  );

  const moreMenu = (toggleReportDialog) => (
    <Menu>
      <Menu.Item onClick={toggleReportDialog} key="1">
        Report page
      </Menu.Item>
    </Menu>
  );

  const [profile, setProfile] = useState("");

  const selectFile = () => {
    document.getElementById("my-file-cover").click();
  };

  const fileChange = (e) => {
    if (e.target.files[0]) {
      let reader = new FileReader();
      reader.onload = (e) => {
        setProfile(e.target.result);
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  return (
    <div className="my-header">
      <div className="my-header-cover">
        <img
          src={
            profile !== ""
              ? profile
              : "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Mount_Everest_as_seen_from_Drukair2_PLW_edit.jpg/1200px-Mount_Everest_as_seen_from_Drukair2_PLW_edit.jpg"
          }
          alt="my items cover"
        />
        <div className="edit-cover-container">
          {userState ? (
            ""
          ) : (
            <button onClick={selectFile} className="edit-cover-btn">
              Edit Cover
            </button>
          )}
          <input
            onChange={fileChange}
            type="file"
            name="my_file"
            id="my-file-cover"
          />
          <SettingFilled onClick={selectFile} />
        </div>
      </div>
      <div className="my-header-user-context">
        <img src={profile != "" ? profile : null} alt="my items user profile" />
        <div className="user-content-box">
          <div className="user-content">
            <h1>{user ? "Liza Willams" : ""}</h1>
            <div className="user-address">
              <h2>
                {user ? (user.user.data ? user.user.data.account : "") : ""}
              </h2>
              <CopyOutlined />
            </div>
            <ReadMoreReact
              text={`Background: Advisor is a boutique firm of financial and investment
              strategists, with a long history of helping their clients develop
              and act on plans to achieve their financial goals.`}
              min={70}
              ideal={150}
              max={220}
              readMoreText="Read more"
            />
            {/* <h4>
              Background: Advisor is a boutique firm of financial and investment
              strategists, with a long history of helping their clients develop
              and act on plans to achieve their financial goals.
            </h4> */}
            <p>
              <span>
                <GlobalOutlined />
              </span>{" "}
              www.musicworld.com
            </p>
          </div>
          <div className="user-setting-container">
            <div className="user-setting">
              {userState ? (
                <button
                  onClick={() => setFollow(!follow)}
                  className="edit-cover-btn"
                >
                  {follow ? "Following" : "Follow"}
                </button>
              ) : (
                <button onClick={goToEditPage}>Edit Profile</button>
              )}
              <Dropdown
                overlay={shareMenu}
                trigger={["click"]}
                placement="bottomCenter"
              >
                <ShareAltOutlined />
              </Dropdown>
              <Dropdown
                overlay={moreMenu(toggleReportDialog)}
                trigger={["click"]}
                placement="bottomCenter"
              >
                <EllipsisOutlined />
              </Dropdown>
            </div>
            <button onClick={toggleSocialDialog}>Connect to social</button>
          </div>
        </div>
      </div>
      <ReportDialog
        modalVisible={reportDialog}
        toggleDialog={toggleReportDialog}
        toggleThanksDialog={toggleThanksDialog}
      />
      <ThanksDialog
        modalVisible={thanksDialog}
        toggleDialog={toggleThanksDialog}
      />
      <SocialDialog
        modalVisible={socialDialog}
        toggleDialog={toggleSocialDialog}
        setSocialLogged={() => {}}
        toggleCreate={() => {}}
      />
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    data: state,
    profileData: state.user.profileData,
  };
};

export default connect(mapStateToProps, null)(MyHeader);
