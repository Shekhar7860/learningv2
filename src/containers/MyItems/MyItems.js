import React, { Component } from 'react'
import MyContent from '../../components/MyItems/MyContent'
import MyHeader from '../../components/MyItems/MyHeader'
import './MyItems.css'

class MyItems extends Component {

    componentDidMount() {
        window.scrollTo(0, 0)
    }

    render() {
        return (
            <div className="my-items">
                <MyHeader />
                <MyContent />
            </div>
        )
    }
}

export default MyItems
