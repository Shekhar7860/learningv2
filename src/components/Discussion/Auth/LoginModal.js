import { Button, Input } from "antd";
import React, { useState } from "react";
import "./ModalStyle.css";
import { LockFilled } from "@ant-design/icons";

const LoginModal = ({ setModal }) => {
  const [forgot, setForgot] = useState(false);

  return (
    <div>
      {forgot ? (
        <div className="login-modal-item">
            <p>Enter your username or email address, and we'll send you a password reset email.</p>
            <Input placeholder="email or username" />
            <div className="login-modal-footer">
            <Button type="primary">
              Reset Password
            </Button>
          </div>

        </div>
      ) : (
        <div className="login-modal">
          <div className="login-modal-item">
            <p>User</p>
            <Input placeholder="email or username" />
          </div>
          <div className="login-modal-item">
            <p>Password</p>
            <Input placeholder="******" />
          </div>
          <p onClick={() => setForgot(true)} className="forgot-text">I forgot my password?</p>
          <div className="login-modal-footer">
            <Button type="primary" icon={<LockFilled />}>
              Login
            </Button>
            <Button onClick={() => setModal("Signup")}>
              Create New Account
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default LoginModal;
