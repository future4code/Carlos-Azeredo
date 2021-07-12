import styled from 'styled-components'
import {useHistory} from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
import {StyledButton, ButtonsDiv, StyledInput, StyledSelect } from './styled'


const MainContainerHomePage = styled.div`
background-image: url("https://image.shutterstock.com/z/stock-photo-earth-in-the-space-blue-planet-for-wallpaper-green-planet-or-globe-on-galaxy-elements-of-this-1718232061.jpg");
display:flex;
flex-direction:column;
background-repeat: no-repeat;
background-position: top center ;
background-size: cover;`


const Title = styled.h1`
margin:auto;
color:white;
`


function CreateTripPage() {
const [nome,setNome] = useState('')
const [planeta,setPlaneta] = useState('1')
const [data,setData] = useState('')
const [descricao,setDescricao] = useState('')
const [duracao,setDuracao] = useState(Number)

function handleNome (event){
  setNome(event.target.value)
}
function handlePlaneta(event){
  setPlaneta(event.target.value)
}
function handleData(event){
  setData(event.target.value)
}
function handleDescricao(event){
  setDescricao(event.target.value)
}
function handleDuracao(event){
  setDuracao(event.target.value)
}

  const history = useHistory()
  function createTrip(){
    const body = {

      "name": nome,
        "planet": planeta,
        "date": data,
        "description": descricao,
        "durationInDays": duracao
    }

    const header = {
      'Content-Type': 'application/json',
      'auth' : localStorage.getItem('token')
    }

    axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labeX/carlos-azeredo-molina/trips',body,{
    headers: header}).then((res)=>{
      alert('viagem criada com sucesso, codigo: '+res.status)
    history.push('/AdminHomePage')
  }
    ).catch((err) => console.log(err))
  }
  function voltar(){
  history.push("/AdminHomePage")
  }
    return (
      <MainContainerHomePage>
        <Title> Criar Viagem</Title>
      
        <StyledInput placeholder='Nome'
        value={nome} name='' onChange={handleNome} ></StyledInput>

        <StyledSelect placeholder='Escolha o planeta' value={planeta} name='' onChange={handlePlaneta}>
        <option value='1' disabled>Escolha o planeta</option>       
    
        <option>Plutão</option>
        <option>Lua</option>
        <option>Venus</option>
        <option>Jupter</option>
       <option>Marte</option>    

</StyledSelect>
<StyledInput type='date' value={data} name='' onChange={handleData} placeholder='mm/dd/yyy' ></StyledInput>
<StyledInput value={descricao} name='' onChange={handleDescricao} placeholder='descricao' ></StyledInput>
<StyledInput value={duracao} name='duration' type="number" onChange={handleDuracao} placeholder='duracao em dias' ></StyledInput>
<ButtonsDiv>
  <StyledButton> <button onClick={voltar}>Voltar</button></StyledButton>
  <StyledButton> <button onClick={createTrip} >Criar</button></StyledButton>
  </ButtonsDiv>

      </MainContainerHomePage>
    );
  }
  
  export default CreateTripPage;