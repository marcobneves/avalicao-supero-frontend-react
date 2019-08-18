
import React, { Component } from 'react';

export default class List extends Component {

    constructor() {
        super();
        this.state = {
            // titulo: '',
            // preco: '',
            // autor: '',
            // autores: []
        }
    }

    listBook = () => {
        // let url = "http://5d123a8084e9060014576aeb.mockapi.io/autor";
        // fetch(url).then(resposta => {
        //     return resposta.json();
        // })
        //     .then(dados => {
        //         // console.log('DADOS', dados);
        //         this.setState({ autores: dados })
        //     })
        //     .catch(e => {
        //         console.log('ERRO AO BUSCAR DADOS')
        //         this.setState({ error: true });
        //     })
    }

    render() {
        return (
            <div>List</div>
        )
    }

}