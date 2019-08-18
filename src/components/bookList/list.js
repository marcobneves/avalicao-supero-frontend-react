
import React, { Component } from 'react';
import Load from '../loading/load'
import Details from '../bookDetails/details';


export default class List extends Component {

    constructor() {
        super();
        this.state = {
            books: [],
            loading: false,
            detailsShow: false,
            detailsData: {}
        }
    }


    componentDidMount() {
        this.listBook();
    }

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
                this.setState({ error: true });
            })
    }

    loading = (status) => {
        this.setState({ loading: status })
    }

    bookDetails = (data) => {
        this.setState({ detailsData: data })
        this.setState({ detailsShow: true })
    }

    render() {
        return (
            <div>
                {/* Loading  component*/}
                <Load status={this.state.loading} />
                <Details show={this.state.detailsShow} book={this.state.detailsData} />

                <table class="table table-bordered table-striped">
                    <thead class="thead-dark">
                        <tr>
                            <th scope="col">Livro</th>
                            <th scope="col">Autor</th>
                            <th scope="col">Editora</th>
                            <th scope="col">Ano</th>
                            <th scope="col">Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.books.map((book, index) => {
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

                {/* load */}
                {!this.state.loading &&

                    <nav aria-label="Page navigation">
                        <ul class="pagination justify-content-center">
                            <li class="page-item"><a class="page-link" href="#">Anterior</a></li>
                            <li class="page-item"><a class="page-link" href="#">1</a></li>
                            <li class="page-item"><a class="page-link" href="#">2</a></li>
                            <li class="page-item"><a class="page-link" href="#">3</a></li>
                            <li class="page-item"><a class="page-link" href="#">Próxima</a></li>
                        </ul>
                    </nav>
                }

            </div>

        )
    }

}