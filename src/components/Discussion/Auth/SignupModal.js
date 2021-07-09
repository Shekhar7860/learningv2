import { Button, Input } from 'antd'
import React from 'react'
import './ModalStyle.css'
import { LockFilled } from '@ant-design/icons';

const SignupModal = ({setModal}) => {
    return (
        <div className="login-modal">
            <div className="login-modal-item">
                <p>Email</p>
                <Input />
                <p className="some-tag">Never shown to the public</p>
            </div>
            <div className="login-modal-item">
                <p>Username</p>
                <Input />
                <p className="some-tag">Unique, no spaces, short</p>
            </div>
            <div className="login-modal-item">
                <p>Name</p>
                <Input />
                <p className="some-tag">Your full name (optional)</p>
            </div>
            <div className="login-modal-item">
                <p>Password</p>
                <Input placeholder="******" />
                <p className="some-tag">at least 10 characters</p>
            </div>
            <div className="login-modal-footer">
                <Button type="primary" icon={<LockFilled />} >Create New Account</Button>
                <Button onClick={() => setModal("Login")} >Login</Button>
            </div>
            <p>By registering, you agree to the <span>privacy policy</span> and <span>terms of service.</span></p>
        </div>
    )
}

export default SignupModal
