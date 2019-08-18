
import React, { Component } from 'react';

export default class List extends Component {

    constructor() {
        super();
        this.state = {
            books: [
                {
                    name: 'Pequeno Principe edição de bolso',
                    isbn: '8765434212345',
                    author: 'HapprCollins',
                    publishing: 'Antonio de Saint-Exupéry',
                    years: '2011'
                },
                {
                    name: 'Pequeno Principe edição de bolso',
                    isbn: '8765434212345',
                    author: 'HapprCollins',
                    publishing: 'Antonio de Saint-Exupéry',
                    years: '2011'
                },
                {
                    name: 'Pequeno Principe edição de bolso',
                    isbn: '8765434212345',
                    author: 'HapprCollins',
                    publishing: 'Antonio de Saint-Exupéry',
                    years: '2011'
                },
                {
                    name: 'Pequeno Principe edição de bolso',
                    isbn: '8765434212345',
                    author: 'HapprCollins',
                    publishing: 'Antonio de Saint-Exupéry',
                    years: '2011'
                },
                {
                    name: 'Pequeno Principe edição de bolso',
                    isbn: '8765434212345',
                    author: 'HapprCollins',
                    publishing: 'Antonio de Saint-Exupéry',
                    years: '2011'
                }

            ]
        }
    }

    listBook = () => {
        // let url = "http://5d123a8084e9060014576aeb.mockapi.io/book";
        // fetch(url).then(resposta => {
        //     return resposta.json();
        // })
        //     .then(dados => {
        //         // console.log('DADOS', dados);
        //         this.setState({ books: dados })
        //     })
        //     .catch(e => {
        //         console.log('ERRO AO BUSCAR DADOS')
        //         this.setState({ error: true });
        //     })
    }

    render() {
        return (
            <div>
                {/* Tables */}
                <table class="table">
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
                                        <div>{book.name}</div>
                                        <div>{`(${book.isbn})`}</div>
                                    </td>
                                    <td>{book.author}</td>
                                    <td>{book.publishing}</td>
                                    <td>{book.years}</td>
                                    <td>Datalhes</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
                {/* Pagination */}
                <nav aria-label="Page navigation example">
                    <ul class="pagination">
                        <li class="page-item"><a class="page-link" href="#">Anterior</a></li>
                        <li class="page-item"><a class="page-link" href="#">1</a></li>
                        <li class="page-item"><a class="page-link" href="#">2</a></li>
                        <li class="page-item"><a class="page-link" href="#">3</a></li>
                        <li class="page-item"><a class="page-link" href="#">Próxima</a></li>
                    </ul>
                </nav>
            </div>
        )
    }

}