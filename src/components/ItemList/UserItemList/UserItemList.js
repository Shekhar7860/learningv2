import React from 'react'
import SearchListFun from '../../../functions/SearchListFun'
import UserItem from '../../SearchItems/UserItem'

const UserItemList = () => {

    const { users } = SearchListFun();

    return (
        <div>
            {users.map((item, index) => (
                <UserItem card={item} key={item.url+index} />
            ))}
        </div>
    )
}

export default UserItemList
