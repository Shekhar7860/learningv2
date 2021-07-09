import React, { Component } from 'react'
import AllItemList from '../../components/ExploreFilter/AllItemList'
import Filter from '../../components/Filter/Filter'
import './Following.css'

class Following extends Component {
    render() {
        return (
            <div className="following-container">
                <div className="following-container-header">
                    <h1>Following</h1>
                    <Filter />
                </div>
                <AllItemList />
            </div>
        )
    }
}

export default Following
