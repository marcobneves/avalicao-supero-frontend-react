
import React, { Component } from 'react';
import logo from '../../image/supero.svg'
import Message from '../message/message'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateSearch, updateType, updateYearsStart, updateYearsEnd } from '../../actions';


const logoSize = {
    width: '150px'
}

class Search extends Component {

    constructor() {
        super();
        this.state = {
            pageOfBooks: 1,
            search: '',
            searchType: 1,
            yearsStart: '',
            yearsEnd: '',
            totalCount: '',
            loading: false
        }
    }

    /** Request filter */
    searchRequest = () => {
        // let link = 'http://192.168.1.7:4000'
        let link = 'https://book-api-supero.herokuapp.com'

        let url = `${link}/filter?page=${this.state.pageOfBooks}&yearsStart=${this.state.yearsStart.trim()}&yearsEnd=${this.state.yearsEnd.trim()}&search=${this.state.search.trim()}&searchType=${this.state.searchType}`;

        this.loading(true);
        fetch(url).then(response => {
            return response.json();
        })
            .then(data => {
                /** Update data */
                this.props.loadingBook(data)
                this.setState({ totalCount: data.totalCount })
                this.loading(false);
            })
            .catch(error => {
                this.loading(false);
                this.setState({ error: true });
            })
    }

    /** Control state loading */
    loading = (status) => {
        this.setState({ loading: status })
    }

    /** Set forms  values*/

    setSearch = (event) => {
        this.setState({ search: event.target.value })
    }

    setYearsStart = (event) => {
        this.setState({ yearsStart: event.target.value })
    }

    setYearsEnd = (event) => {
        this.setState({ yearsEnd: event.target.value })
    }

    setSearchType = (event) => {
        this.setState({ searchType: event.target.value })
    }


    /** Update store redux */
    updateStatesStore = () => {
        const { updateSearch, updateType, updateYearsStart, updateYearsEnd } = this.props;

        /** Validation string*/
        this.setState({ search: this.state.search.trim() })
        this.setState({ yearsStart: this.state.yearsStart.trim() })
        this.setState({ yearsEnd: this.state.yearsEnd.trim() })

        updateSearch(this.state.search);
        updateType(this.state.searchType);
        updateYearsStart(this.state.yearsStart);
        updateYearsEnd(this.state.yearsEnd);
        this.searchRequest();
    }

    handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            this.updateStatesStore();
        }
    }

    render() {
        return (
            <div>
                <div className="row  pt-md-2">
                    <div className="col-2">
                        <img src={logo} className="App-logo" style={logoSize} alt="logo" />
                    </div>
                    <div className="col">
                        <div className="input-group form-inline">
                            <select clclass="form-control form-control-lg" onChange={this.setSearchType}>
                                <option value="1">Titulo</option>
                                <option value="2">Autor</option>
                                <option value="3">ISBN</option>
                            </select>
                            <input
                                onKeyDown={this.handleKeyPress}
                                value={this.state.search}
                                onChange={this.setSearch}
                                type="text"
                                className="form-control form-control-lg"
                                placeholder="Buscar..."
                                aria-describedby="button-addon2" />
                            <div className="input-group-append">
                                <button
                                    onClick={this.updateStatesStore}
                                    className="btn btn-outline-secondary"
                                    type="button"
                                    id="button-addon2">Buscar</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row d-flex align-items-center">
                    <div className="col-6 pt-md-2">
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text">Filtrar ano de publicação</span>
                            </div>
                            <input
                                onKeyDown={this.handleKeyPress}
                                value={this.state.yearsStart}
                                onChange={this.setYearsStart}
                                type="text"
                                placeholder="2019"
                                className="form-control form-control-lg" />

                            <input
                                onKeyDown={this.handleKeyPress}
                                value={this.state.yearsEnd}
                                onChange={this.setYearsEnd}
                                type="text"
                                placeholder="2020"
                                className="form-control form-control-lg" />
                        </div>
                    </div>
                </div>

                {/* Loading data */}
                <Message status={this.state.loading} text="CARREGANDO..." type="alert-warning" />
            </div>

        )
    }

}

const mapStateToProps = store => ({
    search: store.UpdateFilterReducer.search,
    totalCount: store.UpdateFilterReducer.totalCount,


});

const mapDispatchToProps = dispatch =>
    bindActionCreators({ updateSearch, updateType, updateYearsStart, updateYearsEnd }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Search);
