import React from 'react'
import SellFun from '../../functions/SellFun'
import OwnerItem from './Item/OwnerItem';

const OwnersList = () => {

    const { ownerList } = SellFun();

    return (
        <div>
            {ownerList.map((info, index) => (
                <OwnerItem item={info} key={info.profile+index} />
            ))}        
        </div>
    )
}

export default OwnersList
