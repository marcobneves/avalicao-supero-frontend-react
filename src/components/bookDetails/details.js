
import React, { Component } from 'react';

export default class Details extends Component {

    constructor() {
        super();
        this.state = {
            book: {}
        }
    }

    details = () => {
        // let url = "http://5d123a8084e9060014576aeb.mockapi.io/book";
        // fetch(url).then(resposta => {
        //     return resposta.json();
        // })
        //     .then(dados => {
        //         // console.log('DADOS', dados);
        //         this.setState({ book: dados })
        //     })
        //     .catch(e => {
        //         console.log('ERRO AO BUSCAR DADOS')
        //         this.setState({ error: true });
        //     })
    }

    render() {
        return (
            <div>
                Details
            </div>
        )
    }

}