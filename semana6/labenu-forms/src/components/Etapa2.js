import React from 'react'

export default class Etapa1 extends React.Component {
state = {
    curso: "",
    unidade:""
}

onChangeCurso = (e) => {
    this.setState({inputCurso: e.target.value})
}
onChangeUnidade = (e) => {
    this.setState({inputUnidade: e.target.value})
}



render () {

    return (
        <div>

        <h1>ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR</h1>
        <ul>
            <li>Qual o curso?</li>
            <input
                value={this.state.inputCurso}
                type="text"
                onChange={this.onChangeCurso}
            />

            <li>Qual a unidade de ensino?</li>
            <input
                value={this.state.inputUnidade}
                type="text"
                onChange={this.onChangeUnidade}
            />
        </ul>

        </div>
    )
}


} 