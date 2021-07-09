import { Empty } from 'antd'
import React from 'react'
import './NotificationDrop.css'

const NotificationDrop = () => {
    return (
        <div className="notification-drop">
            <div className="notification-header">
                <h3>Notifications</h3>
                <button>Subscribe</button>
            </div>
            <div className="notification-body">
                <Empty />
            </div>
            <div className="notification-footer">
                <button>See All</button>
            </div>
        </div>
    )
}

export default NotificationDrop
