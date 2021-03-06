import React from 'react'
import SellFun from '../../functions/SellFun'
import OwnerItem from './Item/OwnerItem';

const HistoryList = () => {

    const { historyList } = SellFun();

    return (
        <div>
            {historyList.map((info, index) => (
                <OwnerItem item={info} key={info.profile+index} />
            ))}        
        </div>
    )
}

export default HistoryList
