import React from 'react'
import SearchListFun from '../../../functions/SearchListFun'
import CollectionItem from '../../SearchItems/CollectionItem'

const CollectionItemList = () => {

    const { collections } = SearchListFun();

    return (
        <div>
            {collections.map((item, index) => (
                <CollectionItem card={item} key={item.url+index} />
            ))}
        </div>
    )
}

export default CollectionItemList
