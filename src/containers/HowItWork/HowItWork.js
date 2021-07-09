import React, { Component } from 'react'
import HowContent from '../../components/HotItWork/HowContent'
import HowNav from '../../components/HotItWork/HowNav'
import './HowItWork.css'

class HowItWork extends Component {
    render() {
        return (
            <div className="how-it-work">
                <HowNav />
                <HowContent />
            </div>
        )
    }
}

export default HowItWork
