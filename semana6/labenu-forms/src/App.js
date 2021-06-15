import React from 'react'
import Etapa1 from './components/Etapa1';
import Etapa2 from './components/Etapa2';
import Etapa3 from './components/Etapa3';
import Final from './components/Final';
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components'

const Background = styled.div ` 
background-color:blue;
height: 100vh;
text-align:center;
color: white;
`
const EstilosGlobais = createGlobalStyle `
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }
`

const Button = styled.div ` 
  border-radius: 7.25rem;
  background: black;
  color: rgb(255, 255, 255);
  width: 100px;
  margin-top: 40px;
  margin: auto;
  margin-top: 10px;
  cursor: hand;
  cursor: pointer;
`
export default class App extends React.Component {

state = {
  etapa:1
}

proximaEtapa = () => {
  this.setState({etapa: this.state.etapa +1})
}

  render() {

    const mudançasDePagina = () => {
      switch (this.state.etapa) {
        case 1:
          return <Etapa1/>;

        case 2: 
          return <Etapa2/>

        case 3: 
          return <Etapa3/>

        case 4: 
          return <Final/>

        default:
          break
      }
    }

    const botaoProximaEtapa = () => {
      if(this.state.etapa < 4) {
        return <Button onClick={this.proximaEtapa}> PROXIMO </Button>
      }
    }



    return (

    <Background>

    <EstilosGlobais/>
      <div>
        {mudançasDePagina()}
      </div>

      <div>
        {botaoProximaEtapa()}
      </div>

    </Background>

  );
  }

}