import styled from 'styled-components'
import axios from 'axios'
import React from 'react'
import Usuarios from './components/Usuarios'

const Container=styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  border: 1px solid black;
  margin-top: 5%;
  margin-right: 40%;
  margin-left: 40%;
  padding:80px;
 width:400px
    
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
  .catch((erro)=>{
    alert("Ocorreu um erro , tente novamente!")
  })
}

criarUsuario=()=>{
  console.log(this.state)
  const body={
   name:this.state.inputName,
    email:this.state.inputEmail
  }
  axios.post(url,body,headers)
  .then(()=> {
   
    this.setState({inputName:""})
    this.setState({inputEmail:""})
    this.pegarUsuario()
    alert ("cadastro realizado com sucesso")
  })
  .catch((err)=>{
    console.log(err.response.data)
  })
}
onClickTroca=()=>{
  this.setState({trocaTela:!this.state.trocaTela})
}
  render() {
   
    console.log(this.state.arrayNomes)

    return(
      <div>
         {this.state.trocaTela? <Usuarios arrayNomes={this.state.arrayNomes}/> :<div> <button onClick={this.onClickTroca} >Ir para página de lista </button>
     
        <Container>

       
        <input placeholder={"nome"} value={this.state.inputName} onChange={this.onChangeName}/> 
        
        <input placeholder={"E-mail"} value={this.state.inputEmail} onChange={this.onChangeEmail} /> 
       
       <button onClick={this.criarUsuario}>Salvar</button>
      </Container>
      
      </div>
  }
      </div>
    )
  }
}

