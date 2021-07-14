import styled from 'styled-components'
import {useHistory} from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'


const Botao = styled.button`
grid-column-start: 2;
grid-row-start: 3;
border-radius: 8px;
font-size: 1rem;
border:none;
cursor: pointer;
border: 1px solid ${props => props.color};
border-bottom: 50%;
width: 140px;
height:50px;
padding: 0.35rem; 
:hover{
    transform: scale(1.2);
    transition: all 0.5s;
    background-color: ${props => props.color};
}
:active{
    background-color: ${props => props.activeColor};
}

`

const Botao2 = styled.button`
grid-column-start: 2;
grid-row-start: 3;
border-radius: 8px;
font-size: 1rem;
border:none;
cursor: pointer;
border: 1px solid ${props => props.color};
border-bottom: 50%;
width: 140px;
height:50px;
padding: 0.35rem; 
:hover{
    transform: scale(1.2);
    transition: all 0.5s;
    background-color: ${props => props.color};
}
:active{
    background-color: ${props => props.activeColor};
}

`

const Botoes = styled.div`
display: flex;
justify-content: center;
gap:50px;
margin: 30px;
`


const Appl = styled.div`
display: flex;
flex-direction: column;
background-image: url("https://image.shutterstock.com/z/stock-photo-earth-in-the-space-blue-planet-for-wallpaper-green-planet-or-globe-on-galaxy-elements-of-this-1718232061.jpg");
`

const Appli = styled.div`


display: flex;
flex-direction: column;
justify-content: center;
background: rgba(251,251,251,1);
border-radius: 10px;
align-items: flex-start;
box-shadow: 2px 2px 5px 0px;
padding: 2px 2px 2px 10px ;
margin: 15px;
&:hover{
  background: rgba(214,214,214,1);
}
p{ margin:0px;
justify-content:center;}
`

const Title = styled.h1`
margin:auto;
color:white;
`


 function ListTripsPage() {
let history = useHistory()
const [viagens,setViagens] = useState([])
 function handleClickRoute(rota) {
  history.push("/ApplicationFormPage");
}

const renderMainPage = () => {
  history.push('/')
}
useEffect(()=>{
axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/carlos-azeredo-molina/trips`).then((res)=>{
console.log(res.data.trips)
setViagens(res.data.trips)
})

},[])



    return (
      <Appl>
        <Botoes>
<Botao onClick={() => renderMainPage("/") }>Voltar</Botao>  
<Botao2
onClick={() => handleClickRoute("/ApplicationFormPage") }
>Inscrever-se</Botao2>  
</Botoes>
<Title  >Lista de Viagens</Title>  
{ 
(localStorage.getItem('token'))?
 viagens.map((el)=><Appli onClick={() => history.push(`/app/${el.id}`)} >
  <p>Nome : {el.name}</p>
  <p>Descrição : {el.description}</p>
  <p>Planeta : {el.planet}</p>
    <p> Duração : {el.durationInDays}</p>
    <p>Data : {el.date}</p>
  </Appli>) : viagens.map((el)=><Appli >
  <p>Nome : {el.name}</p>
  <p>Descrição : {el.description}</p>
  <p>Planeta : {el.planet}</p>
    <p> Duração : {el.durationInDays}</p>
    <p>Data : {el.date}</p>
  </Appli>)

}

  </Appl>
    );
  }
  
  export default ListTripsPage;
