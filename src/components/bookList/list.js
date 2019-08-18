
import React, { Component } from 'react';
import Load from '../loading/load'
import Details from '../bookDetails/details';
import Pagination from '../pagination/pagination';

export default class List extends Component {

    constructor() {
        super();
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
    componentWillMount() {
        this.listBook();
    }

    /** Request initial for API */
    listBook = () => {
        let url = `http://localhost:4000/books?page=${this.state.pageOfBooks}`;
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
        if(pageOfBooks != this.state.pageOfBooks){
            this.setState({ pageOfBooks: pageOfBooks },() => {
                this.listBook()
            });
        }
    }

    render() {
        return (
            <div>
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

                {/* Loading Error server */}
                {this.state.error &&
                    <div className="alert alert-danger" role="alert">
                        Erro de servidor, entre em contato com o suporte!
                    </div>
                }

                {/* Loading  component*/}
                <Load status={this.state.loading} />
                <Details hiddenDetails={this.hiddenDetails} show={this.state.detailsShow} book={this.state.detailsData} />


                {/* Pagination loading */}
                {!this.state.loading &&
                    <Pagination pageCurrent={this.state.pageOfBooks} items={this.state.totalCount} onChangePage={this.onChangePage} />
                }

            </div>

        )
    }

}