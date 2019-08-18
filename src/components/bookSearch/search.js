
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


    searchRequest = () => {
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
                <div className="row  pt-md-2">
                    <div className="col-2">
                        <img src={logo} className="App-logo" style={logoSize} alt="logo" />
                    </div>
                    <div className="col">
                        <div className="input-group form-inline">
                            <input type="text" className="form-control form-control-lg" placeholder="Busque livro pelo título, autor ou ISBN" aria-label="Recipient's username" aria-describedby="button-addon2" />
                            <div className="input-group-append">
                                <button className="btn btn-outline-secondary" type="button" id="button-addon2">Buscar</button>
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
                            <input type="text" placeholder="2019" className="form-control form-control-lg" />
                            <input type="text" placeholder="2020" className="form-control form-control-lg" />
                        </div>

                    </div>
                    <div className="col text-right">Resultado de busca</div>
                </div>
            </div>
        )
    }

}