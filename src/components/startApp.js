
import React, { Component } from 'react';

import Search from './bookSearch/search'
import List from './bookList/list'

export default class StartApp extends Component {

    constructor(props) {
        super(props);
        this.state = {
            items: []
        }
    }

    loadingBook = (data) => {
        this.setState({ items: data })
    }

    render() {
        return (
            <div>
                <Search loadingBook={this.loadingBook}/>
                <List items={this.state.items.books} totalCount={this.state.items.totalCount} />
            </div>

        )
    }

}