
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
            detailsData: {},
            pageOfBooks: [],
            error: false
        }
    }

    /** Load after render */
    componentDidMount() {
        this.listBook();
    }

    /** Request initial for API */
    listBook = () => {
        let url = "http://5d123a8084e9060014576aeb.mockapi.io/books";
        this.loading(true);
        fetch(url).then(response => {
            return response.json();
        })
            .then(data => {
                this.setState({ books: data })
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
        this.setState({ pageOfBooks: pageOfBooks });

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

                        {this.state.pageOfBooks && this.state.pageOfBooks.map((book, index) => {
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
                    <Pagination items={this.state.books} onChangePage={this.onChangePage} />
                }

            </div>

        )
    }

}