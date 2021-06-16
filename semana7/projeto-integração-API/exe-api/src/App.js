import styled from 'styled-components'
import axios from 'axios'
import React from 'react'
import Usuarios from './components/Usuarios'

const Container=styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid black;
  margin-top: 5%;
  margin-right: 40%;
  margin-left: 40%;
`


const url =
  "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";
const headers = {
  headers: {
    Authorization: "carlos-azeredo-molina"
  }
}

export default class App extends React.Component {
  state = {
    arrayNomes: [],
    inputName: "",
    inputEmail:"",
    trocaTela: false
  }
  componentDidMount() {
    this.pegarUsuario()
  }


onChangeName = (event)  => {
this.setState({inputName: event.target.value})
}
 onChangeEmail =(event) => {
   this.setState({inputEmail:event.target.value})
 }

 pegarUsuario=()=>{
  axios.get(url,headers)
  .then((resposta)=>{
    console.log(resposta.data)
    this.setState({arrayNomes:resposta.data})
  })
  .catch((err)=>{
    
  })
}

criarUsuario=()=>{
  const body={
   name:this.state.inputName,
    email:this.state.inputEmail
  }
  axios.post(url,body,headers)
  .then(()=>{
    alert("playlist cadastrada com sucesso")
    this.setState({inputName:""})
    this.pegarUsuario()
  })
  .catch((err)=>{
    console.log(err.response.data)
  })
}
onClickTroca=()=>{
  this.setState({trocaTela:!this.state.trocaTela})
}
  render() {
   
    

    return(
      <div>
         {this.state.trocaTela? <Usuarios arrayNomes={this.state.arrayNomes}/> :<div> <button onClick={this.onClickTroca} >Ir para página de lista </button>
     
        <Container>

        <label>Nome</label>
        <input value={this.state.inputName} onChange={this.onChangeNome}/> 
        <label >E-mail</label>
        <input value={this.state.inputEmail} onChange={this.onChangeEmail} /> 
        <button onClick={this.criarUsuario}>Salvar</button>
      </Container>
      
      </div>
  }
      </div>
    )
  }
}

