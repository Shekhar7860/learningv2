import React from 'react'
import SearchListFun from '../../../functions/SearchListFun'
import PopularItemCard from '../../Cards/PopularItemCard'
import './PopularItemList.css'

const PopularItemList = () => {

    const { items } = SearchListFun();

    return (
        <div className="popular-item-list">
            {
                items.map((item, index) => (
                    <PopularItemCard card={item} key={item.url+index} />
                ))
            }
        </div>
    )
}

export default PopularItemList
