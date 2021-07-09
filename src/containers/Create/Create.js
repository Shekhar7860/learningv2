import React, { Component } from 'react'
import CreateMultiple from '../../components/Create/CreateMultiple'
import CreateSingle from '../../components/Create/CreateSingle'
import './Create.css'

class Create extends Component {
    render() {
        return (
            <div className="create-container">
                {this.props.type === "S"?
                <CreateSingle />:
                <CreateMultiple />
                }
            </div>
        )
    }
}

export default Create
