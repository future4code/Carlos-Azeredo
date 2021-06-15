import React from 'react'


export default class Etapa1 extends React.Component {

    state = {
        nome: "",
        idade: "",
        email:""
    }

    onChangeNome = (e) => {
        this.setState({ inputNome: e.target.value });
    }

    onChangeIdade = (e) => {
        this.setState({ inputIdade: e.target.value})
    }

    onChangeEmail = (e) => {
        this.setState({inputEmail: e.target.value})
    }


    render() {

        return (

            <background>

                <h1>ETAPA 1 - DADOS GERAIS</h1>
                <ul>
                    <li>Qual seu nome?</li>
                    <input
                        value={this.state.inputNome}
                        type="text"
                        onChange={this.onChangeNome}
                    />

                    <li>Qual sua idade?</li>
                    <input
                        value={this.state.inputIdade}
                        type="number"
                        onChange={this.onChangeIdade}
                    />

                    <li>Qual seu e-mail?</li>
                    <input
                        value={this.state.inputEmail}
                        type="email"
                        onChange={this.onChangeEmail}
                    />

                    <li>Qual a sua escolaridade?</li>
                    <select>
                        <option></option>
                        <option>Ensino Medio Incompleto</option>
                        <option>Ensino Medio Completo</option>
                        <option>Ensino Superior Incompleto</option>
                        <option>Ensino Superior Completo</option>
                    </select>

                </ul>

            </background>
        )
    }







} 