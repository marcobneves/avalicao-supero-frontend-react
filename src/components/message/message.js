
import React, { Component } from 'react';
import './message.css'

export default class Message extends Component {

    constructor(props) {
        super(props);
        this.state = {
            status: false,
        }
    }

    componentWillReceiveProps(props) {
        this.setState({ status: props.status })
    }

    render() {
        return (
            <div className="adjustmentTop">
                {this.state.status &&
                    <div className={`alert ${this.props.type}`} role="alert">
                        {this.props.text}
                    </div>
                }
            </div>
        )
    }

}