import React from 'react'

export default class Etapa1 extends React.Component {
state = {
    nãoTerminou: ""
}

onChangeNãoTerminou = (e) => {
    this.setState({inputNãoTerminou: e.target.value})
}



render () {

    return (
        <div>

        <h1>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</h1>
        <ul>
            <li>Por que você não terminou o curso de graduação?</li>
            <input
                value={this.state.inputNãoTerminou}
                type="text"
                onChange={this.onChangeNãoTerminou}
            />

            <li>Você fez algum curso complementar?</li>
            <select>
                <option></option>
                <option>Curso Tecnico</option>
                <option>Cursos de inglês</option>
                <option>Não fiz curso algum</option>
            </select>
        </ul>

        </div>
    )
}


} 