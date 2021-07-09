import React from 'react'
import './PopularItemCard.css'

const PopularItemCard = ({card}) => {
    return (
        <div className="popular-item-card">
            <img src={card.url} alt={card.title} />
            <div className="popular-item-card-fade"></div>
            <h4>{card.title}</h4>
            <p><span>{card.sub}</span> {card.number} of {card.total}</p>
        </div>
    )
}

export default PopularItemCard
