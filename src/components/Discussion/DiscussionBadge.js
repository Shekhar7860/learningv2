import React from 'react'
import DiscussionFun from '../../functions/DiscussionFun'
import './DiscussionBadge.css'
import Badge from './Items/Badge';

const DiscussionBadge = () => {

    const { badgeItems } = DiscussionFun();

    return (
        <div className="discussion-badge">
            <h1>Badges</h1>
            <div className="discussion-badge-div">
                <h2>Getting Started</h2>
                <div className="discussion-badges-list">
                    {badgeItems['Getting Started'].map((item, index) => (
                        <Badge key={item.title+index} item={item} />
                    ))}
                </div>
            </div>
            <div className="discussion-badge-div">
                <h2>Community</h2>
                <div className="discussion-badges-list">
                    {badgeItems['Community'].map((item, index) => (
                        <Badge key={item.title+index} item={item} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default DiscussionBadge
