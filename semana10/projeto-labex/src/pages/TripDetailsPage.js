import axios from "axios";
import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import createHistory from 'history/createBrowserHistory'
import styled from 'styled-components'
import { MainContainerHomePage} from './styled'

const Appl = styled.div`
background-image: url("https://image.shutterstock.com/z/stock-photo-earth-in-the-space-blue-planet-for-wallpaper-green-planet-or-globe-on-galaxy-elements-of-this-1718232061.jpg");
display:flex;
flex-direction:column;
background: rgba(251,251,251,1);
border-radius: 10px;
align-items: flex-start;
box-shadow: 2px 2px 5px 0px;
margin: 15px;
p{
  margin: 1px;
}
`

const Title = styled.h1`
margin:auto;
color:white;
`

const Appli = styled.div`
display:flex;
color:white;
`

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

function TripDetails() {
  const histori = createHistory();
  const history = useHistory()

   const params = useParams()
   const id = params.id
   let reload = 0
  console.log(id)
const [trip,setTrip] = useState({candidates:[],approved:[]})
useEffect(()=>{
  const header = {
    'auth' : localStorage.getItem('token')
  }
  axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/carlos-azeredo-molina/trip/${id}`,{
    headers: header}).then(
    (res) => {setTrip(res.data.trip)
      console.log(trip)
    }
  ).catch((err)=> console.log(err))
},[id, reload, trip])
 


function aprovarCandidato(eid){
  const header = {
    'Content-Type': 'application/json',
    'auth' : localStorage.getItem('token')
  }

  const bodi = {
    approve:true
  }
  axios.put(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/carlos-azeredo-molina/trips/${id}/candidates/${eid}/decide`,bodi,{headers:header}).then((res)=> histori.go(0))
 }


 function rejeitarCandidato(eid){
  const header = {
    'Content-Type': 'application/json',
    'auth' : localStorage.getItem('token')
  }

  const bodi = {
    approve:false
  }
  axios.put(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/carlos-azeredo-molina/trips/${id}/candidates/${eid}/decide`,bodi,{headers:header}).then((res)=> histori.go(0)  )
 }


    return (
      <MainContainerHomePage>
        <Appli>{trip.name}</Appli>
      <Appli>Nome : {trip.name}</Appli>
      <Appli>Descrição : {trip.description}</Appli>
      <Appli>Planeta : {trip.planet}</Appli>
      <Appli>Duração : {trip.durationInDays}</Appli>
      <Appli>Data : {trip.date}</Appli>
<Botao onClick={() => history.push('/AdminHomePage')}>Voltar</Botao>
<Appli  >Candidatos Pendentes</Appli>
{trip.candidates.map((el)=> <Appl><p>Nome : {el.name}</p><p>Profissão : {el.profession}</p><p>País : {el.country}</p><p>Idade : {el.age}</p><p>Texto de Candidatura : {el.applicationText}</p><Appli><button onClick={() => rejeitarCandidato(el.id) } >Rejeitar</button><button onClick={() => aprovarCandidato(el.id) }>Aprovar</button></Appli></Appl>)} 
<Appli >Candidatos Aprovados</Appli>
{trip.approved.map((el)=> <Appl><p>Nome : {el.name}</p><p>Profissão : {el.profession}</p><p>País : {el.country}</p><p>Idade : {el.age}</p><p>Texto de Candidatura : {el.applicationText}</p></Appl>)} 
      </MainContainerHomePage>
    );
  }
  
  export default TripDetails;
  