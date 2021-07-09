import React from 'react'
import './Badge.css'

const Badge = ({item}) => {
    const {title, para, count, badge} = item;
    return (
        <div className="badge-item">
            <img src={badge} alt="new badge" />
            <div className="badge-item-content">
                <h2>{title}</h2>
                <p>{para}</p>
            </div>
            <p className="badge-count">{count}</p>
        </div>
    )
}

export default Badge
