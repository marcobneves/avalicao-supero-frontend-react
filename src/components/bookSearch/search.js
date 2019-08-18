
import React, { Component } from 'react';
import logo from '../../image/supero.svg'

const logoSize = {
    width: '150px'
}

export default class Search extends Component {

    constructor() {
        super();
        this.state = {
            search: {}
        }
    }


    SearchRequest = () => {
        // let url = "http://5d123a8084e9060014576aeb.mockapi.io/search";
        // fetch(url).then(resposta => {
        //     return resposta.json();
        // })
        //     .then(dados => {
        //         // console.log('DADOS', dados);
        //         this.setState({ search: dados })
        //     })
        //     .catch(e => {
        //         console.log('ERRO AO BUSCAR DADOS')
        //         this.setState({ error: true });
        //     })
    }

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-2">
                        <img src={logo} className="App-logo" style={logoSize} alt="logo" />
                    </div>
                    <div className="col">
                        <div class="input-group mb-3">
                            <input type="text" class="form-control" placeholder="Busque livro pelo título, autor ou ISBN" aria-label="Recipient's username" aria-describedby="button-addon2" />
                            <div class="input-group-append">
                                <button class="btn btn-outline-secondary" type="button" id="button-addon2">Buscar</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-3">Filtrar ano de publicação</div>
                    <div className="col-2">
                        <div class="input-group">
                            <input type="text" aria-label="Last name" class="form-control" />
                        </div>
                    </div>
                    <div className="col-2">
                        <div class="input-group">
                            <input type="text" aria-label="Last name" class="form-control" />
                        </div>
                    </div>
                    <div className="col">Resultada de busca</div>
                </div>
            </div>
        )
    }

}