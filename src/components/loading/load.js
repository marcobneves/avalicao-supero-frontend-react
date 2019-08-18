
import React, { Component } from 'react';
import './load.css'

export default class Load extends Component {

    constructor(props) {
        super(props);
        this.state = {
            status: false
        }
    }

    componentWillReceiveProps(props) {
        this.setState({ status: props.status })
    }

    render() {
        return (
            <div className="adjustmentTop">
                {this.state.status &&
                    <div class="alert alert-warning" role="alert">
                        CARREGANDO...
                </div>
                }
            </div>
        )
    }

}