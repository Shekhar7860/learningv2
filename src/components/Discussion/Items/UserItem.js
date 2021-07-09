import { Avatar } from 'antd'
import React from 'react'
import "./UserItem.css"

const UserItem = () => {
    return (
        <div className="user-item">
            <div className="user-item-left">
                <Avatar size="large" src="https://gov.rarible.com/user_avatar/gov.rarible.com/duales/45/3995_2.png" alt="user item profile" />
                <div className="user-item-info">
                    <h2>Verified Badge - Declined</h2>
                    <p>Technical upgrades</p>
                </div>
            </div>
            <div className="user-item-right">
                <p>27</p>
                <p>24m</p>
            </div>
        </div>
    )
}

export default UserItem
