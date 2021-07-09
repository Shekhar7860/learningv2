import React from 'react'
import SellFun from '../../functions/SellFun'
import OwnerItem from './Item/OwnerItem';

const BidList = () => {

    const { bidsList } = SellFun();

    return (
        <div>
            {bidsList.map((info, index) => (
                <OwnerItem item={info} key={info.profile+index} />
            ))}        
        </div>
    )
}

export default BidList
