import React from "react";
import "./DiscussionNav.css";
import Logo from "../../assets/png/logo.png";
import { Link, useHistory } from "react-router-dom";
import { SearchOutlined, MenuOutlined } from "@ant-design/icons";
import { Dropdown, Modal } from "antd";
import DiscussionFun from "../../functions/DiscussionFun";
import LoginModal from "./Auth/LoginModal";
import SignupModal from "./Auth/SignupModal";

const menu = (items, goToDiscussionHome) => (
  <div className="discussion-nav-menu">
    <div className="discussion-nav-menu-top">
      <Link to="/discussion">
        <p>Home</p>
      </Link>
      <Link to="/discussion/badges">
        <p>Badges</p>
      </Link>
      <Link to="/discussion/users">
        <p>Users</p>
      </Link>
    </div>
    <div className="discussion-nav-menu-middle">
      <h4>Categories</h4>
      <div className="discussion-nav-menu-categories">
        {items.map((obj, index) => (
          <p onClick={goToDiscussionHome} key={index}>
            {obj.title} <span>(345)</span>
          </p>
        ))}
      </div>
    </div>
    <div className="discussion-nav-menu-bottom">
      <h4>About</h4>
      <h4>FAQ</h4>
    </div>
  </div>
);

const DiscussionNav = () => {
  const history = useHistory();

const { items, toggleModal, modalVisible , modalName, setModal} = DiscussionFun();

  const goToDiscussionSearch = () => {
    history.push("/discussion/search");
  };
  const goToDiscussionHome = () => {
    history.push("/discussion");
  };
  const goToHome = () => {
    history.push("/");
  };

  return (
    <div className="discussion-nav">
      <div className="discussion-nav-context">
        <div className="discussion-nav-logo">
          <img onClick={goToHome} src={Logo} alt="brand logo" />
        </div>
        <div className="discussion-nav-items">
          <Link to="/discussion" onClick={() => toggleModal("Login")}>Log In</Link>
          <Link to="/discussion" onClick={() => toggleModal("Signup")}>Sign Up</Link>
          <SearchOutlined onClick={goToDiscussionSearch} />
          <Dropdown
            onClick={() => {}}
            overlay={menu(items, goToDiscussionHome)}
            trigger={["click"]}
            placement="bottomRight"
          >
            <MenuOutlined />
          </Dropdown>
        </div>
      </div>
      <Modal
        title={modalName === "Login"? "Login": "Create New Account"}
        style={{ top: 50 }}
        visible={modalVisible}
        onOk={toggleModal}
        onCancel={toggleModal}
        // footer={[]}
        >
          {modalName === "Login"?
          <LoginModal setModal={setModal} />:
          <SignupModal setModal={setModal} />
          }
      </Modal>
    </div>
  );
};

export default DiscussionNav;
