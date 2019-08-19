
import React, { Component } from 'react';
import Message from '../message/message'
import Details from '../bookDetails/details';
import Pagination from '../pagination/pagination';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


class List extends Component {

    constructor(props) {
        super(props);
        this.state = {
            books: [],
            loading: false,
            detailsShow: false,
            totalCount: null,
            detailsData: {},
            pageOfBooks: 1,
            error: false
        }
    }

    /** Load after render */
    componentDidMount() {
        if (this.props.items && this.props.items.lenght > 0) {
            this.setState({ books: this.props.items })
            this.setState({ totalCount: this.props.totalCount })
        } else {
            this.resetVariables();
            this.listBook();
        }
    }

    resetVariables = () => {
        this.setState({ pageOfBooks: 1 })
    }

    componentDidUpdate(prevProps, prevState) {
        // reset page if items array has changed
        if (this.props.items !== prevProps.items) {
            this.setState({ totalCount: this.props.totalCount })
            this.setState({ books: this.props.items })
        }
    }

    /** Request initial for API */
    listBook = () => {

        /** Get atributes store  redux*/
        const { search, searchType, yearsStart, yearsEnd } = this.props;

        let link = 'http://localhost:4000'
        // let link = 'https://book-control-supero.herokuapp.com'
        let url = `${link}/filter?page=${this.state.pageOfBooks}&yearsStart=${yearsStart}&yearsEnd=${yearsEnd}&search=${search}&searchType=${searchType}`;
       


        this.loading(true);
        fetch(url).then(response => {
            return response.json();
        })
            .then(data => {
                this.setState({ books: data.books })
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

    /** Show details book */
    bookDetails = (data) => {
        this.setState({ detailsData: data })
        this.setState({ detailsShow: true })
    }

    /** Hidden details book */
    hiddenDetails = () => {
        this.setState({ detailsData: {} })
        this.setState({ detailsShow: false })
    }

    /** Update loader pagination */
    onChangePage = (pageOfBooks) => {
        if (pageOfBooks != this.state.pageOfBooks) {
            this.setState({ pageOfBooks: pageOfBooks }, () => {
                this.listBook()
            });
        }
    }

    render() {
        return (
            <div>
                {/* Loading data */}
                <Message status={this.state.loading} text="CARREGANDO..." type="alert-warning" />

                {/* Loading Error server */}
                <Message status={this.state.error} text="Erro de servidor, entre em contato com o suporte!" type="alert-danger" />

                {/* Loading no record data */}
                {!this.state.books.length && !this.state.error && !this.state.loading &&
                    <Message status={true} text="Nenhuma informação encontrada" type="alert-danger" />
                }

                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th scope="col">Livro</th>
                            <th scope="col">Autor</th>
                            <th scope="col">Editora</th>
                            <th scope="col">Ano</th>
                            <th scope="col" className="text-center">Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.books && this.state.books.map((book, index) => {
                            return (
                                <tr key={index}>
                                    <td>
                                        <p>{book.name}</p>
                                        <p>{`(${book.isbn})`}</p>
                                    </td>
                                    <td>{book.author}</td>
                                    <td>{book.publishing}</td>
                                    <td>{book.years}</td>
                                    <td className="text-center"><a href="#" onClick={() => this.bookDetails(book)}>Datalhes</a></td>
                                </tr>
                            )
                        })}

                    </tbody>
                </table>


                {/* Details  component*/}
                <Details hiddenDetails={this.hiddenDetails} show={this.state.detailsShow} book={this.state.detailsData} />


                {/* Pagination loading */}
                {!this.state.loading &&
                    <Pagination pageCurrent={this.state.pageOfBooks} items={this.state.totalCount} onChangePage={this.onChangePage} />
                }

            </div>

        )
    }

}

const mapStateToProps = store => ({
    search: store.UpdateFilterReducer.search,
    searchType: store.UpdateFilterReducer.searchType,
    yearsStart: store.UpdateFilterReducer.yearsStart,
    yearsEnd: store.UpdateFilterReducer.yearsEnd

});


export default connect(mapStateToProps)(List);
