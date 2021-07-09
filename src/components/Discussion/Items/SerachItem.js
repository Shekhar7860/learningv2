import { Avatar } from 'antd'
import React from 'react'
import './SearchItem.css'

const SerachItem = ({item}) => {
    const { profile, title, comm, para } = item;
    return (
        <div className="discussion-search-item">
            <Avatar size="large" src={profile} alt="discussion item profile" />
            <div className="discussion-search-info">
                <h3>{title}</h3>
                <p>{comm}</p>
                <p className="discussion-search-para">{para}</p>
            </div>
        </div>
    )
}

export default SerachItem
