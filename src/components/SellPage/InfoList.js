import React from 'react'
import SellFun from '../../functions/SellFun'
import OwnerItem from './Item/OwnerItem';

const InfoList = () => {

    const { infoList } = SellFun();

    return (
        <div>
            {infoList.map((info, index) => (
                <OwnerItem item={info} key={info.profile+index} />
            ))}        
        </div>
    )
}

export default InfoList
