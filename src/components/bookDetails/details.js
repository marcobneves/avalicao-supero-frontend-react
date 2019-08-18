
import React, { Component } from 'react';

const modalShow = {
    display: 'initial'
}

export default class Details extends Component {

    constructor(props) {
        super(props);
        this.state = {
            show: false
        }
    }

    componentWillReceiveProps(props) {
        this.setState({ show: props.show });
        this.setState({ book: props.book })
    }

    hideModal = () => {
        this.setState({ show: false });
    };

    render() {
        return (
            <div>
                {this.state.show &&
                    <div class="modal" style={modalShow} role="dialog">
                        <div class="modal-dialog" role="document">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title">Detalhes</h5>
                                    <button type="button" onClick={() => this.hideModal()} class="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div class="modal-body">
                                    <div class="card">
                                        <div class="card-body">
                                            <h3 class="card-title">{this.state.book.name}</h3>
                                            <p class="card-text">Autor: {this.state.book.author}</p>
                                            <p class="card-text">Editora: {this.state.book.publishing}</p>
                                            <p class="card-text">Ano: {this.state.book.years}</p>
                                            <p class="card-text">Idioma: {this.state.book.language}</p>
                                            <p class="card-text">Peso(g): {this.state.book.length}</p>
                                            <p class="card-text">Comprimento (cm): {this.state.book.weight}</p>
                                            <p class="card-text">Largura (cm): {this.state.book.width}</p>
                                            <p class="card-text">Altura (cm): {this.state.book.height}</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" onClick={() => this.hideModal()} class="btn btn-secondary" data-dismiss="modal">Fechar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                }
            </div>
        )
    }

}