import axios from 'axios'
import React from 'react'
import styled from 'styled-components'
import App from '../App'
const Dividir = styled.div`
    display: flex;
    justify-content: right;
    align-items:center;
    margin-top: 8%;
    border:1px solid black;
    padding:10px;
    margin:10px;
    width:500px;
    justify-content:space-between;
`
const Borda=styled.div`
    border: 1px solid black;
`
const url="https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/:id"
const headers = {
    headers:{
      Authorization: "carlos-azeredo-molina"
    }
  }
export default class Usuarios extends React.Component{
    state={
        trocaTela:false
    }


    onClickTroca=()=>{
        this.setState({trocaTela:!this.state.trocaTela})
    }
    
    
    excluirUsuario= (id) => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`
        axios.delete(url, {
            headers: {
                Authorization: "carlos-azeredo-molina"
            }
        })
        .then((resposta) => {
            alert("Usuário(a) deletado(a) com sucesso!")
            //const iden =this.props.arrayNomes.map((nome)) =>{
               this.pegarUser()
         })
        .catch((err) => {
           // const iden =this.props.arrayNomes.map((nome)) =>{
           // console.log(err.response.data)
            alert("Ocorreu um erro, tente novamente")
        })
     } 

       
render(){
   
    const componentesArray = this.props.arrayNomes.map((nome)=>{
        return (
            <Dividir>
            <li key={nome.id}>{nome.name}</li>
            <button onClick={() => this.excluirUsuario(nome.id)}>Deletar</button>
            </Dividir>
          
          )
      })
        return(
            <div>
                {this.state.trocaTela? <App/> : <div> 
                                                <button onClick={this.onClickTroca}>voltar tela</button>
                                                <Borda>
                                                {componentesArray}
                                                </Borda></div>}
               
            </div>
           
        )
    }
}